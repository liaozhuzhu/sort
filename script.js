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
let merge = document.getElementById("merge");
let quick = document.getElementById("quick");
let buttons = document.getElementsByTagName("button");

// Extra 
let size = sizeSelect.value;
sizeValue.innerHTML = size;
let speed = speedSelect.value;
speedValue.innerHTML = speed;
let bars = document.querySelectorAll(".bar");

// Colors 
let skyeblue = "rgb(24, 190, 255)";
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
    bars = document.querySelectorAll(".bar");
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = skyeblue;
            bars[j + 1].style.backgroundColor = "green";
  
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
    bars = document.querySelectorAll(".bar");
    let min = 0;
    for (let i = 0; i < bars.length; i ++) {
        min = i;
        
        // Current Bar
        bars[i].style.backgroundColor = skyeblue;
    
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
        }, 10)
        );
        
        // Provide red color to the (min-idx)th bar
        bars[min].style.backgroundColor = "red";
        
        // Provide lightgreen color to global smallest bar
        bars[i].style.backgroundColor = lightgreen;
    }
}

// Merge Sort 
async function mergeArray(leftArr, rightArr) {
    console.log(leftArr[0]);
    console.log(rightArr[0]);
    leftArr[0].style.backgroundColor = skyeblue;
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, speed)
    );
    rightArr[0].style.backgroundColor = "green";
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, speed)
        );
    while (leftArr.length && rightArr.length) {
        let leftValue = parseInt(leftArr[0].innerHTML);
        let rightValue = parseInt(rightArr[0].innerHTML);
        if (rightValue < leftValue) {
            container.insertBefore(rightArr[0], leftArr[0]);
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
            );
            leftArr[0].style.backgroundColor = lightgreen;
            rightArr[0].style.backgroundColor = lightgreen;
            rightArr = rightArr.slice(1);
        }
        else {
            leftArr[0].style.backgroundColor = lightgreen;
            rightArr[0].style.backgroundColor = lightgreen;
            leftArr = leftArr.slice(1);
        }
    }
    
    // while (leftArr.lenght) {
    //     container.insertBefore(leftArr[0], bars[0]);
    //     leftArr[0].style.backgroundColor = lightgreen;
    //     leftArr = leftArr.slice(1);
    // }
    // while (rightArr.length) {
    //     container.insertBefore(rightArr[0], bars[0]);
    //     rightArr[0].style.backgroundColor = lightgreen;
    //     console.log(rightArr);
    //     rightArr = rightArr.slice(1);
    // }
}
function mergeSort(arr) {
    buttonToggle(false);
    let leftArr = [];
    let rightArr = [];
    if (arr.length <= 1) {
        return arr;
    }
    let midPoint = Math.floor(arr.length / 2);
    for (let i = 0; i < midPoint; i++) {
        leftArr.push(arr[i]);
    }
    for (let i = midPoint; i < arr.length; i++) {
        rightArr.push(arr[i]);
    }
    mergeArray (mergeSort(leftArr), mergeSort(rightArr));
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
        const value = Math.floor(Math.random() * 100) + 1;
        
        // To create element "div"
        const bar = document.createElement("div");
    
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

merge.addEventListener("click", () => {
    bars = document.querySelectorAll(".bar");
    mergeSort(bars);
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