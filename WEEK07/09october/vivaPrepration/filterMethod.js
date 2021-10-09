let arr = [1, 2, 3, 4];
let filter = arr.filter((e, i) => {
  return i > 1 && e > 2;
});
console.log(filter);
