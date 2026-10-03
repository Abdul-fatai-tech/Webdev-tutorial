console.log("Normal message");
console.info("Info rmation message");
console.warn("Warning message");
console.error("Error message");
console.table([{name: "John", age: 30}]);
console.clear(); // Clear console
console.time("timer"); // Start timer
console.timeEnd("timer"); // End timer


let name = "fatai";
let message = 'Hello';
let template = `Hello ${name}`; // template literal
console.log(template); 

let u = 10;
let i = 20;
let o = u * i;
console.log(o); 
let first = "abdul-fatai";
let second = "opemipo";
let third = first + " " + second;
console.log(third);


let x = 10;
x += 3;
console.log(x);
x -= 2;
console.log(x);
x *= 2;
console.log(x);
let firstName = 'abdul-Fatai', lastName, fullName = `${firstName} ${lastName}`;
console.log(fullName);
const pi = 3.142;
// pi = 142;
console.log(pi)


// let school = 'fatai';
// function great(school) {
// console.log("hello " + school);
// }
// great(school);




// let food = "rice";
// function great(food) {
//     return "hello " + food;
// }
// let result = great(food);
// console.log(result);
// let today = new Date();
// console.log(today.getFullYear());
// let jollof = "rice";
// console.log(typeof jollof);
// let number = 24;
// console.log(typeof number);
// let isstudent = true;
// console.log(typeof isstudent)
// let person1 = {
//     class: 'sss',
//     student: 18
// };
// console.log(typeof person1)
// let fruit= ['apple', 'mango', 'orange']
// console.log(Array.isArray(fruit))




let person = { name: "abdul-fatai", age: 18, city: "isheri", state: "lagos", country: "nigerial" }; // Object
console.log([person["name"]]);

let object  = { firstName: "abdul-fatai", lastName:'opemipo', age: 18, city: "isheri", state: "lagos", country: "nigerial", friends: ['friend 1', 'friend 2', 'friend 3'], intro:function() {
    return `MY NAME IS ${this.firstName} ${this.lastName} AND I AM ${this.age} YEARS OLD AND I LIVE IN ${this.city}, ${this.state}, ${this.country} this are my friends ${this.friends[0]}, ${this.friends[1]}, ${this.friends[2]}`;
} }; // Object
console.log(object.intro());    
