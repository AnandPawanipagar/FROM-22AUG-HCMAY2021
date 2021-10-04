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
