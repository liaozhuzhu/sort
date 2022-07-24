// Containers
let container = document.getElementById("container");

// UI Stuff
let sizeSelect = document.getElementById("size-selector");
let sizeValue = document.getElementById("size-value");

let speedSelect = document.getElementById("speed-selector");
let speedValue = document.getElementById("speed-value");

// Buttons 
let random = document.getElementById("random");
let bubble = document.getElementById("bubble");
let selection = document.getElementById("selection");
let insertion = document.getElementById("insertion");
let buttons = document.getElementsByTagName("button");

// Extra 
let size = sizeSelect.value;
sizeValue.innerHTML = size;
let speed = speedSelect.value;
speedValue.innerHTML = speed;

// Colors 
let skyeblue = "rgb(24, 190, 255)";
let purple = "rgb(171, 0, 223)";
let lightgreen = "rgb(49, 226, 13)";

// Functions
//

// Choose Size
sizeSelect.oninput = function() {
    size = sizeSelect.value;
    sizeValue.innerHTML = size;
    createRandom();
}
// Choose Speed
speedSelect.oninput = function() {
    speed = speedSelect.value;
    speedValue.innerHTML = speed;
}

// Bubble Sort
function swap(i, j) {
    return new Promise((resolve) => {
        window.requestAnimationFrame(function() {
            setTimeout(() => {
                container.insertBefore(j, i);
                resolve();
            }, speed);
        });
    });
}

async function bubbleSort() {
    buttonToggle(false);
    let bars = document.querySelectorAll(".bar");
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = skyeblue;
            bars[j + 1].style.backgroundColor = purple;
  
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
  
            let val1 = parseInt(bars[j].innerHTML);
            let val2 = parseInt(bars[j + 1].innerHTML);
  
            // To compare value of two blocks
            if (val1 > val2) {
                await swap(bars[j], bars[j + 1]);
                // Re iteration
                bars = document.querySelectorAll(".bar");
            }
  
            // Changing the color to the previous one
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";
        }
        
        // sorted color (light green)
        bars[bars.length - i - 1].style.backgroundColor = lightgreen;
    }
}

// Selection Sort
async function selectionSort() {
    buttonToggle(false);
    let bars = document.querySelectorAll(".bar");
    let min = 0;
    for (let i = 0; i < bars.length; i ++) {
        min = i;
        
        // Current Bar
        bars[i].style.backgroundColor = skyeblue;
    
        for (let j = i + 1; j < bars.length; j ++) {
    
            // Smallest Bar
            bars[j].style.backgroundColor = purple;
            
            // To pause the execution of code
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, speed)
            );
    
            // To store values of bars
            let val1 = parseInt(bars[j].innerHTML);
            let val2 = parseInt(bars[min].innerHTML);
               
               // Compare val1 & val2
               if (val1 < val2) {
                   if (min !== i) {
    
                    // Min(th) Bar
                   bars[min].style.backgroundColor = "red";
                    }
                   min = j;
                } 
                else {
                   // j(th) Bar
                    bars[j].style.backgroundColor = "red";
            }
        }
    
        // To swap ith and (min)th bar
        let temp1 = bars[min].style.height;
        let temp2 = bars[min].innerHTML;
        bars[min].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min].innerHTML = bars[i].innerHTML;
        bars[i].innerHTML = temp2;
            
        // To pause after each iteration
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, speed)
        );
        
        // Provide red color to the (min-idx)th bar
        bars[min].style.backgroundColor = "red";
        
        // Provide lightgreen color to global smallest bar
        bars[i].style.backgroundColor = lightgreen;
    }
}

// Insertion
async function insertionSort() {
    buttonToggle(false);
    let bars = document.querySelectorAll(".bar");
    bars[0].style.backgroundColor = lightgreen;

    for (let i = 1; i < bars.length; i++) {
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
        bars[i].style.backgroundColor = skyeblue;
        let switchHeight;
        let switchValue;
        let tempValue = bars[i].innerHTML;
        let j = i;
        let sorted = true;
        if (j > 0) {
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
            );
            bars[j-1].style.backgroundColor = purple;
        }
        while (j > 0 && parseInt(bars[j-1].innerHTML) > parseInt(tempValue)) {
            sorted = false;
            bars[j-1].style.backgroundColor = purple;
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
            );
            switchHeight = bars[j].style.height;
            switchValue = bars[j].innerHTML;
            bars[j].style.height = bars[j-1].style.height;
            bars[j].innerHTML = bars[j-1].innerHTML;
            bars[j-1].style.height = switchHeight;
            bars[j-1].innerHTML = switchValue;
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
            );
            bars[i].style.backgroundColor = lightgreen;
            bars[j-1].style.backgroundColor = skyeblue;
            j--;
        }
        if (j > 0 && parseInt(bars[j-1].innerHTML) < parseInt(tempValue)) {
            console.log(bars[j-1]);
            bars[j-1].style.backgroundColor = purple;
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
            );
            bars[j-1].style.backgroundColor = lightgreen;
        }
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, speed)
        );
        bars[j].style.backgroundColor = lightgreen;

        if (sorted) {
            bars[j-1].style.backgroundColor = lightgreen;
        }
    }
}

// Clear List
function clearList() {
    buttonToggle(true);
    container.innerHTML = "";
}

// Toggle Buttons 
function buttonToggle(on) {
    if (on) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
    }
    else {
        for (let i = 1; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
}

// Create Random Array 
function createRandom() {
    clearList();
    for (let i = 0; i < size; i++) {

        // To generate random values from 1 to 100
        let value = Math.floor(Math.random() * 99) + 1;
        
        // To create element "div"
        let bar = document.createElement("div");
    
        // To add class "bar" to "div"
        bar.classList.add("bar");
    
        // Provide height to the bar
        bar.style.height = `${value * 3}px`;

        // Provide bar value
        bar.innerHTML = value;
    
        // Append "div" to "data-container div"
        container.appendChild(bar);
    }
}

//
// End of Functions



// Buttons 
//

// Sort Buttons
bubble.addEventListener("click", () => {
    bubbleSort();
}); 

selection.addEventListener("click", () => {
    selectionSort();
}); 

insertion.addEventListener("click", () =>{
    insertionSort();
});

random.addEventListener("click", () => {
    createRandom();
});

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if (key.key == "Enter") {
        setNumbers();
    }
}
//
// End of Buttons

window.onload = () => {
    createRandom();
}