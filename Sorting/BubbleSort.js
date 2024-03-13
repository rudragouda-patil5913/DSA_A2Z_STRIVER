const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};
//[0,1,2,4,1];
// const bubbleSort = (arr, n) => {
//   for (let i = 0; i < n; i++) {
//     let swapped = false;
//     for (let j = 0; j < n; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         swapped = true;
//       }
//     }
//     if (swapped == false) {
//         break;
//       }
//   }
//   return arr;
// };

const bubbleSort = (arr,n)=>{
  for(let i=0;i<n;i++){
    let swapped = true;
    for(let j=0;j<n;j++){
      if(arr[j]>arr[j+1]){
        swap(arr,j,j+1);
        swapped = true;
      }
    }
    if(swapped == false){
      break;
    }
  }
  return arr;
}

const arr = [10,9,8,7,6,5,4];
console.log(bubbleSort(arr, arr.length));
