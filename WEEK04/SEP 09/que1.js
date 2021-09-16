// 1. Calculate sum of given arguments
// sum(10, "Hi", null, undefined, undefined, 20)
// hint: Convert into number
//expected outpur 10Hinullundefinedundefined20
let a = Number("Hi");
let b = Number(null);
let c = Number(undefined);
console.log(a, b, c);

let sum = (...args) => {
  let totalSum;
  for (let elem of args) {
    totalSum = elem + totalSum;
  }
  return totalSum;
};
let ans = sum(10, a, b, c, 20);
console.log(ans);
