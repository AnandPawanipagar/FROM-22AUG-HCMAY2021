//This person is class.
//This we also called as constructor
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};
Person.prototype.myName = "Anand";

var naga = new Person("naga");
console.log(naga);

//you can see that , an object is created  of name person whichis having key value pair.
// name:'naga'
// getName:f()
//myName:'Anand'-----this you will find in prototype within person object.
