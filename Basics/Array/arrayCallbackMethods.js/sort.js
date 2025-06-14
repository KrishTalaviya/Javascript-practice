const arrOne = [3, 400, 500.9, 99.99, 3000, 9500, 20000];
const sortArrOne = arrOne.sort();
console.log(sortArrOne); //[20000,3,3000,  400,500.9, 9500,99.99]
let count = 0;
const asecSortArrOne = arrOne.sort((a, b) => {
  console.log("a=" + a);
  console.log("b=" + b);
  console.log("---" + count++);
  return a - b;
});
//sort mutates original array.
console.log(asecSortArrOne); //[3, 99.99,400, 500.9,3000,9500,20000]
console.log(sortArrOne); //[3, 99.99,400, 500.9,3000,9500,20000]
console.log(arrOne); //[3, 99.99,400, 500.9,3000,9500,20000]
//to stop mutation
const array1 = [1, 30, 4, 21, 100000];
const badSortedArray1 = array1.slice().sort();
console.log(badSortedArray1); //[ 1, 100000, 21, 30, 4 ]
const asecSortedArray1 = array1.slice().sort((a, b) => a - b);
console.log(asecSortedArray1); //[ 1, 4, 21, 30, 100000 ]
const dsecSortedArray1 = array1.slice().sort((a, b) => b - a);
console.log(dsecSortedArray1); //[ 100000, 30, 21, 4, 1 ]
//object sorting
const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
console.log(students)/* [
  ({ name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 })
]; */
const numbers = [5, 3, 9, 1, 10];

// Ascending
const asc = [...numbers].sort((a, b) => a - b);
console.log("Ascending:", asc);

// Descending
const desc = [...numbers].sort((a, b) => b - a);
console.log("Descending:", desc);
const fruits = ["banana", "apple", "cherry", "mango"];

// A-Z
const alpha = [...fruits].sort();
console.log("A-Z:", alpha);

// Z-A
const reverseAlpha = [...fruits].sort().reverse();
console.log("Z-A:", reverseAlpha);
//Sorting Arrays of Objects (Common in APIs)
const users = [
  { name: "Alice", age: 32 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
];
const sortByUserName = users.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortByUserName);
const sortByAge = users.sort((a, b) => a.age - b.age);
console.log(sortByAge);
const posts = [
  { title: "Post A", date: "2023-04-10" },
  { title: "Post B", date: "2021-11-05" },
  { title: "Post C", date: "2024-01-01" },
];

// Newest to Oldest
const byDate = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
console.log(byDate);
const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Phone", price: 800, inStock: false },
  { name: "Tablet", price: 600, inStock: true },
];

// Sort by price (ascending), then inStock = true first
const sortedProducts = [...products].sort((a, b) => {
  if (a.inStock !== b.inStock) return a.inStock ? -1 : 1;
  return a.price - b.price;
});
console.log(sortedProducts);

