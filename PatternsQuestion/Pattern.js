function pattern1(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
/*

*    
**   
***  
**** 
*****

*/
function pattern2(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

/*
Pattern 3 Question
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

function pattern3(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    str += "\n";
  }
  return str;
}

/* Pattern 4

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

*/

function pattern4(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += i + " ";
    }
    str += "\n";
  }
  return str;
}

/* Pattern 5

* * * * * 
* * * * 
* * * 
* * 
*

*/

function pattern5(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      str += "*" + " ";
    }
    str += "\n";
  }
  return str;
}

/* Pattern 6

1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1

*/

function pattern6(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      str += j + " ";
    }
    str += "\n";
  }
  return str;
}

/* Pattern 7

     *     
    ***    
   *****   
  *******  
 ********* 

*/

function pattern7(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

/* Pattern 8

*********
 *******
  ***** 
   ***
    *

*/

function pattern8(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      str += " ";
    }
    for (let j = 1; j <= 2 * (n - i) + 1; j++) {
      str += "*";
    }
    for (let j = 1; j <= i - 1; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

/* Pattern 9

    *    
   ***   
  *****  
 ******* 
*********
*********
 ******* 
  *****  
   ***
    *

*/

function pattern9(n) {
  let ans = pattern7(n) + pattern8(n);
  return ans;
}

/* Pattern 10

*    
**   
***  
**** 
*****
**** 
***  
**   
*

*/

// function pattern10(n) {
//   let str = "";
//   for (let i = 1; i <= 2 * n - 1; i++) {
//     let star = i;
//     if (i > n) star = 2 * n - i;
//     for (let j = 1; j <= star; j++) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   return str;
// }


/* Pattern 11

1
01
101
0101
10101

*/

function pattern11(n){
  let str = "";
  for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
      if((i+j) % 2 == 0){
          str += "1";
      }else{
          str += "0";
      }
    }
    str += "\n";
  }
  return str;
}


/* Pattern 12

1          1
12        21
12       321
1234    4321
12345  54321
123456654321

*/

function pattern12(n){
  let str ="";
  for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
      str += j;
    }
    for(let j=1;j<=2 * (n-i);j++){
      str += " ";
    }
    for( let j=i;j>=1;j--){
      str += j;
    }
    str += "\n";
  }
  return str;
}

/*
Input Format: N = 6
Result:   
1
2  3
4  5  6
7  8  9  10
11  12  13  14  15
16  17  18  19  20  21
*/

function pattern13(n){
  let str = "";
  let cnt = 0;
  for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
      cnt += 1;
      str += cnt + " "
    }
    str += "\n";
  }
  return str;
}

/*
Input Format: N = 6
Result:   
A
A B
A B C
A B C D
A B C D E
A B C D E F
*/

function pattern14(n){
  let str ="";
  let N = 64;
  for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
      str += String.fromCharCode(N + j) + " ";
    }
    str += "\n";
  }
  return str;
}



/*
Input Format: N = 6
Result:   
A B C D E F
A B C D E 
A B C D
A B C
A B
A
*/

function pattern15(n){
  let str ="";
  let N =64;
  for(let i=1;i<=n;i++){
    for(let j=1;j<=(n-i+1);j++){
        str += String.fromCharCode(N + j) + " ";
    }
     str += "\n";

  }
  return str;
}


/*
Input Format: N = 6
Result:   
A 
B B
C C C
D D D D
E E E E E
F F F F F F
*/

const output = pattern16(6);
console.log(output);
