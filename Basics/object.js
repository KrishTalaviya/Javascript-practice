//Keys: Always strings (even if you write them without quotes).
//Values: Anything – numbers, strings, arrays, functions, other objects, even null.
//object are mutable in js
//In JavaScript, almost "everything" is an object.
// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects

const mySym=Symbol("#")
const dog={
    name:"german shepherd",
    age:3,
    bark:function(){
        console.log("bhav bhav");
    },
    [mySym]:"hash symbol"
}
console.log(dog)
console.log(dog.mySym)
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

const person2 = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//accessing js object properties
console.log(dog.age);
console.log(dog["age"]);
let x="age"
console.log(dog[x]);
//adding properties to object
dog.color="black"
dog.height=2
console.log(dog)
//delete properties to object
delete dog.color
delete dog["height"]
console.log(dog)
//changing properties
dog.age=5
//freezing object
Object.freeze(dog)
dog.age=7
console.log(dog)
//using js properties inside function of object
const cat={
    name:"jenny",
    age:3,
    bark:function(){
        console.log("bhav bhav");
    },
    [mySym]:"hash symbol"
}
cat.bark2=function(){
    console.log(`hello this is`,$this.name);
}
console.log(cat.bark2())
//nested object
myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  console.log(dog.myCars.car1)
  console.log(dog.myCars["car2"])
  //object method
  const person3 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  //accessing object method
  console.log(person3.fullName)
  console.log(person3.fullName())
  //Adding a Method to an Object
  person3.name = function () {
    return this.firstName + " " + this.lastName;
  };
  //Using JavaScript object Methods
  person3.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };
  console.log(person3)
  //object constructor
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  const myFather = new Person("John", "Doe", 50, "blue");
  const mySelf = new Person("Johnny", "Rally", 22, "green");
  //Property Default Values
  function Person2(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality="indian";
  }
  //Adding a Property or method to an Object constructor
  myFather.nationality = "English";
  //Adding a Property to a Constructor
  Person.nationality = "English";//You can NOT add a new property to an object construtor output will be undefined.
  Person.changeName = function (name) {
    this.lastName = name;
  }//You can NOT add a new method to an object construtor output will be undefined.
  
  myMother.changeName("Doe");
  Person.prototype.nationality = "English";//correct
  Person.prototype.changeName = function (name) {
    this.lastName = name;
  }
  
  myMother.changeName("Doe");
  //combining objects
  const objOne={1:"a",2:"b"}
  const objTwo={3:"a",4:"b"}
  const objThree={5:"a",6:"b"}
const objFour=Object.assign({},objOne,objTwo,objThree)
const objFive={...objOne,...objTwo}
//array of object
const users=[
  {
    id:"123abc",
    name:"nikunj"
  },
  {
    id:"123def",
    name:"kamlesh"
  },
  {
    id:"123ghi",
    name:"shyam"
  },
]
console.log(users[1].name)
console.log(Object.keys(users))
console.log(Object.values(users))
console.log(Object.entries(users))
//object destructuring

const course={
  name:"xyz",
  price:999,
  teacher:"hitesh"
}
const {teacher}=course;
console.log({teacher})
console.log(teacher)
const {name:teacherName}=course
console.log(teacherName)

