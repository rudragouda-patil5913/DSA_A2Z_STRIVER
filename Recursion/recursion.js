/*
Print n Names in recursion method
*/
// function print(i,n){
//     if(i>n) return;
//     console.log("Rudra");
//     print(i+1,n);
// }

// print(1,8);

/*
Print 1 to N using Recursion
*/

// const print = (i,n) =>{
//     if(i>n) return;
//     console.log(i);
//     print(i+1,n);
// }

// print(4,6);

/* Print N to 1 using recursion */

// const print = (n) =>{
//     if(n<1) return;
//     console.log(n);
//     print(n-1);
// }

/* 	Sum of first N numbers */
let ans = null;
const sum = (n) => {
  if (n < 1) return 0;
  ans = n + sum(n - 1);
  return ans;
};

// console.log(sum(5));

/* Factorial of N numbers */

const fact = (n) => {
  if (n == 1) return 1;
  return n * fact(n - 1);
};

// console.log(fact(5));

/* Reverse a Array */

const revArr = (arr) => {
  const ans = [];
  for (let i = arr.length; i > 0; i--) {
    ans[arr.length - i] = arr[i - 1];
  }
  return ans;
};

// console.log(revArr([1,2,3,4,5]));

const revArr2 = (arr) => {
  let p = 0,
    q = arr.length - 1;

  while (p < q) {
    let temp = arr[p];
    arr[p] = arr[q];
    arr[q] = temp;
    p++;
    q--;
  }
  return arr;
};
// console.log(revArr2([1, 2, 3, 4, 5]));


//Recursive method

function revArrayRecursion(arr,start,end){
  if(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    console.log("hi")
    revArrayRecursion(arr,start+1,end-1);
  }
  return arr;
}
const array = [9,8,7,6,5];

// console.log(revArrayRecursion(array,0,array.length-1));


/* Palindrome */

const palindrome = (str) =>{
  const ans = str.split('').reverse().join('');
  if(ans === str) return true;
  return false;
}

// console.log(palindrome("ABAC"));


/* fibonacci Problem */

const fib = (n) =>{
  if(n<=1){
    return n;
  }else{
    return fib(n-1)+fib(n-2);
  }
}

let n = 5;
for(let i=0;i<n;i++){
  console.log(fib(i));
}