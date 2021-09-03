function greeting(message) {
  return function (name) {
    return function (value) {
      return message + " " + name + " " + value;
    };
  };
}

let sayHi = greeting("HI");
let sayHello = greeting("Hello");

let a = sayHi("john");
let b = sayHello("anand");
console.log(a("mayur"));
console.log(b("prashant"));
