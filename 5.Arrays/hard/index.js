// Pascal Triangle 


// Pattern 1 get exact value

// function ncr(a, b) {
//   let n = a - 1;
//   let r = b - 1;
//   let res = 1;
//   for (let i = 0; i < r; i++) {
//     res = res * (n - i);
//     res = res / (i + 1);
//   }
//   return res;
// }


//Pattern 2 get whole row

// function ncr(n){
//     let ans = [1];
//     let res = 1;
//     for(let i=1;i<n;i++){
//         res = res*(n-i);
//         res = res /i;
//         ans.push(res);
//     }
//     return ans;
// }


// Pattern 3 get whole pascal triangle

function getRow(row){
    let res = 1;
    let arr = [];
    arr.push(res);
    for(let col=1;col<row;col++){
        res = res * (row-col);
        res = res / col;
        arr.push(res)
    }
    return arr
}

function getPascal(n){
    let ans = [];
    for(let i=1;i<=n;i++){
        ans.push(getRow(i))
    }
    return ans.flat();
}

console.log(getPascal(6))
