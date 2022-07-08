// Containers
let container = document.getElementById("container");
let unsortedContainer = document.getElementById("unsorted-container");

// UI Stuff
let input = document.getElementById("number-input");

// Buttons 
let random = document.getElementById("random");
let clear = document.getElementById("clear");
let bubble = document.getElementById("bubble");
let selection = document.getElementById("selection");
let heap = document.getElementById("heap");
let quick = document.getElementById("quick");

// Initilalize 
let randomArray = [];

// Extra 
let finished = false;

// Functions
//

// Create Random Array 
function createRandom() {
    clearList();
    for (let i = 0; i < 50; i++) {

        // To generate random values from 1 to 100
        const value = Math.floor(Math.random() * 100) + 1;
        
        // To create element "div"
        const bar = document.createElement("div");
    
        // To add class "bar" to "div"
        bar.classList.add("bar");
    
        // Provide height to the bar
        bar.style.height = `${value * 3}px`;
    
        // Translate the bar towards positive X axis
        bar.style.transform = `translateX(${i * 3}px)`;
        
        // To create element "label"
        const barLabel = document.createElement("label");
    
        // To add class "bar_id" to "label"
        barLabel.classList.add("bar-label");
        
        // Assign value to "label"
	    barLabel.innerHTML = value;

        // Append "Label" to "div"  
        bar.appendChild(barLabel);
    
        // Append "div" to "data-container div"
        unsortedContainer.appendChild(bar);
    }
}

// Bubble Sort
// function bubbleSwap(arr, x, y) {
//     let temp = arr[x];
//     arr[x] = arr[y];
//     arr[y] = temp;
// }

// function bubbleSort(arr) {
//     if (finished) {
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = 0; j < arr.length-i; j++) {
//                 if (arr[j] > arr[j+1]) {
//                     bubbleSwap(arr, j, j+1);
//                 }
//             }
//         }
//         createDivs(arr);
//         finished = false;
//     }
// }

// Selection Sort
async function selectionSort() {
    let bars = document.querySelectorAll(".bar");
    console.log(bars);
    // Assign 0 to min
    var min = 0;
    for (var i = 0; i < bars.length; i ++) {
    
        // Assign i to min
        min = i;
    
        // Provide blue color to the current bar
        bars[i].style.backgroundColor = "rgb(24, 190, 255)";

        for (var j = i + 1; j < bars.length; j ++) {
    
            // Provide green color to the current smallest bar
            bars[j].style.backgroundColor = "green";
            
            // To pause the execution of code
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 1)
            );
    
            // To store values of bars
            let val1 = bars[j].offsetHeight;
            let val2 = bars[min].offsetHeight;
            console.log(val1);
            console.log(val2);
            
            // Compare val1 & val2
            if (val1 < val2) {
                if (min !== i) {
    
                // Provide red color to the (min)th bar
                bars[min].style.backgroundColor = "red";
                }
                min = j;
            } 
            else {
                // Provide red color to the jth bar
                bars[j].style.backgroundColor = "red";
            }
        }
    
        // To swap ith and (min)th bar
        var temp1 = bars[min].style.height;
        var temp2 = bars[min].childNodes[0].innerText;
        bars[min].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
        
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 5)
        );
    
        // Provide red color to the (min-idx)th bar
        bars[min].style.backgroundColor = "red";
    
        // Provide lightgreen color to global smallest bar
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
}

// Clear List
function clearList() {
    finished = true;
    unsortedContainer.innerHTML = "";
    randomArray = [];
}

//
// End of Functions



// Buttons 
//

// Sort Buttons
bubble.addEventListener("click", () => {

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

clear.addEventListener("click", () => {
   clearList(); 
});


window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if (key.key == "Enter") {
        setNumbers();
    }
}
//
// End of Buttons