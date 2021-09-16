// 3. Sort array of elements
// [5,66,1,3,89,0,100,34,67,66,78,102,87]by using sort method.

// array.sort(compareIncreasing);
// function compareIncreasing(a, b) {
//   return a - b;
// }
// console.log(array);
let arr = [5, 66, 1, 3, 89, 0, 100, 34, 67, 66, 78, 102, 87];
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
