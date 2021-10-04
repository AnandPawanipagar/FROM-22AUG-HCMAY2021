//In plain English, an object literal is a comma-separated list of name-value pairs inside of curly braces.

//In JavaScript there are two ways to create an object: the constructor function or the literal notation.

//Either way you have just created a JavaScript object called Website. The main difference here is what you can do with it. With the constructor function notation you create an object that can be instantiated into multiple instances (with the new keyword), while the literal notation delivers a single object, like a singleton.
//What is a singleton?
// A singleton is a class that allows only a single instance of itself to be created and gives access to that created instance.

//Objects in JavaScript have methods and properties, whether they are built with the constructor function or with the literal notation.
//static object example
let obj = {
  name: "fan",
  value: "off",
};
console.log(obj.name);
console.log(obj.value);
//before es6 dynamic object
function createMachine(name, value) {
  return {
    name: name,
    value: value,
  };
}
console.log(createMachine("mobile", "on"));
//after es6
function createMachine(name, value) {
  return {
    name,
    value,
  };
}
console.log(createMachine('laptop','off'))

// parameter name and object key name must be same to use es6 syntax
function createMachine(name1, value) {
    return {
      name:name1,
      value
    };
  }
  console.log(createMachine('laptop','off'))
//In plain english, object literals are key value paires within a curly braces.
//if you want to give space in between the name of the key, then you have to use string and we can access it using objectName['my string']
let obj1 = {
  name: "Anand",
  company: "taskmo",
  "gender name": "male",
};
//if we want to acces name, then
console.log(obj1.name);
console.log(obj1["gender name"]);
//imp--Now if you want the values should come dynamically, then we can do like..
let createMachine = (name1, company1, gender) => {
  return {
    name: name1,
    company: company1,
    gender, //with es6 there is no need to give value if you are writting the parameter and key name exact same
  };
};
console.log(createMachine("Anand", "taskmo", "male"));
// Now if the key is string, then you have to use
