// Largest element in array

//Brute force method

const largest1 = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
};
// O(nlogn);

// Optimal solution

const largest = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

// O(n)

// console.log(largest(arr));

/*************************************************************/

// Find Second Smallest and Second Largest Element in an array

//Brute-force method
const smallLarge1 = (arr) => {
  arr.sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1]];
};

const smallLarge = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } else if (max < arr[i]) {
      max = arr[i];
    }
  }
  return [arr[1], arr[arr.length - 2]];
};

// console.log(smallLarge(arr));

const sS_sL = (arr) => {
  let small = Infinity;
  let s_small = Infinity;
  let large = -Infinity;
  let s_large = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      s_small = small;
      small = arr[i];
    } else if (arr[i] < s_small && arr[i] !== small) {
      s_small = arr[i];
    }
  }
  return s_small;
};

// console.log(sS_sL(arr));

/*************************************************************/

//Check if Array is sorted or not

const checkSorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

// console.log(checkSorted(arr));

/*************************************************************/

//Remove duplicates In-Place from an array

const removeDuplicates = (arr) => {
  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];
    }
  }
  return i + 1;
};

// let k = removeDuplicates(arr);
// for (let i = 0; i < k; i++) {
//   console.log(arr[i]);
// }

/*************************************************************/

//Left Rotate of an array
const arr = [1, 1, 4, 4, 63, 93];

const rotateLeft = (arr) => {
  let x = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = x;
  return arr;
};

console.log(rotateLeft(arr));
