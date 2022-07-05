// Containers
let arrayContainer = document.getElementById("list");
let container = document.getElementById("container-h1");

// UI Stuff
let input = document.getElementById("number-input");

// Buttons 
let go = document.getElementById("go");
let bubble = document.getElementById("bubble");
let merge = document.getElementById("merge");
let heap = document.getElementById("heap");
let quick = document.getElementById("quick");

// Initilalize Empty Array 
let inputArray = [];

// Functions
//

// Put Numbers Into Array
function setNumbers() {
    if (input.value.length != 0) {
        inputArray.push(parseInt(input.value));
        arrayContainer.innerHTML += input.value + ", ";
        input.value = "";
    }
    input.focus();
}

// Clear List
function clearList() {
    arrayContainer.innerHTML = "";
    arrayContainer.textContent = "List of Numbers to Sort: ";
    container.innerHTML = "";
    inputArray = [];
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

document.getElementById("enter").addEventListener("click", () => {
    setNumbers();
});

document.getElementById("clear").addEventListener("click", () => {
   clearList(); 
});

go.addEventListener("click", () => {
    if (bubble.classList.contains("focus")) {
        bubbleSort(inputArray);
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
    else {
        alert("Select a Sort");
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