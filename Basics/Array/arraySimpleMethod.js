const arrayOne=[1,2,3,4]
const arrayTwo=["nikunj","shyam","aayush"]
const arrayThree=new Array(2,45,"three")
const arrayFour = ["nikunj", "shyam", "aayush",true,45,6];

//accessing array elements
console.log(arrayFour[2])
console.log(arrayFour[0]);

//array uses shallow copy concept
//shallow concept for primitive data
const original = [1, 2, 3];
const copy = [].concat(original);
console.log(copy)
copy[0]="krish"
console.log(copy);
console.log(original);
//shallow concept for object
const originalTwo = [{ name: "Alice" }, { name: "Bob" }];
const copyTwo = [].concat(original);

copyTwo[0].name = "Charlie";

console.log(copyTwo);
console.log(originalTwo);
//Primitives (numbers, strings, booleans, null, undefined) are copied by value → independent copies.
//Objects/arrays/functions are copied by reference → changes affect all references.

//Array methods
const arrayFive=[]
//Push and Pop,Unshift and shift
arrayFive.push(4)
arrayFive.push("hii")
console.log(arrayFive)
arrayFive.pop()
console.log(arrayFive);
arrayFive.unshift("hello")
console.log(arrayFive);
arrayFive.shift();
console.log(arrayFive);
//Join method
const arraySix=[1,2,3]
const arraySixJoin=arraySix.join();
console.log(arraySix)
console.log(typeof arraySixJoin)//string
console.log([("html", "css", "js")].join(" | "));// "html | css | js"
const fields = ["name", "email", "phone"];
const csv = fields.join(",");
console.log(csv)
const params = ["search=react", "page=1"];
const queryString = params.join("&");
console.log(queryString)

//slice and splice Method

//slice-array.slice([start], [end])
const arraySeven = [10, 20, 30, 40, 50];
const sliced = arraySeven.slice(1, 4);
console.log(sliced); // [20, 30, 40]

//splice-array.splice(start, deleteCount, item1, item2, ..., itemN)
//remove elememt
const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(2, 2); 
// removes 2 elements starting at index 2

console.log(arr);    // [1, 2, 5]
console.log(removed); // [3, 4]
//insert element
const arrTwo = [1, 2, 5];
arr.splice(2, 0, 3, 4); 
// at index 2, remove 0 items, insert 3 and 4

console.log(arrTwo); // [1, 2, 3, 4, 5]
//replace element
const arrThree = ['a', 'b', 'c'];
arr.splice(1, 1, 'x'); 
// remove 1 at index 1, insert 'x'

console.log(arrThree); // ['a', 'x', 'c']
//Remove from end with negative index
const arrFour= [1, 2, 3, 4];
arr.splice(-2, 1); // from second-to-last, remove 1

console.log(arrFour); // [1, 2, 4]

//iteration of array in js
const arrSix=[1,2,3,4,56,7,8]
arrSix.forEach(
    function(x){
        console.log(x)
    }
)
arrSix.forEach((x)=>{console.log(x)})

//spread operator
const arrSeven = [1, 2, 3];
const newArr = [...arrSeven, 4, 5]; // [1, 2, 3, 4, 5]

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));