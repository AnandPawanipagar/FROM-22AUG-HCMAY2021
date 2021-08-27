let marks = [5, 3, 7, 9, 10, 5];
let lessThanFive = false;
for (let index = 0; index < marks.length; index++) {
  if (marks[index] < 5) {
    lessThanFive = true;
    break;
  }
}
console.log(lessThanFive);

lessThanFive = marks.some(function (e, index, array) {
  console.log(e);
  console.log(index);
  console.log(array);
  console.log(e < 5);
  return e < 5;
});
