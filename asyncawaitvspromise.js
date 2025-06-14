//promise
function runThen() {
  console.log("Start");

  new Promise((res) => {
    setTimeout(() => res("Done!"), 1000);
  }).then((result) => {
    console.log(result);  // After 1 sec
    console.log("End");
  });

  console.log(1);         // << Runs immediately, no waiting
}

runThen();
console.log(2);           // << Runs immediately, no waiting
//output-start,1,2,done,end

//asyncawait
async function runAsyncAwait() {
  console.log("Start");

  const result = await new Promise((res) => {
    setTimeout(() => res("Done!"), 1000);
  });

  console.log(1);             // << Pauses until the promise resolves
  console.log(result);        // "Done!"
  console.log("End");
}

runAsyncAwait();
console.log(2);               // << Runs immediately, no waiting
//output-start,2,1,done,end