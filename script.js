let container = document.getElementById("container-h1");
let arr = new Array(1,3,5,4,6);

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
  bubbleSort([1,3,5,4,6]);
}); 