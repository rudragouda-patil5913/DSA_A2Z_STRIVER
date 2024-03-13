/*
Count the digits in number
Input: N = 12345
Output: 5

*/

function CountDigits(n) {
  if (isNaN(n)) {
    console.log(" Enter the valid number");
    return -1;
  }
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

function CountDigits2(n) {
  let x = n.toString();
  return x.length;
}

function CountDigits3(n) {
  let count = Math.floor(Math.log10(n) + 1);
  return count;
}

// console.log(CountDigits("0000039409340000"));
// console.log(CountDigits2("0000039409340000"));
// console.log(CountDigits3("0000039409340000"));

/*
Reverse a number
Example 1:
Input: N = 123
Output: 321
Explanation: The reverse of 123 is 321

*/

function rev(n) {
  let y = Math.abs(n);
  if (isNaN(n)) return -1;
  let x = y.toString().split("").reverse().join("");
  return n > 0 ? x : -x;
}

function rev2(n) {
  let rev = 0;
  if (n > 0) {
    while (n > 0) {
      let dig = n % 10;
      rev = rev * 10 + dig;
      n = Math.floor(n / 10);
    }
  } else {
    let revn = n * -1;
    revn = rev2(revn);
    return revn * -1;
  }
  while (n > 0) {
    let dig = n % 10;
    rev = rev * 10 + dig;
    n = Math.floor(n / 10);
  }
  return rev;
}

// console.log(rev2("1234"));
// console.log(rev2(-1234));
// console.log(rev(00001234));
// console.log(rev(000012340000));

/*

Example 1:
Input: N = 123
Output: Not Palindrome Number
Explanation: 123 read backwards is 321.Since these are two different numbers 123 is not a palindrome.

*/

function palidrome(n) {
  const y = parseInt(n.toString().split("").reverse().join(""));
  console.log(y);
  if (y === n) return true;
  return false;
}

// console.log(palidrome(-11211));

/* GCD or HCM
 */

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// console.log(gcd(1, 7));


/* Armstrong numbere */

function armstrong(n){
  let z = n.toString().split('');
  let len = z.length;
  let ans = 0;
  z.map((ele)=>{
    ans += Math.pow(ele,len);
  })
  ans = parseInt(ans);
  if(ans === n) return true;
  return false;
}

// console.log(armstrong(153));
// console.log(armstrong(1634));



/* All divisors of number */

const divisor = (n) =>{
  const arr =[];
  for(let i=1;i<=Math.sqrt(n);i++){
    if(n%i === 0){
      arr.push(i);
      if(n/i !== i) arr.push(n/i);
    }
    arr.sort((a,b) => a-b);
  }
  return arr;
}
// console.log(divisor(36));

const isPrime = (n) =>{
  if(n<=1) return false;
  for(let i=2;i*i<n;i++){
    if(n%i === 0){
      return false;
    }
  }
return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(9));
console.log(isPrime(13));