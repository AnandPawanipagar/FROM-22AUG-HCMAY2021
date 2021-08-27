let numbers = [1, 3, 5];
const checkElement = (numbers) => {
  let result = true;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
      result = false;
      break;
    }
  }
  return result;
};
console.log(checkElement(numbers));
// console.log(checkElement([1,3,5])); comment line no 1, if you are directly passing the array.

let result = numbers.every(function (e) {
  console.log(e);
  return e > 0;
});
console.log(result);
