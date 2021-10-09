//https://stackabuse.com/spread-operator-in-javascript/
//This link explains everything about using spreadOpetator with object
let obj1 = {
  name: "Anand",
  rollNo: "2",
  email: "anand.p@taskmo.com",
};
let obj2 = {
  company: "taskmo",
  designation: "fsda",
};
// console.log(...obj1)  --This will through an error since object have key and value both. it is not an array

console.log({ ...obj1 }); // we have to use object destructing syntax to use spread for object

//example-- if keys are not common for both the objects, and making a single object with all keys
console.log({ ...obj1, ...obj2 });

//In case of clashing properties, the property of the last object wins. Let us see this in an example:
const o1 = { a: 1, b: 2 };
const o2 = { b: 3, c: 4, ...o1 };
console.log(o2); //{ b: 2, c: 4, a: 1 }
// example 2 ---clashing properties
const o3 = { a: 1, b: 2 };
const o4 = { ...o3, b: 3, c: 4 };
console.log(o4); //{ a: 1, b: 3, c: 4 }
