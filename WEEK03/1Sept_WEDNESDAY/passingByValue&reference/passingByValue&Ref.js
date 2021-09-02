//In js, if you are passing objects to the function as arguments, that is called as passing the objects by refernce.
//if you are passing the varible as argument, it is called as passing by value

//example of passing by value
let multiply=a=>a*a;
var y=10;
console.log(multiply(y));
console.log(y);

// In passing by value, its just refering the memory.