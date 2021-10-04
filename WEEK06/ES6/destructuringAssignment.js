// destructuring assignment in es6 allows to unpack values of arrays, or propertie values from objects, into distinct variables
//destructuing array
let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
//we can skip the values as well
[a, , b, ...restOf] = arr;
console.log(b);

// swapping values using destructuring syntax
let [d, e, f, g] = arr2;
[d, e, f, g] = [g, f, e, d];
console.log(d);

//object destucturing
let obj3 = {
  name: "Anand",
  rollNo: "2",
  status: "active",
};
let { name, rollNo, status } = obj3;
//20 or 21
({ name, rollNo, status } = obj3);
console.log(name);
