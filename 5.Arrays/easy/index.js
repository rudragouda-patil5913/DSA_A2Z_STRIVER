//Find the largest element in array;

function problem1(arr) {
  let large = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
}

// console.log(problem1(arr));

// Find the second smallest and second larget in the array;

const secondSmall = (arr) => {
  let min = Number.MAX_VALUE;
  let secMin = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      secMin = min;
      min = arr[i];
    } else if (arr[i] < secMin && arr[i] != min) {
      secMin = arr[i];
    }
  }
  return secMin;
};

const secondLarge = (arr) => {
  let max = Number.MIN_VALUE;
  let secmax = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secmax = max;
      max = arr[i];
    } else if (arr[i] > secmax && arr[i] != max) {
      secmax = arr[i];
    }
  }
  return secmax;
};
// console.log(secondSmall(arr));
// console.log(secondLarge(arr));

// check if array is sorted or not;

function checksorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

// const arr2 = [1,2,3,4,5];
// console.log(checksorted(arr));
// console.log(checksorted(arr2));

//Remove duplicates from in-place sorted arry;

function replace(arr) {
  let j = 0;
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      arr[++j] = arr[i];
    }
  }
  arr.length = j + 1;
  return arr;
}

// console.log(replace(arr));

// let arr = [1,1,0,1,1,2,0,0,0,2,2,2,3,0,0,0,0,3,3,3,3,4,4,0,5,5,0,5,5];

//Move All zeros to end

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

// function moveZeros(arr){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//       for(let j=i+1;j<arr.length;j++){
//         if(arr[j] != 0){
//           swap(arr,i,j);
//         }
//       }
//     }
//   }
//   return arr;
// }

// T.C = O(n*n);

function moveZeros(arr) {
  let j = 0;
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] != 0) {
      swap(arr, i, j);
      j++;
    }
  }
  return arr;
}

// console.log(moveZeros(arr));

//  Rotate the array by k places

function reverse(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotate(arr, k, n) {
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}

// const arr = [1,2,3,4,5];

// console.log(rotate(arr,2,arr.length))

//Linear Search

function Search(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      return i;
    }
  }
}

// const arr = [2,3,1,5];

// console.log(Search(a,1));

// Missing number in array

function hash(arr, N) {
  let hash = new Array(N + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]]++;
  }
  for (let j = 1; j < hash.length; j++) {
    if (hash[j] === 0) return j;
  }
}

// console.log(hash(arr,5));

//Maximum Consecutive of One's

// let arr = [1,1,0,1,1,2,1,1,1,2,2,2,3,1,1,1,1,1,1,1,1,3,3,3,3,4,4,0,5,5,0,5,5];

function countOnes(arr) {
  let cnt = 0;
  let maxcnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      cnt++;
    } else {
      cnt = 0;
    }
    maxcnt = Math.max(cnt, maxcnt);
  }
  return maxcnt;
}

// console.log(countOnes(arr));

//Find number appears once and other's twice

// let arr = [2,2,3,3,1]

function appears(arr) {
  let xorr = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(xorr, "xorr", arr[i]);
    xorr = xorr ^ arr[i];
    console.log(xorr);
  }
  return xorr;
}

// console.log(appears(arr));

//Find largest sub-array

const arr = [2, 3, 5, 1, 1, 1, 1, 1, 5, 1, 9];

// function subarray(arr,k) {
//   let left = 0;
//   let right = 0;
//   let sum = arr[0];
//   let maxlen = 0;
//   let n = arr.length;

//   while(right<n){
//     while(left<= right && sum >k){
//       sum -= arr[left];
//       left++;
//     }
//     if(sum == k){
//       maxlen = Math.max(maxlen,right-left+1);
//     }
//     right++;
//     if(right< n) sum += arr[right];
//   }
//   return maxlen;
// }

function subarray(arr, k) {
  let maxclen = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > k) break;
      if (sum == k) {
        maxclen = Math.max(maxclen, j - i + 1);
      }
    }
  }

  return maxclen;
}

// console.log(subarray(arr,10))

//

function getLongestSubarray(a, k) {
  let n = a.length; // size of the array

  let preSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // calculate the prefix sum till index i
    sum += a[i];

    // if the sum = k, update the maxLen
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    // calculate the sum of remaining part i.e. x-k
    let rem = sum - k;

    // calculate the length and update maxLen
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }
    console.log(preSumMap, "before");
    // finally, update the map checking the conditions
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
      console.log(preSumMap, "after");
    }
  }
  console.log(preSumMap);

  return maxLen;
}

// let a = [-1, 1, 1];
let a = [2, 0, 0, 3, 0];
let k = 3;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);
