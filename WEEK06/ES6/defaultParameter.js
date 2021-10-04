//In JavaScript, the default value for function parameters is undefined.
//Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed
//
let NotDefaultPara = (a, b) => {
  return a + b;
};
console.log(NotDefaultPara(5, 3));
//default parameter example
let DefaultPara = (a, b=5) => {
  return a + b;
};
console.log(DefaultPara(5,3));
