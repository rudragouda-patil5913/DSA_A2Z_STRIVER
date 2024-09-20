// Two Sum Problem

function sumProblem(nums, target) {
  let n = nums.length;
  let hash = new Map();
  let key, rem, r;
  for (let i = 0; i < n; i++) {
    key = nums[i];
    rem = target - key;
    if (hash.has(rem)) {
      return [hash.get(rem), i];
    }
    if (!hash.has(key)) {
      hash.set(key, i);
    }
  }
}

// console.log(sumProblem(arr,14))

// Sort 0's 1's and 2's

// const arr = [2, 0, 1, 1, 2, 0, 0];

function sorting(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[low], arr[mid]] == [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

// console.log(sorting(arr));

//Majority Problem
// total count of number should be greater than array size
//  Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

//  better approach

function majority(arr) {
  const n = arr.length;
  const mpp = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (mpp.has(arr[i])) {
      mpp.set(arr[i], mpp.get(arr[i]) + 1);
    } else {
      mpp.set(arr[i], 1);
    }
  }
  for (const [num, count] of mpp) {
    if (count > Math.floor(n / 2)) {
      return num;
    }
  }
  return mpp;
}

// console.log(majority(arr));

// function major(arr, n) {
//   let obj = {};
//   for (let i = 0; i < n; i++) {
//     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//   }
//   console.log(obj);
//   for (let key in obj) {
//     if(obj[key] > n/2) return key;
//   }
//   return -1;
// }

// const arr = [2, 1, 0, 2, 2, 2];
// console.log(major(arr, 6));

// Optimal approach

function majority1(arr, n) {
  let ele,
    cnt = 0;
  for (let i = 0; i <= n; i++) {
    if (cnt == 0) {
      cnt = 1;
      ele = arr[i];
    } else if (ele == arr[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }
  let cnt1 = 0;
  for (let i = 0; i < n; i++) {
    if (ele == arr[i]) cnt1++;
  }
  if (cnt1 > n / 2) return ele;
  return -1;
}

// console.log(majority1(arr,6));

//Maximun sum Problem

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maximum(arr) {
  let sum = 0,
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
  }
  return max;
}

// console.log(maximum(arr));

// Input : arr[] = [4, 3, 1, 5, 6]
// Output : 11
// Explanation : Subarrays with smallest and second smallest are:- [4, 3] smallest = 3,second smallest = 4
// [4, 3, 1] smallest = 1, second smallest = 3
// [4, 3, 1, 5] smallest = 1, second smallest = 3
// [4, 3, 1, 5, 6] smallest = 1, second smallest = 3
// [3, 1] smallest = 1, second smallest = 3
// [3, 1, 5] smallest = 1, second smallest = 3
// [3, 1, 5, 6] smallest = 1, second smallest = 3
// [1, 5] smallest = 1, second smallest = 5
// [1, 5, 6] smallest = 1, second smallest = 5
// [5, 6] smallest = 5, second smallest = 6
// Maximum sum among all above choices is, 5 + 6 = 11.

// let arr = [4, 3, 1, 5, 6];

function subarraymax(arr) {
  let maxval = arr[0] + arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    maxval = Math.max(maxval, arr[i] + arr[i + 1]);
  }
  return maxval;
}

// console.log(subarraymax(arr));

// Stock buy and sell

// const prices = [7,1,5,6,4];

const buyandsell = (prices) => {
  let profit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    let cost = prices[i] - min;
    profit = Math.max(profit, cost);
    min = Math.min(min, prices[i]);
  }
  return profit;
};

// console.log(buyandsell(prices));

//Rearrange of Positive and negative numbers by sign here both are equal pos==neg numbers

var rearrangeArray = function (nums) {
  let pos = 0,
    neg = 1,
    ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans[pos] = nums[i];
      pos += 2;
    } else {
      ans[neg] = nums[i];
      neg += 2;
    }
  }
  return ans;
};

// Alternate where pos number != neg numbers arrange them and add remaining to last elements

