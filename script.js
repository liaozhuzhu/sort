// Containers
let container = document.getElementById("container-h1");
let arrayContainer = document.getElementById("list");

// UI Stuff
let input = document.getElementById("number-input");

// Buttons 
let bubble = document.getElementById("bubble");
let merge = document.getElementById("merge");
let heap = document.getElementById("heap");
let quick = document.getElementById("quick");

// Initilalize Empty Array 
let inputArray = [];
let numArray = [];

// Functions
//

// Put Numbers Into Array
function setNumbers() {
    if (input.value.length != 0) {
        inputArray.push(input.value);
        arrayContainer.innerHTML += input.value + ", ";
        input.value = "";
    }
    input.focus();
}

// Convert Input Array to Int and Begin Sort
function convertArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        numArray.push(parseInt(arr[i]));
    }
    bubbleSort(numArray);
}

// Bubble Sort
//
function bubbleSwap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function bubbleSort(arr) {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 0; j <= arr.length-i; j++) {
            if (arr[j] > arr[j+1]) {
                bubbleSwap(arr, j, j+1);
            }
        }
    }
    container.innerHTML = arr;
}
//
// End Bubble Sort

//
// End of Functions



// Buttons 
//

// Sort Buttons
bubble.click();
bubble.addEventListener("click", () => {
    bubble.classList.add("focus");
    merge.classList.remove("focus");
    heap.classList.remove("focus");
    quick.classList.remove("focus");
    bubbleSort([1, 23, 4, 232, 2, 1, 4, 5, 234, 5]);
}); 

merge.addEventListener("click", () => {
    bubble.classList.remove("focus");
    merge.classList.add("focus");
    heap.classList.remove("focus");
    quick.classList.remove("focus");
    bubbleSort([1, 23, 4, 232, 2, 1, 4, 5, 234, 5]);
}); 

heap.addEventListener("click", () => {
    bubble.classList.remove("focus");
    merge.classList.remove("focus");
    heap.classList.add("focus");
    quick.classList.remove("focus");
    bubbleSort([1, 23, 4, 232, 2, 1, 4, 5, 234, 5]);
}); 

quick.addEventListener("click", () => {
    bubble.classList.remove("focus");
    merge.classList.remove("focus");
    heap.classList.remove("focus");
    quick.classList.add("focus");
    bubbleSort([1, 23, 4, 232, 2, 1, 4, 5, 234, 5]);
}); 

document.getElementById("enter").addEventListener("click", () => {
    setNumbers();
});

document.getElementById("go").addEventListener("click", () => {
    convertArray(inputArray);
});

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if (key.key == "Enter") {
        setNumbers();
    }
}
//
// End of Buttons