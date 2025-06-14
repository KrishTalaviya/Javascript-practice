//callback hell
//simple way of writing call back hell
//when medicine1 is received then 2 and after that 3 withs ame person.
function medicine1get(){
  console.log("medicine1 recieved");
  setTimeout(medicine2get,2000)
}
function medicine2get(){
  console.log("medicine2 recieved");
  setTimeout(medicine3get,3000)
}
function medicine3get(){
  console.log("medicine2 recieved");
}
setTimeout(medicine1get,1000)
//developers ways of writing callback hell-same as above code
setTimeout(function(){
  console.log("medicine1 recieved")
  setTimeout(function(){
    console.log("medicine2 recieved");
    setTimeout(function(){
      console.log("medicine3 received");
    },3000)
  },2000)
},1000)


//to solve call back hell promise were introduced

function medicineOne(ms){
  return new Promise(function(resolve){
    setTimeout(resolve,ms)
  })
  
}
medicineOne().then(function(){
  console.log("medicine1 recieved");
  return medicineOne(2000)
}).then(function(){
  console.log("medicine2 recieved");
  return medicineOne(3000)
}).then(function(){
  console.log("medicine3 recieved");
  
})
//Promise-I Promise a Result

  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );

  let myPromise2 = new Promise(function(myResolve, myReject) {
    let x = 1;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve(function(){
        console.log("resolved passed to value");
      });
    } else {
      myReject("rejected passed to error");
    }
  });
  
  myPromise.then(
    function(value) {value()},
    function(error) {error()}
  );

  //Example of callback
  setTimeout(myFunction("I love You !!!"), 3000);

function myFunction(value) {
  console.log(value);
}
//converting asyn callback to promise
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
//example of another callback
function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "index.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(req.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  getFile(myFunction);
  //converting asyn callback to promise
  let mypromise4=new Promise(function(resolve,reject){
    let req = new XMLHttpRequest();
    req.open('GET', "index.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve("done");
      } else {
        reject("undone");
      }
    }
    req.send();
  });
  mypromise4
  .then(console.log(value))
  .catch(console.log(error)
  );
  //another eg of callback hell
fetch(URL,function(response,error){
  if(error){
    console.log("erroe occured 1")
  }
  else{
    console.log(response);
    fetch(Url2,function(response2,error){
      if(error){
        console.log("error 2 occured");
      }
      else{
        console.log(response2)
        fetch(url3,function(response3,error){
          if(error){
            console.log(error)
          }
          else{
            console.log(response3);
          }
        })
      }
    })
  }
  
})
//fetch promise
  fetch(url)
    .then(function (response) {
      console.log(response);
      fetch(url2)
        .then(function (response2) {
          console.log(response2);
          fetch(url3)
            .then(function (response3) {
              console.log(response3);
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
    //flatten fetch promising chain
    fetch(url).then(
      function(response){
        console.log(response)
        return fetch(url2)
      }
    ).catch(function(error){
      console.log(response);
    })
    .then(
      function(response2){
        console.log(response2);
        return fetch(url3)
      }
    )
    .then(function(response3){
      console.log(response3);
    })
    // async await
    async function fetchResult(){
      const response=await fetch(url);
      console.log(response);
      const response2 = await fetch(url2);
      console.log(response2);
      const response3 = await fetch(url3);
      console.log(response3);
    }
    //promise method
    //all
    const promise1 = fetch(url);
    const promise2 = new Promise((resolve, reject) =>
      setTimeout(reject, 100, "Error!")
    );
    const promise3 = 42;

    Promise.all([promise1, promise2, promise3])
      .then((values) => {
        console.log(values); // This will not run
      })
      .catch((error) => {
        console.error(error); // 'Error!'
      });
//allSettled


Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
  // [
  //   { status: 'fulfilled', value: 3 },
  //   { status: 'rejected', reason: 'Error!' },
  //   { status: 'fulfilled', value: 42 }
  // ]
});
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // "Second resolved" (the first promise to resolve)
  })
  .catch((error) => {
    console.error(error); // This won't be hit because the first promise resolves
  });
