// How to Remove Duplication from Array of Objects

// const arr = [
//   { title: "C++", core: "CS" },
//   { title: "C++", core: "CS" },
//   { title: "C++", core: "CS" },
//   { title: "DSA", core: "CS" },
// ];

//Using for loop
// const removeDuplicates = (arr) => {
//   let newArr = [];
//   let newObj = {};

//   for (let i in arr) {
//     objTitle = arr[i]["title"];
//     newObj[objTitle] = arr[i];
//   }

//   for (let i in newObj) {
//     newArr.push(newObj[i]);
//   }
//   return newArr;
// };

// console.log(removeDuplicates(arr));

// using Set Method
// const arr = [
//   { title: "C++", core: "CS" },
//   { title: "C++", core: "CS" },
//   { title: "C++", core: "CS" },
//   { title: "DSA", core: "CS" },
// ];

// const a = [1, 2, 2, 2, 1, 3, 4, 4, 9, 4, 6];

// function remove(arr) {
//   let jsonObject = arr.map(JSON.stringify);
//   let unique = new Set(jsonObject);
//   console.log(Array.from(unique).map(JSON.parse));
// }

// remove(arr);

// Using Filter and FindIndex Method

// const arr = [
//   { title: "C++", core: "CS" },
//   { title: "C++", core: "CS" },
//   { title: "DSA", core: "CS" },
//   { title: "C++", core: "CS" },
// ];

// function remove(arr) {
//   let unique = arr.filter((obj, index) => {
//     console.log(index,arr.findIndex((o) => o.title === obj.title));
//     return index === arr.findIndex((o) => o.title === obj.title);
//   });
//   return unique;
// }

// console.log(remove(arr));

// How to separate Arary of Objects into multiple Objects

//here separate by category

// const array = [
//   { id: 1, category: "A", value: "apple", price:12 },
//   { id: 2, category: "B", value: "banana", price:13 },
//   { id: 1, category: "A", value: "apple", price:21 },
//   { id: 3, category: "A", value: "avocado", price:13 },
//   { id: 1, category: "A", value: "apple", price:22 },
// ];

// function multiple(array) {
//   const results = array.reduce((acc, obj) => {
//     acc[obj.category] = acc[obj.category] || [];
//     acc[obj.category].push(obj);
//     return acc;
//   }, {});
//   return results;
// }

// console.log(multiple(array));

// const array = [
//   { id: 1, category: "A", value: "apple", price: 12 },
//   { id: 2, category: "B", value: "banana", price: 13 },
//   { id: 1, category: "A", value: "apple", price: 21 },
//   { id: 3, category: "A", value: "avocado", price: 13 },
//   { id: 1, category: "A", value: "apple", price: 22 },
// ];

const getAppletotal = (array) => {
  const filterobj = array
    .filter((obj) => {
      return obj.value === "apple";
    })
    .reduce((acc, obj) => {
      acc[obj.value] = (acc[obj.value] || 0) + obj.price;
      return acc;
    }, {});
  return filterobj;
};
// console.log(getAppletotal(array));

const array = [
  { id: 1, category: "A", value: "apple", price: 12 },
  { id: 2, category: "B", value: "banana", price: 6 },
  { id: 1, category: "A", value: "apple", price: 20 },
  { id: 3, category: "A", value: "avocado", price: 13 },
  { id: 1, category: "A", value: "apple", price: 3 },
];

const getValueTotal = (arr) => {
  let results = arr.reduce((acc, fruit) => {
    acc[fruit.value] = (acc[fruit.value] || 0) + fruit.price;
    return acc;
  }, {});

  let output = Object.keys(results).filter((ele) => {
    return results[ele] > 10;
  });
  return output;
};

console.log(getValueTotal(array));
