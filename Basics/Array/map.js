const a = ["1", "2", "3"].map(parseInt);
console.log(a); //[ 1, NaN, NaN ]
const b = ["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
console
  .log(b) //[ 1, 2, 3 ]
  [("1", "2", "3")].map(Number); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)); // [1, 2, 3]
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]

const numbers2 = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const averaged = numbers2
  .filter((num) => num > 0)
  .map((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    const prev = arr[idx - 1];
    const next = arr[idx + 1];
    let count = 1;
    let total = num;
    if (prev !== undefined) {
      count++;
      total += prev;
    }
    if (next !== undefined) {
      count++;
      total += next;
    }
    const average = total / count;
    // Keep two decimal places
    return Math.round(average * 100) / 100;
  });
console.log(averaged); // [2, 2.67, 2, 3.33, 5, 5.33, 5.67, 4]
console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  })
);
// Visit 0
// Visit 2
// [2, empty, 6]
//full practice

const pricesInUSD = [10, 25, 50, 100, 200];
const pricesInINR = pricesInUSD.map((price) => {
  return price * 83;
});
console.log(pricesInINR);
const pricesInINRString = pricesInUSD.map((price) => {
  return `$${price}->${price * 83}INR`;
});
console.log(pricesInINRString);
//JSON
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 750 },
];
const discountedProducts = products.map((product) => {
  return { ...product, price: product.price - product.price * 0.1 };
});
console.log(discountedProducts);
const laptop = products.map((product) => {
  return `${product.name}->${product.price}`;
});
console.log(laptop);
const productNames = products.map((product) => {
  return `${product.name}`;
});
console.log(productNames);
const productCategory = products.map((product) => {
  return { ...product, category: "electronics" };
});
console.log(productCategory);
//Api Response
const apiResponse = {
  users: [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ],
};

const apiEmails = apiResponse.users.map((user) => {
  return `${user.email}`;
});
console.log(apiEmails);
const apiNameEmails = apiResponse.users.map((user) => {
  return `${user.name}"${user.email}"`;
});
console.log(apiNameEmails);
const apiUsersWithStatus = { users: [] };
apiUsersWithStatus.users = apiResponse.users.map((user) => {
  return { ...user, isActive: true };
});
console.log(apiUsersWithStatus);
//Localization – Working with JSON
const strings = [
  { id: "home.title", en: "Home", es: "Inicio" },
  { id: "home.logout", en: "Logout", es: "Cerrar sesión" },
  { id: "home.settings", en: "Settings", es: "Configuración" },
];
const spanishLocalization = strings.map((string) => {
  return { [string.id]: string.es };
});
console.log(spanishLocalization);
const englishLocalization = strings.map((string) => {
  return string.en;
});
console.log(englishLocalization);
//Flatten and Transform Data
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
const items = orders
  .map((item) => {
    const names = item.items.map((item) => {
      return item.name;
    });
    return [...names];
  })
  .flat(1);
console.log(items);
const itemsBought = orders
  .map((item) => {
    const names = item.items.map((itemInside) => {
      return `${item.customer} ordered ${itemInside.name} x ${itemInside.qty}`;
    });
    return [...names];
  })
  .flat(1);
console.log(itemsBought);
  