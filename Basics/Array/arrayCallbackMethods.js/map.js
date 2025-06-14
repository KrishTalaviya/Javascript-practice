// =======================
// Part 1: Basic Mapping
// =======================
const pricesInUSD = [10, 25, 50, 100, 200];

// 1. Convert USD to INR (₹83 per USD)
const pricesInINR = pricesInUSD.map((price) => price * 83);
console.log("Prices in INR:", pricesInINR);

// 2. Convert prices to currency string
const priceStrings = pricesInINR.map((price) => `₹${price}`);
console.log("Price Strings:", priceStrings);

// ================================
// Part 2: Array of Product Objects
// ================================
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 750 },
];

// 1. Apply 10% discount
const discountedProducts = products.map((p) => ({
  ...p,
  price: p.price * 0.9,
}));
console.log("Discounted Products:", discountedProducts);

// 2. Format: "Laptop - $900"
const productStrings = discountedProducts.map((p) => `${p.name} - $${p.price}`);
console.log("Product Strings:", productStrings);

// 3. Product names only
const productNames = products.map((p) => p.name);
console.log("Product Names:", productNames);

// 4. Add category
const categorizedProducts = products.map((p) => ({
  ...p,
  category: "Electronics",
}));
console.log("Categorized Products:", categorizedProducts);

// =======================
// Part 3: API JSON Mapping
// =======================
const apiResponse = {
  users: [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ],
};

// 1. Emails only
const emails = apiResponse.users.map((user) => user.email);
console.log("Emails:", emails);

// 2. Name and email formatted
const userDescriptions = apiResponse.users.map(
  (user) => `${user.name} (${user.email})`
);
console.log("User Descriptions:", userDescriptions);

// 3. Add isActive field
const activeUsers = apiResponse.users.map((user) => ({
  ...user,
  isActive: true,
}));
console.log("Active Users:", activeUsers);

// ===================
// Part 4: Localization
// ===================
const strings = [
  { id: "home.title", en: "Home", es: "Inicio" },
  { id: "home.logout", en: "Logout", es: "Cerrar sesión" },
  { id: "home.settings", en: "Settings", es: "Configuración" },
];

// 1. Convert to object with Spanish values
const spanishObject = strings.reduce((acc, item) => {
  acc[item.id] = item.es;
  return acc;
}, {});
console.log("Spanish Localization Object:", spanishObject);


const englishStrings = strings.map((item) => item.en);
console.log("English Strings:", englishStrings);


const orders = [
  {
    orderId: 1,
    customer: "John",
    items: [
      { name: "Pen", qty: 2 },
      { name: "Notebook", qty: 1 },
    ],
  },
  {
    orderId: 2,
    customer: "Jane",
    items: [
      { name: "Pencil", qty: 3 },
      { name: "Eraser", qty: 1 },
    ],
  },
];

// 1. Flat array of all item names
const itemNames = orders.flatMap((order) =>
  order.items.map((item) => item.name)
);
console.log("Item Names:", itemNames);

// 2. Strings like "John ordered 2 x Pen"
const orderDescriptions = orders.flatMap((order) =>
  order.items.map(
    (item) => `${order.customer} ordered ${item.qty} x ${item.name}`
  )
);
console.log("Order Descriptions:", orderDescriptions);
