// Containers
let container = document.getElementById("container-h1");
let arrayContainer = document.getElementById("list");

// UI Stuff
let input = document.getElementById("number-input");

// Initilalize Empty Array 
let inputArray = [];

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

function setNumbers() {
    if (input.value.length != 0) {
        inputArray.push(input.value);
        console.log(inputArray);
        arrayContainer.innerHTML += input.value + ", ";
        input.value = "";
    }
}

// Buttons 
document.getElementById("bubble").addEventListener("click", () => {
  bubbleSort([9,3,6,7,32,6,8,1,3,5,4,6]);
}); 

document.getElementById("go").addEventListener("click", () => {
    setNumbers();
})