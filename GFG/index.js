// // let object = {
// //   name: "rudra",
// //   age: 26,
// //   surname: "patil",
// // };

// // const rename = (keysmap, object) => {
// //   let newobj = Object.keys(object).reduce((acc, key) => {
// //     return {
// //       ...acc,
// //       ...{ [keysmap[key] || key]: object[key] },
// //     };
// //   }, {});
// //   return newobj;
// // };

// // const result = rename({ name: "Firstname" }, object);
// // console.log(result);

// // // console.log(Object.keys(object));
// // // console.log(Object.entries(object));
// // // console.log(Object.fromEntries(Object.entries(object)));

// // // const old = ["dog", "hen", "cock"];

// // // const spd = [...old];
// // // console.log(spd);
// // // const newarr = old;
// // // console.log(newarr);
// // // old[1] = "tiger";
// // // console.log("--------")
// // // console.log(spd);
// // // console.log(newarr);


// // const obj1={
// //     name: "rudra",
// //     age: 26
// // }

// // const obj2 ={
// //     surname:"patil",
// //     address : "hindalga"
// // }


// // const obj = Object.assign({},{...obj1,...obj2});
// // console.log(obj);

// // const getKeyByValue = (obj,value) =>{
// //     for(let key in obj){
// //         if(obj[key] === value) return key;
// //     }
// // }

// // const exampleObject = {
// //   key1: "Geeks",
// //   key2: 100,
// //   key3: "Javascript",
// // };

// // ans = getKeyByValue(exampleObject, 100);

// // console.log(ans);


// let ob = {
//   Company: "GeeksforGeeks",
//   Address: "Noida",
//   contact: +91 - 999999999,
//   mentor: {
//     HTML: "GFG",
//     CSS: "GFG",
//     JavaScript: "GFG",
// },
// };

// for(let i in ob){
//     console.log(typeof ob[i],"ob")
//     console.log(Array.isArray(ob[i]));
// }



// function Counter(){
//   let count=0;
//   function increment(){
//     count++;
//     console.log(count);
//   }
//   return increment;
// }

// const count1 = Counter();
// count1();
// count1();
// count1();
// const count2 = Counter()();
// const count3 = Counter()();
// const count4 = Counter()();



const arr = [1,2,3];
const newArr = [...arr];
const a = arr;
console.log(a===arr);
console.log(newArr === arr);