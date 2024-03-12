const arr = [1,2,3,4,5];

const arrmap = arr.map((ele)=>{
    return ele+2;
});
const arrfilter = arr.filter((ele)=>{
    return ele<=2;
})

console.log(arrmap);
console.log(arrfilter);