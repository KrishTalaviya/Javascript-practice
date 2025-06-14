function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered)// filtered is [12, 130, 44]

const users = [
  { id: 1, name: "Alice", age: 25, active: true, role: "admin" },
  { id: 2, name: "Bob", age: 19, active: false, role: "user" },
  { id: 3, name: "Charlie", age: 30, active: true, role: "editor" },
  { id: 4, name: "Diana", age: 22, active: false, role: "user" },
  { id: 5, name: "Eve", age: 35, active: true, role: "admin" },
  { id: 6, name: "Frank", age: 28, active: true, role: "user" },
];

//Filter active users only
const activeUser = users.filter((user) => user.active);
console.log(activeUser);
//Filter users older than 25
const oldUser = users.filter((user) => user.age > 25);
console.log(oldUser);
//Filter users who are admins
const admin = users.filter((user) => user.role === "admin");
console.log(admin);
//Filter inactive users under 25 years old
const oldInactiveUser = users.filter((user) => user.active && user.age > 25);
console.log(oldInactiveUser);
// Filter users whose name starts with “A” or “D”
const userQuery = users.filter(
  (user) => user.name.startsWith("A") || user.name.startsWith("D")
);
console.log(userQuery);
// Filter users with ID in [2, 4, 6]
const specificIds = [2, 4, 6];
const userIdFilter = users.filter((user) => specificIds.includes(user.id));
console.log(userIdFilter);
//Simulate a deactivation script
//Get a list of IDs of users who need to be deactivated (inactive or age > 30).
const deactivatedUserIds = users
  .filter((user) => user.inactive || user.age > 30)
  .map((deactiveUser) => deactiveUser.id);
console.log(deactivatedUserIds);
//Filter users to show in a dashboard table Only active users who are not admins.
const userWithDashboard = users.filter(
  (user) => user.active && user.role !== "admin"
);
console.log(userWithDashboard);
//Localize users for a Spanish site Only active users from Spain (assume new country key):
const extendedUsers = users.map((user) => ({
  ...user,
  country: user.id % 2 === 0 ? "Spain" : "USA", // simulate country
}));

const spanishUsers = extendedUsers.filter(
  (user) => user.active && user.country === "Spain"
);
  
  
  