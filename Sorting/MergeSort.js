function Merge(arr, l, m, r) {
    console.log(l,m,r);
  let n1 = m - l + 1;
  let n2 = r - m;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }
  var i = 0;
  var j = 0;
  var k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
 
}

function MergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  let m = l + parseInt((r - l) / 2);
  MergeSort(arr, l, m);
  MergeSort(arr, m + 1, r);
  Merge(arr, l, m, r);
}

const arr = [4, 2, 3, 6];
MergeSort(arr, 0, arr.length - 1);
console.log(arr);
