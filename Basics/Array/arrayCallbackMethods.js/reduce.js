const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentvalue, index) => {
  console.log(`${accumulator}value->${numbers[index]}`);
  console.log(`${currentvalue}`);
  return accumulator + currentvalue;
}, (accumulator = 1));
const factorial = numbers.reduce((accumulator, currentvalue, index) => {
  console.log(`${accumulator}value->${numbers[index]}`);
  console.log(`${currentvalue}`);
  return accumulator;
}, (accumulator = 1));
console.log(factorial);

console.log(sum);
const grade = [80, 90, 87, 50, 60];
const max = grade.reduce((max, currentvalue) => {
  if (max > currentvalue) {
    return max;
  } else {
    return currentvalue;
  }
});
console.log(max);
const min = grade.reduce((min, currentvalue) => {
  return Math.min(min, currentvalue);
});
console.log(min);

const votes = ["y", "y", "n", "y", "n"];
const results = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});
console.log(results);
//full practice in array
const nested = [[2, [3, [4, 5, [1]]]]];
const flatArray = nested.reduce((acc, val, index) => {
  let arr;
  if (Array.isArray(val)) {
    acc = [...acc, ...val.flat(Infinity)];
  } else {
    acc.push(val);
  }
  return acc;
}, []);
console.log(flatArray);
//full practice
const users = [
  { id: 1, name: "Alice", age: 25, country: "USA", purchases: [23, 45, 12] },
  { id: 2, name: "Bob", age: 30, country: "Canada", purchases: [20, 5] },
  {
    id: 3,
    name: "Carlos",
    age: 35,
    country: "USA",
    purchases: [80, 34, 50, 10],
  },
  { id: 4, name: "Diana", age: 22, country: "UK", purchases: [15, 10, 20] },
];
//Total Purchase Amount (All Users)
const totalPurchases = users.reduce((accumulator, currentValue) => {
  const purchase = currentValue.purchases.reduce((acc, val) => {
    return acc + val;
  });
  return accumulator + purchase;
}, 0);
console.log(totalPurchases);
//Purchase Summary per User
const userPurchase = users.reduce((user, currentValue) => {
  const purchase = currentValue.purchases.reduce((sum, val) => {
    return sum + val;
  }, 0);
  if (currentValue.name) {
    user.push({ name: currentValue.name, purchase: purchase });
  }
  return user;
}, []);
console.log(userPurchase);
//Users by Country Count
const cityCount = users.reduce((city, currentValue) => {
  const key = currentValue.country;
  if (city[key]) {
    city[key]++;
  } else {
    city[key] = 1;
  }
  return city;
}, {});
console.log(cityCount);
//Average Age of All Users
let count = 0;
const userAverageAge = users.reduce((average, currentValue) => {
  count++;
  return average + currentValue.age;
}, 0);
console.log(userAverageAge / count);
//Highest Spender
const highestSpender = users.reduce((spender, currentValue) => {
  const currValueSpent = getTotalSpent(currentValue);
  const spenderSpent = getTotalSpent(spender);
  if (currValueSpent >= spenderSpent) {
    spender = currentValue;
  }
  return spender;
}, users[0]);
console.log(highestSpender);
function getTotalSpent(user) {
  const totalSpent = user.purchases.reduce((acc, val) => {
    return acc + val;
  });
  return totalSpent;
}
//Group Users by Country
const userGroupedByCountry = users.reduce((groupedCountry, currentValue) => {
  const country = currentValue.country;
  if (!groupedCountry[country]) {
    groupedCountry[country] = [];
  }
  groupedCountry[country].push(currentValue);

  return groupedCountry;
}, []);
console.log(userGroupedByCountry);
//Top N spenders
const topNSpenders = users.reduce((topSpender, currentValue) => {
  if (topSpender.length < 2) {
    topSpender.push({
      ...currentValue,
      totalSpent: getTotalSpent(currentValue),
    });
  } else {
    topSpender = maxTwoFromThreeObjectArray([
      topSpender[0],
      topSpender[1],
      { ...currentValue, totalSpent: getTotalSpent(currentValue) },
    ]);
  }
  return topSpender;
}, []);
console.log(topNSpenders);
function getTotalSpent(user) {
  const totalSpent = user.purchases.reduce((acc, val) => {
    return acc + val;
  });
  return totalSpent;
}
function maxTwoFromThreeObjectArray(arr) {
  return arr.sort((a, b) => b.totalSpent - a.totalSpent).slice(0, 2);
}
// Remove Duplicates (No Set!)
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.reduce((acc, val) => {
  if (!acc.includes(val)) {
    acc.push(val);
  }
  return acc;
}, []);
console.log(uniqueArr);
//Implement .map() Using .reduce()

//Reverse a String
const str = "hello";
const reverseStr = str.split("").reduce((acc, val, index) => {
  let n = str.length - index - 1;
  acc = replaceChar(acc, n, val);
  return acc;
}, " ".repeat(str.length));
console.log(reverseStr); // Output: "olleh"

function replaceChar(str, index, newChar) {
  return str.slice(0, index) + newChar + str.slice(index + 1);
}
//Chain Multiple Reductions (Advanced)
const transactions = [
  { type: "deposit", amount: 100 },
  { type: "withdraw", amount: 20 },
  { type: "deposit", amount: 50 },
  { type: "withdraw", amount: 10 },
];

const totalBalance = transactions.reduce(
  (acc, val) => {
    if (val.type === "deposit") {
      acc.TotalBalance += val.amount;
    } else {
      acc.TotalBalance -= val.amount;
    }
    return acc;
  },
  { TotalBalance: 0 }
);
console.log(totalBalance); // Output: Total balance: 120
//Analytics: Group Orders by Status and Sum Total Revenue
const orders = [
  { id: 1, status: "delivered", total: 100 },
  { id: 2, status: "pending", total: 50 },
  { id: 3, status: "delivered", total: 200 },
  { id: 4, status: "cancelled", total: 0 },
  { id: 5, status: "pending", total: 75 },
];
const ordersSummary = orders.reduce((summary, order) => {
  const status = order.status;
  if (!summary[status]) {
    summary[status] = 0;
  }
  summary[status] += order.total;
  return summary;
}, {});
console.log(ordersSummary);
//Form Processing: Convert Array of Fields to Object
const formFields = [
  { name: "username", value: "john_doe" },
  { name: "email", value: "john@example.com" },
  { name: "age", value: 30 },
];
const user = formFields.reduce((obj, val) => {
  const key = val.name;
  const value = val.value;
  obj[key] = value;
  return obj;
}, {});
console.log(user);
//Social App: Count Unique Tags from Posts
const posts = [
  { id: 1, tags: ["react", "javascript"] },
  { id: 2, tags: ["javascript", "node"] },
  { id: 3, tags: ["css", "html", "react"] },
];
const uniqueTags = posts.reduce((tag, value) => {
  value.tags.forEach((val) => {
    if (!tag.includes(val)) {
      tag.push(val);
    }
  });
  return tag;
}, []);
console.log(uniqueTags);
