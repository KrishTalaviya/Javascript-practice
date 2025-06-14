const ringo = {
  firstName: "Ringo",
  greet: function (greeting, punctuation) {
    console.log(this)
    console.log(`${this.firstName} says ${greeting}${punctuation}`);
  },
};

ringo.greet("hii", "!!");
let detached =ringo.greet
detached("hii","!!")
//to solve "this" problem call,apply and bind methods were introduced
const george = {
  firstName: "George",
  lastName: "Harrison",
};
const jason = {
  firstName: "jason",
  lastName: "Harrison",
};

//call method
detached=ringo.greet.call(george, "hii", "!!");//assign this=george
console.log(detached);

//apply method
ringo.greet.apply(jason, ["hii", "!!"]);
function numbers(){
    let a=[...arguments]
    console.log(a)
    return  min = Math.min.apply(null,arguments);
}
console.log(numbers(1,2,4,67))

const Greet=ringo.greet.bind()
console.log(Greet);
const jasonGreet = ringo.greet.bind(jason,"hii","!!!");
console.log(jasonGreet());

function multiply(a,b){
    return a*b;
}
const double=multiply.bind(null,2)
console.log(double(4))
const triple = multiply.bind(null, 3);
console.log(triple(4));
const isAlwaysNine = multiply.bind(null,3,3);
console.log(isAlwaysNine(4));
class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.count = startingNum;
    this.incrementAmt = incrementAmt;
  }
  incrementAndPrint() {
    console.log(this.count);
    this.count += this.incrementAmt;
  }
  start() {
    setInterval(this.incrementAndPrint.bind(this), 1000);
  }
}
let myCounter = new Counter(5, 2); // Starts counting from 5 and increments by 2
myCounter.start();





