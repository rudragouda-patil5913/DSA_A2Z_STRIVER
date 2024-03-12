const insertionSort = (arr, n) => {
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j+1] = key;
  }
  return arr;
};

const arr = [4, 23, 6, 7, 1, 2, 33, 44, 0];
console.log(insertionSort(arr,arr.length));
