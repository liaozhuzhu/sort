// Containers
let container = document.getElementById("container");
let sortedContainer = document.getElementById("sorted-container");
let unsortedContainer = document.getElementById("unsorted-container");

// UI Stuff
let input = document.getElementById("number-input");

// Buttons 
let random = document.getElementById("random");
let clear = document.getElementById("clear");
let go = document.getElementById("go");
let bubble = document.getElementById("bubble");
let merge = document.getElementById("merge");
let heap = document.getElementById("heap");
let quick = document.getElementById("quick");

// Initilalize Empty Array 
let randomArray = [];

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
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            if (arr[j] > arr[j+1]) {
                bubbleSwap(arr, j, j+1);
            }
        }
    }
    createDivs(arr);
}
//
// End Bubble Sort

// Create Divs
//
function createDivs(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sortedBlock = document.createElement("div");
        sortedBlock.classList.add("created-block");
        sortedBlock.setAttribute("id", "sorted-block");
        sortedBlock.style.height = arr[i] + "px";
        sortedContainer.appendChild(sortedBlock);
    }
}

function createUnsortedDivs(arr) {
    for (let i = 0; i < arr.length; i++) {
        let unsortedBlock = document.createElement("div");
        unsortedBlock.classList.add("created-block");
        unsortedBlock.setAttribute("id", "unsorted-block");
        unsortedBlock.style.height = arr[i] + "px";
        unsortedContainer.appendChild(unsortedBlock);
    }
}

//
// End Create Divs


//
// End of Functions



// Buttons 
//

// Sort Buttons
bubble.click();
bubble.addEventListener("click", () => {
    console.log("bubble");
    bubble.classList.add("focus");
    merge.classList.remove("focus");
    heap.classList.remove("focus");
    quick.classList.remove("focus");
}); 

merge.addEventListener("click", () => {
    bubble.classList.remove("focus");
    merge.classList.add("focus");
    heap.classList.remove("focus");
    quick.classList.remove("focus");
}); 

heap.addEventListener("click", () => {
    bubble.classList.remove("focus");
    merge.classList.remove("focus");
    heap.classList.add("focus");
    quick.classList.remove("focus");
}); 

quick.addEventListener("click", () => {
    bubble.classList.remove("focus");
    merge.classList.remove("focus");
    heap.classList.remove("focus");
    quick.classList.add("focus");
}); 

random.addEventListener("click", () => {
    createRandom();
});

clear.addEventListener("click", () => {
   clearList(); 
});

go.addEventListener("click", () => {
    if (bubble.classList.contains("focus")) {
        bubbleSort(randomArray);
    }
    if (merge.classList.contains("focus")) {
        console.log("merge");
    }
    if (heap.classList.contains("focus")) {
        console.log("heap");
    }
    if (quick.classList.contains("focus")) {
        console.log("quick");
    }
});

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if (key.key == "Enter") {
        setNumbers();
    }
}
//
// End of Buttons