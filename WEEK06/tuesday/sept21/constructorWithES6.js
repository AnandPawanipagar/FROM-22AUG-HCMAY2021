class Person {
  constructor(name) {
    this.name = name;
  }
  // rollNo = "anand";
  getName() {
    return this.name;
  }
}

var naga = new Person("naga");
console.log(naga.getName());
console.log(typeof naga);
console.log(naga);
// console.log(naga.rollNo);
console.log(naga instanceof Person);
console.log(typeof Person);
