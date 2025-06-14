//every
function isBigEnough(element, index, array) {
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough); // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true
  //subSet
  const isSubset = (array1, array2) =>
    array2.every((element) => array1.includes(element));
  
  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
  console.log([1, , 3].every((x) => x !== undefined)); // true
  console.log([2, , 2].every((x) => x === 2)); // true
  //Validate User Objects
  const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: true },
    { id: 3, name: "Charlie", active: true },
  ];
  const isAllActiveUsers = users.every((user) => user.active);
  console.log(isAllActiveUsers);  
  // Check Required Fields in JSON Data
  const forms = [
    { name: "John", email: "john@example.com" },
    { name: "Jane", email: "jane@example.com" },
    { name: "Doe", email: "" },
  ];
  const emailValidation = forms.every(
    (form) => form.email !== "" && form.email !== undefined
  );
  console.log(emailValidation);
  //some

  // Validate emails: Are any users missing an @ in their email?
  const invalidEmail = users.some((user) => !user.email.includes("@"));
  console.log(invalidEmail);
  //Check if any article is authored by a non-existent user.
  const articles = [
    { id: 101, title: "Intro to JS", authorId: 1 },
    { id: 102, title: "Advanced CSS", authorId: 2 },
    { id: 103, title: "React Basics", authorId: 4 },
  ];
  const isArticleInUser = articles.some((article) => {
    return !users.some((user) => user.id === article.authorId);
  });
  console.log(isArticleInUser);