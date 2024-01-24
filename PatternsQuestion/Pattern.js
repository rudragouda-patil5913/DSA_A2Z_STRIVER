

function pattern1(n){
    let str = "";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
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
function pattern2(n){
    let str = "";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            str += "*"
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

function pattern3(n){
    let str = "";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
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

function pattern4(n){
    let str ="";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
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
function pattern5(n){
    let str ="";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n-i+1;j++){
            str += "* ";
        }
        str += "\n";
    }
    return str;
}


const output = pattern5(5);
console.log(output);

