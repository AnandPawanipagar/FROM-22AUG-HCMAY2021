let factorial = (a) => {
  let ans = 1;
  if (a == 1) {
    return ans;
  } else {
    for (let i = a; i >= 1; i--) {
      ans = ans * i;
    }
    return ans;
  }
};
let a = 5;
ans = factorial(a);
console.log(`The factorial of ${a} is ${ans}`);



