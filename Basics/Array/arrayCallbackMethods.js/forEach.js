const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
console.log("--------");
for(let key in users){
  console.log(key);
  console.log(users[key]);
}
console.log("--------")
const cities=["Rajkot","Jamnagar"];
//logging
users.forEach((user)=>{
  console.log(user['id']);
  console.log(user.name);
})
//adding property
users.forEach((user)=>{
  user.city=cities
});
console.log(users);
/* users.forEach((user)=>{
  const ul=document.createElement('ul')
  for(const key in user){
    const li=document.createElement('li');
    li.textContent=user[key];
    ul.appendChild(li)
  }
  document.body.appendChild(ul);
}) */
const todos = [
  { task: "Learn JS", completed: false },
  { task: "Build project", completed: true },
];
todos.forEach((todo)=>{
  console.log(`${todo.task}-${todo.completed?'done':'undone'}`)
})