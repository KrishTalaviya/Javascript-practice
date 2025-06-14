//async and await make promises easier to write"

//async makes a function return a Promise

//await makes a function wait for a Promise
async function myFunction() {
    return "Hello";
  }
  // above code is same as
  function myFunction() {
    return Promise.resolve("Hello");
  }

  //async function used as promise
  async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );
  //The await keyword can only be used inside an async function.

//The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
//await 
//let value = await promise;
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      resolve("I love You !!");
    });
    let a = await myPromise;
    console.log(a);
  }
  async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    let a = await myPromise;
    console.log(a);
  }
  //Comparison of promise and asyn await
  let mypromise3=new Promise(function(myresolve,myreject){
    setTimeout(myresolve("I love You !!!"),3000);

});
mypromise3.then(function(value){
    console.log(value);
})
console.log("hii");
//output will be 
//hii
//I love you!!!
//async await
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    let a = await myPromise;
    console.log(a);
    console.log("hii");
  }
//output will be 
//I love you!!!
//hii
//because await pause the execution and wait for a resolved promise before it continues
