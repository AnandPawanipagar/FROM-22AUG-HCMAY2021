//Spread operator allows iterables(objects, arrays) to be expanded into single argument/element
//example1--simple expanding the arr using spread
let arr = [1, 2, 3, 4];
console.log(...arr);

//example2--copying the array using spread
let copyArr = [...arr];
console.log(copyArr);

//example3--adding extra elements to the arr
let addElemToArr = [...arr, 5, 6];
console.log(addElemToArr);

function sum(x, y, z) {
  return x + y + z;
}
let values=[1,2,3,4]
console.log(sum(values[0],values[1],values[2],values[3],5,6));
console.log(sum(...values))
//since, we can pass any no of arguments even if no of parameters is 3 accepted by function sum.
//so we can use the spread operator to giving arguments.
