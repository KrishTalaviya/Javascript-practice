const set = new Set();

set.add(1);
set.add(2);
set.add(2); // ignored — duplicates not allowed

console.log(set); // Set(2) {1, 2}
//second method
const setTwo = new Set([1, 2, 3]);

for (const val of setTwo) {
  console.log(val); // 1, 2, 3
}

console.log([...setTwo]); // Convert to array: [1, 2, 3]
//Use Cases
//removing duplicate
const arr = [1, 2, 2, 3, 1];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3]
//Set operation
const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);

// Union
const union = new Set([...a, ...b]); // {1, 2, 3, 4, 5}

// Intersection
const intersection = new Set([...a].filter(x => b.has(x))); // {3}

// Difference
const difference = new Set([...a].filter(x => !b.has(x))); // {1, 2}
//Sets only compare by value for primitives, and by reference for objects:
const s = new Set();
s.add({ a: 1 });
s.add({ a: 1 });
console.log(s.size); // 2 — different object references

