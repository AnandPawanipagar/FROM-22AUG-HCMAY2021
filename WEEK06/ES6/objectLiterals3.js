
let obj1 = {
  name: "Anand",
  company: "taskmo",
  designation: "fsda",
};

const arr=Object.keys(obj1);
// console.log(arr);
// console.log(obj1.name);
// console.log(obj1["name"]);
arr.forEach((ele) => console.log(obj1[ele]));
