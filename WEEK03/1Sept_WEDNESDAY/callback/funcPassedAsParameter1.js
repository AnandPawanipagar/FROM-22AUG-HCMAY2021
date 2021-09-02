let add = (a, b) => a + b;
let substact = (a, b) => a - b;
//passing add and substract function to fun function at line no 4.
let fun = function (add, substact) {
    //calling add function
  let avg = add(2, 4) / 2;
  console.log(avg);
  //calling substact function
  let some = substact(5, 2) / 3;
  console.log(some);
  //if you will not return anything from fun function, then it will return undefined
  return 'My name is anand'
};
// while calling fun function, you have to pass the same parameters add and substract as arguments.
console.log(fun(add,substact))