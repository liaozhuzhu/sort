// Containers
let container = document.getElementById("container");
let sortedContainer = document.getElementById("sorted-container");
let unsortedContainer = document.getElementById("unsorted-container");

// UI Stuff
let input = document.getElementById("number-input");

// Buttons 
let random = document.getElementById("random");
let clear = document.getElementById("clear");
let bubble = document.getElementById("bubble");
let merge = document.getElementById("merge");
let heap = document.getElementById("heap");
let quick = document.getElementById("quick");

// Initilalize 
let randomArray = [];
let unsortedBlock;

// Extra 
let finished = false;

// Functions
//

// Create Random Array 
function createRandom() {
    clearList();
    for (let i = 0; i < 50; i++) {
        let randomInt = Math.floor(Math.random() * 501);
        if (randomInt != 0) {
            randomArray.push(randomInt);
        }
    }
    createUnsortedDivs(randomArray);
}
// Clear List
function clearList() {
    finished = true;
    sortedContainer.innerHTML = "";
    unsortedContainer.innerHTML = "";
    randomArray = [];
}

// Bubble Sort
//
function bubbleSwap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function bubbleSort(arr) {
    if (finished) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length-i; j++) {
                if (arr[j] > arr[j+1]) {
                    bubbleSwap(arr, j, j+1);
                }
            }
        }
        createDivs(arr);
        finished = false;
    }
}
//
// End Bubble Sort

// Create Divs
function createUnsortedDivs(arr) {
    for (let i = 0; i < arr.length; i++) {
        unsortedBlock = document.createElement("div");
        unsortedBlock.classList.add("unsorted-block");
        unsortedBlock.setAttribute("id", "unsorted-block");
        unsortedBlock.style.height = arr[i] + "px";
        unsortedContainer.appendChild(unsortedBlock);
    }
}

// Test
function bubbleDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let block = document.createElement("div");
        block.classList.add("block");
        block.setAttribute("id", "sorted-block");
        block.innerHTML = arr[i];
        sortedContainer.appendChild(block);
    }   
}

//
// End of Functions



// Buttons 
//

// Sort Buttons
bubble.addEventListener("click", () => {
    bubbleDisplay(randomArray);
}); 

merge.addEventListener("click", () => {

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