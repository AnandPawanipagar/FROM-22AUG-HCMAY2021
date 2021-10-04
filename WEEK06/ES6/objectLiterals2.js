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
