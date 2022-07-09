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
let heap = document.getElementById("heap");
let quick = document.getElementById("quick");
let buttons = document.getElementsByTagName("button");

// Extra 
let size = sizeSelect.value;
sizeValue.innerHTML = size;
let speed = speedSelect.value;
speedValue.innerHTML = speed;

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
  
        // For exchanging styles of two blocks
        let temp = i.style.transform;
        i.style.transform = j.style.transform;
        j.style.transform = temp;
  
        window.requestAnimationFrame(function() {
  
            // For waiting for .25 sec
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

    for (let i = 0; i < bars.length; i ++) {
        for (let j = 0; j < bars.length - i - 1; j ++) {
            bars[j].style.backgroundColor = "rgb(24, 190, 255)";
            bars[j + 1].style.backgroundColor = "green";
  
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
  
            let val1 = Number(bars[j].childNodes[0].innerHTML);
            let val2 = Number(bars[j + 1]
                        .childNodes[0].innerHTML);
  
            // To compare value of two blocks
            if (val1 > val2) {
                await swap(bars[j], bars[j + 1]);
                bars = document.querySelectorAll(".bar");
            }
  
            // Changing the color to the previous one
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        bars[bars.length - i - 1].style.backgroundColor = "rgb(49, 226, 13)";
    }
}

// Selection Sort
async function selectionSort() {
    buttonToggle(false);

    finished = false;
    let bars = document.querySelectorAll(".bar");
    let min = 0;
    for (let i = 0; i < bars.length; i ++) {
        min = i;
        
        // Current Bar
        bars[i].style.backgroundColor = "rgb(24, 190, 255)";
    
        for (let j = i + 1; j < bars.length; j ++) {
    
            // Smallest Bar
            bars[j].style.backgroundColor = "green";
            
            // To pause the execution of code
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, speed)
            );
    
            // To store values of bars
            let val1 = parseInt(bars[j].childNodes[0].innerHTML);
                let val2 = parseInt(bars[min].childNodes[0].innerHTML);
               
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
        let temp2 = bars[min].childNodes[0].innerText;
        bars[min].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
            
        // To pause after each iteration
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 10)
        );
        
        // Provide red color to the (min-idx)th bar
        bars[min].style.backgroundColor = "red";
        
        // Provide lightgreen color to global smallest bar
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
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
        console.log(buttons);
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
        const value = Math.floor(Math.random() * 100) + 1;
        
        // To create element "div"
        const bar = document.createElement("div");
    
        // To add class "bar" to "div"
        bar.classList.add("bar");
    
        // Provide height to the bar
        bar.style.height = `${value * 3}px`;
    
        // Translate the bar towards positive X axis
        //bar.style.transform = `translateX(${i * 30}px)`;
        
        // To create element "label"
        const barLabel = document.createElement("label");
    
        // To add class "bar_id" to "label"
        barLabel.classList.add("bar-label");
        
        // Assign value to "label"
	    barLabel.innerHTML = value;

        // Append "Label" to "div"  
        bar.appendChild(barLabel);
    
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

heap.addEventListener("click", () => {

}); 

quick.addEventListener("click", () => {

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