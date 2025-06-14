const arr = [1, 2, 3];
arr[3] = 4;
console.log(arr); //[ 1, 2, 3, 4 ]
const arr1 = Array(5); //
console.log(arr1); //[ <5 empty items> ]
const arr2 = Array(0);
console.log(arr2); //[]
const arr3 = Array("");
console.log(arr3); //[ '' ]
const arr4 = Array("hii");
console.log(arr4); //[ 'hii' ]
const arr5 = Array(true);
console.log(arr5); //[ true ]
//const arr6 = Array(9.3); // RangeError: Invalid array length
const arr7 = Array.of(9.3); // arr contains only one element 9.3
console.log(arr7); //[ 9.3 ]
const arr8 = ["one", "two", "three"];
console.log(arr8[2]); // three
console.log(arr8["2"]); //three
console.log(arr8["2"] === arr8["02"]); //false
console.log(arr8["02"]); //undefined
console.log(arr8["length"]); // 3
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
/* Note: If you supply a non-integer value to the array operator in the code above, a property will be
 created in the object representing the array, instead of an array element. */
const arr9 = [];
arr9[3.4] = "Oranges";
console.log(arr9.length); // 0
console.log(Object.hasOwn(arr9, 3.4)); // true
myVar = 3;
const myArray = new Array("Hello", myVar, 3.14159); // OR const myArray = ["Mango", "Apple", "Orange"];
console.log(myArray); //[ 'Hello', 3, 3.14159 ]
const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

cats.length = 0;
console.log(cats); // []; the cats array is empty

cats.length = 3;
console.log(cats); // [ <3 empty items> ]
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
//Increasing the length extends the array by adding empty slots without creating any new elements — not even undefined.
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
//Decreasing the length property does, however, delete elements.
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
const original = [1, 2, 3];
const copy = [].concat(original);
console.log(copy);
copy[0] = "krish";
console.log(copy);
console.log(original);
