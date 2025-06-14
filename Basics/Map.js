//Map is a collection of key–value pairs 
const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set({ x: 3 }, 'object as key');

console.log(map.get('a'));         // 1
console.log(map.size);             // 3
console.log(map.has('b'));         // true
map.delete('b');
console.log(map.has('b'));         // false
//Iterating over map
const mapTwo = new Map([
  ["name", "JavaScript"],
  ["type", "Language"],
  ["rank", 1],
]);

for (const [key, value] of mapTwo) {
  console.log(`${key}: ${value}`);
}

mapTwo.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});
//Convert Map ⇄ Object / Array
// Map → Object
const obj = Object.fromEntries(map);

// Object → Map
const map2 = new Map(Object.entries(obj));

// Map → Array of pairs
const arr = Array.from(map); // or [...map]
//Special Behavior with Objects as Keys
const objKey = { id: 123 };
const mapThree = new Map();

mapThree.set(objKey, 'value');

console.log(mapThree.get({ id: 123 }));  // undefined ❗ different object ref
console.log(mapThree.get(objKey));       // 'value' ✅


