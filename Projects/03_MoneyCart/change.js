const currencies = [
  { currency: 1000, count: 3 },
  { currency: 500, count: 2 },
  { currency: 200, count: 2 },
];

let result = [{ total: 0, deno: [] }];

currencies.forEach(function (value) {
  const curr = value.currency;
  const cou = value.count;
  const existing = [...result];

  existing.forEach(function (entry) {
    for (let j = 1; j <= cou; j++) {
      const x = entry.total + curr * j;
      if (!result.some((e) => e.total === x)) {
        result.push({
          total: x,
          deno: [...entry.deno, { c: curr, cou: j }],
        });
      }
    }
  });
});


console.log(result);
change = 3400;
const changedObj = result.find((x) => x.total === change);
console.log(changedObj);
