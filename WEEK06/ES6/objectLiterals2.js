//computed property
let obj1 = {
  name: "light1",
  status: "on1",
};

let obj2 = {
  "name space": "light2",
  "status space": "on2",
};

const prefix = "mayur";

let obj3 = {
  [`${prefix} name`]: "light3",
  [`${prefix} status`]: "on3",
};
console.log(obj1);
console.log(obj2);
console.log(obj1.name);
console.log(obj2["name space"]);
console.log(obj3);
console.log(obj3[`${prefix} name`]);
//computed property name
let prefix = "thanks";
let obj = {
  [`${prefix}`]: "anand",
  name: "mayur",
  ["class"]: "10th",
};
console.log(obj);
// example--accessing values of the object whose keys are stored in an Array.
let arr = ["name", "class"];
obj2 = {
  name: "prashant",
  class: "10th",
};
arr.forEach((ele) => {
  console.log(obj2[ele]);
});
