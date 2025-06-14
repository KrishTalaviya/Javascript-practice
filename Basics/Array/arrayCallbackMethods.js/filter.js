// =======================
// .filter() Method Practice Assignment
// =======================

// -----------------------
// Sample User Data
// -----------------------
const users = [
  { id: 1, name: "Alice", age: 25, active: true, role: "admin" },
  { id: 2, name: "Bob", age: 19, active: false, role: "user" },
  { id: 3, name: "Charlie", age: 30, active: true, role: "editor" },
  { id: 4, name: "Diana", age: 22, active: false, role: "user" },
  { id: 5, name: "Eve", age: 35, active: true, role: "admin" },
  { id: 6, name: "Frank", age: 28, active: true, role: "user" },
];



// 1. Filter active users
const activeUsers = users.filter((user) => user.active);
console.log("Active Users:", activeUsers);

// 2. Filter users older than 25
const olderThan25 = users.filter((user) => user.age > 25);
console.log("Users older than 25:", olderThan25);

// 3. Filter users who are admins
const admins = users.filter((user) => user.role === "admin");
console.log("Admins:", admins);



// 4. Inactive users under 25
const youngInactive = users.filter((user) => !user.active && user.age < 25);
console.log("Young Inactive Users:", youngInactive);

// 5. Name starts with A or D
const nameStartsWithAorD = users.filter(
  (user) => user.name.startsWith("A") || user.name.startsWith("D")
);
console.log("Names starting with A or D:", nameStartsWithAorD);

// 6. Users with specific IDs
const specificIds = [2, 4, 6];
const selectedUsers = users.filter((user) => specificIds.includes(user.id));
console.log("Users with specific IDs (2, 4, 6):", selectedUsers);



// 7. Deactivation logic: Inactive or age > 30
const toDeactivate = users
  .filter((user) => !user.active || user.age > 30)
  .map((user) => user.id);
console.log("User IDs to deactivate:", toDeactivate);

// 8. Dashboard users: Active but not admins
const dashboardUsers = users.filter(
  (user) => user.active && user.role !== "admin"
);
console.log("Dashboard Users:", dashboardUsers);

// 9. Simulate country and filter active Spanish users
const extendedUsers = users.map((user) => ({
  ...user,
  country: user.id % 2 === 0 ? "Spain" : "USA", // fake country for demo
}));

const spanishUsers = extendedUsers.filter(
  (user) => user.active && user.country === "Spain"
);
console.log("Active Spanish Users:", spanishUsers);


const products = [
  { product: "Laptop", price: 1200, available: true },
  { product: "Mouse", price: 25, available: true },
  { product: "Keyboard", price: 45, available: false },
  { product: "Monitor", price: 300, available: true },
];

// Filter available products under $500
const affordable = products.filter((p) => p.available && p.price < 500);
console.log("Affordable Products:", affordable);
