//Que1- Can you give an example for destructuring an object or an array?
// Ans1-destructuring is an expresssion available in es6.
// It is used to extract values of objects and arrays and place them into different variables

//Array destructuring
let arr = ["one", "two", "three", "four"];
console.log(arr);
let [a, b, c, d] = arr;
console.log(a, b, c, d);

//swapping values using destructuring
[a] = [b];
console.log(a);

//object destructuring
let obj = {
  name: "Anand",
  company: "taskmo",
  designation: "fsda",
};

let { name, company, designation } = obj;
console.log(name, company, designation);

//if you will not give the exact key names,then the value will be undefined. for example-
let { x, y, z } = obj;
console.log(x, y, z);
