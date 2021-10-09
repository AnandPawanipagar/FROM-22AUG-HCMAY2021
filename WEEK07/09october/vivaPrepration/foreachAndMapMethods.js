let arr = [1, 2, 3, 4];
//for every element of the array, foreach method just calls a function but does not return a new array.whereas, map method also calls a function for every element of the array and returns a new array
let forEach = arr.forEach((e) => {
  return e * e;
});
console.log(forEach);

let map = arr.map((e) => {
  return e + 1;
});
console.log(map);
