const swap = (arr,min_idx,i)=>{
    let temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
    return arr;
}


const selectionSort = (arr, n) => {
  for (let i = 0; i < n; i++) {
    let min_idx = i;
    for (let j = i+1; j < n; j++) {
        if(arr[j] <arr[min_idx]){
            min_idx = j;
        }
    }
    swap(arr,min_idx,i);
  }
  return arr;
};

const arr = [0,1,-1,61, 12,67, 23,11,11, 11, 1];
console.log(selectionSort(arr, arr.length));
