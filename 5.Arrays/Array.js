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

const arr = [10, 8, 2, 3, 54, 22, 1];

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
  return [min, max];
};

console.log(smallLarge(arr));