function arrange(nums) {
  let pos = [],
    neg = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos.push(nums[i]);
    } else {
      neg.push(nums[i]);
    }
  }

  if (pos.length >= neg.length) {
    // console.log(arr);
    for (let i = 0; i < neg.length; i++) {
      arr[2 * i] = pos[i];
      arr[2 * i + 1] = neg[i];
    }
    let index = neg.length * 2;
    for (let i = index; i < pos.length; i++) {
      arr[index] = pos[i];
      index++;
    }
  } else {
    for (let i = 0; i < pos.length; i++) {
      arr[2 * i] = pos[i];
      arr[2 * i + 1] = neg[i];
    }
    let index = pos.length * 2;
    for (let i = index; i < neg.length; i++) {
      arr[index] = neg[i];
      index++;
    }
  }
  return arr;
}

// const arr = [-1, 2, 3, -2, 6, 8];
// console.log(arrange(arr));

// Next Permutations

// function nextPermutation(arr) {
//   let n = arr.length;
//   let index = -1;
//   for (let i = n - 2; i > 0; i--) {
//     if (arr[i] < arr[i + 1]) {
//       index = i;
//       break;
//     }
//   }
//   if (index == -1) {
//     arr.reverse();
//     return arr;
//   }
//   for (let i = n - 1; i > 0; i--) {
//     if (arr[i] > arr[index]) {
//       [arr[i], arr[index]] = [arr[index], arr[i]];
//       break;
//     }
//   }
//   let arrevrem = arr.splice(index + 1).reverse();
//   arr.splice(index + 1, n - index - 1, ...arrevrem);
//   return arr;
// }

// const arr = [1,2,3,5];
// console.log(nextPermutation(arr));

// Leaders of the array

// const arr = [10, 22, 12, 3, 0, 6];
// let maxval = 0;
// let n = arr.length;
// const Leaders = (arr) => {
//   let ans = [];
//   for (let i = n - 1; i > 0; i--) {
//     if (arr[i] > maxval) {
//       ans.push(arr[i]);
//     }
//     maxval = Math.max(maxval, arr[i]);
//   }
//   return ans;
// };

// console.log(Leaders(arr));


// Sub Array consecutives

// const arr = [1,100,2,102,2,3,103,3,100,101,4]

const subarrayConsecutive = (arr) =>{
  let cnt = 0;
  let x = null
  let st = new Set();
  for(let i=0;i<arr.length;i++){
    st.add(arr[i]);
  }
  for( let it of st){
    if(!st.has(it-1)){
        x = it + 1;
        cnt = cnt + 1;
        while(st.has(x)){
          x = x + 1;
          cnt = cnt + 1;
        }
    }
    return cnt;
  }
}


// console.log(subarrayConsecutive(arr));


// Set Zero Matrix 


// const matrix = [[0,1,1,0],[0,0,1,1],[1,0,1,0],[0,0,1,0]];

const matrix = [[1,1,1,0],[1,0,1,1],[1,1,1,1],[1,1,1,1]];

// const matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ];

const setMatrix = (matrix) =>{
  let n = matrix.length;
  let m = matrix[0].length;
  let cnt0 = 1;
  for(let i=0;i<n;i++){
    for( let j=0;j<m;j++){
      if(matrix[i][j] == 0){
        matrix[i][0] = 0;
        if (j != 0) {
          matrix[0][j] = 0;
        } else {
          cnt0 = 0;
        }
      }
      
    }
  }
  // console.log(matrix);

  for(let i=1;i<m;i++){
    for(let j=1;j<m;j++){
      if(matrix[i][j] !== 0){
        if(matrix[i][0] == 0 || matrix[0][j] == 0){
          matrix[i][j] = 0;
        }
      }
    }
  }


  if(matrix[0][0] == 0){
    for(let j=0;j<m;j++){
      matrix[0][j] = 0
    }
  }
  if(cnt0 == 0){
    for(let i=0;i<n;i++){
      matrix[i][0] = 0;
    }
  }
  return matrix;
}


console.log(setMatrix(matrix));
