const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
const users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    address: { city: "New York", zip: "10001" },
    orders: [
      { orderId: 101, product: "Laptop", price: 1200 },
      { orderId: 102, product: "Mouse", price: 20 },
    ],
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    address: { city: "Los Angeles", zip: "90001" },
    orders: [{ orderId: 103, product: "Phone", price: 800 }],
  },
];
//Find a user by email
const userEmail = users.find(function (user) {
  return user.email === "bob@example.com";
});
console.log(userEmail);
//Find the first user who lives in "New York"
const firstUserOfNewYork = users.find(
  (user) => user?.address?.city == "New York"
);
console.log(firstUserOfNewYork);
//Find the first order for user with id 1 where product is "Mouse"
const firstOrder = users.find(
  (user) => (user) => user.id === 1 && user.orders.includes("Mouse")
);
console.log(firstOrder);
// Find a user who has ordered a product that costs more than $1000
const expensiveOrder = users.find((user) => {
  const userOrder1000 = user.orders.find((o) => o.price < 1000);
  if (userOrder1000) {
    return true;
  }
  return false;
});
console.log(expensiveOrder);