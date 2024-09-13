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

const arr = [2, 0, 1, 1, 2, 0, 0];

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

console.log(sorting(arr));
