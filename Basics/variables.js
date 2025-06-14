//var function scoped
function testVar() {
  if (true) {
    var x = 10;
    console.log(x); // 10
  }
  console.log(x); // 10 — accessible outside block due to function-scope
}
testVar();

var x = 5;
var x = 100; // re-declaration allowed
console.log(x); // 100
var y=50;
y=100;// re-updation allowed
var z
console.log(z)//Hoisted on top of function with undefined value until intialized;
z=3
console.log(z);//3
//let keyword(ES6)
function testLet() {
    if (true) {
        let y = 20;
        console.log(y); // 20
    }
    // console.log(y); ❌ ReferenceError: y is not defined (block scope)
}
testLet();

let a = 1;
// let a = 2; ❌ SyntaxError: Identifier 'a' has already been declared
a = 3; // ✅ allowed
let z
console.log(z)//Hoisted on top of function with undefined value until intialized;
z=3
console.log(z);//3
//const keyword(ES6)
const pi = 3.14;
// pi = 3.1415; ❌ TypeError: Assignment to constant variable

const person = {
    name: "Alice"
};
person.name = "Bob"; // ✅ Allowed: object reference is constant, not its contents

// const person; ❌ SyntaxError: Missing initializer

