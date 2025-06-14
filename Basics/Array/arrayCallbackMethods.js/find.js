// Sample data
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

// Task 1: Find user by email
const userByEmail = users.find((user) => user.email === "bob@example.com");
console.log("Task 1:", userByEmail);

// Task 2: Find first user who lives in New York
const userInNewYork = users.find((user) => user.address.city === "New York");
console.log("Task 2:", userInNewYork);

// Task 3: Find order with product "Mouse" for user with id 1
const userWithId1 = users.find((user) => user.id === 1);
const mouseOrder = userWithId1.orders.find(
  (order) => order.product === "Mouse"
);
console.log("Task 3:", mouseOrder);

// Task 4: Find a user who has ordered a product that costs more than $1000
const richBuyer = users.find((user) =>
  user.orders.find((order) => order.price > 1000)
);
console.log("Task 4:", richBuyer);

// Task 5: Dynamic user finder by ID
function findUserById(userId) {
  return users.find((user) => user.id === userId);
}
console.log("Task 5:", findUserById(2)); // Test with id = 2

// Bonus Task: API-like response for products
const products = [
  { id: "p1", name: "Laptop", stock: 0 },
  { id: "p2", name: "Tablet", stock: 5 },
  { id: "p3", name: "Monitor", stock: 2 },
];

// Find first product in stock
const inStockProduct = products.find((product) => product.stock > 0);
console.log("Bonus Task:", inStockProduct);
