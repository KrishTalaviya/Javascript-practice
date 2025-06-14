//For In -Object
const user = {
  name: "Alice",
  age: 30,
};

for (const key in user) {
  console.log(key, user[key]); // name Alice, age 30
}
//For In -array
const arr = [10, 20, 30];

for (const index in arr) {
  console.log(index, arr[index]); // 0 10, 1 20, 2 30 (index as string)
}
//not recommneded for array
const arr2 = [10, 20, 30];
arr2.customProp = "👻"; // Adding a custom property

for (const key in arr2) {
  console.log(key, arr2[key]);// 10  20  30 customProp 👻   // Unexpected!

}

