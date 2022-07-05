// Containers
let container = document.getElementById("container-h1");
let arrayContainer = document.getElementById("list");

// UI Stuff
let input = document.getElementById("number-input");

// Initilalize Empty Array 
let inputArray = [];


function setNumbers() {
    if (input.value.length != 0) {
        inputArray.push(input.value);
        arrayContainer.innerHTML += input.value + ", ";
        input.value = "";
    }
    input.focus();
}

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

// Buttons 
document.getElementById("bubble").addEventListener("click", () => {
  bubbleSort([1, 23, 4, 232, 2, 1, 4, 5, 234, 5]);
}); 

document.getElementById("enter").addEventListener("click", () => {
    setNumbers();
});

document.getElementById("go").addEventListener("click", () => {
    console.log(inputArray);
    bubbleSort(inputArray);
});