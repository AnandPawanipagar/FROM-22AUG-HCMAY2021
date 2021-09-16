//mutable objects are thouse whose value can change once created whereas immutable objects are thouse whose value cannot changed once created.
// let car={
//     color:'red',
//     tyres:'4'
// }
// let anotherCar=car;
// car.color='blue';
// anotherCar.color='green';
// console.log(anotherCar.color);
// console.log(car.color);
// console.log(car===anotherCar);


//This example shows that strings are immutable.

// let aString="This is a string";
// let bSting=aString;
// bSting="The string is changed";
// console.log(aString);
// console.log(bSting);

//creating immutable javscript objects

let obj1={
    name:"anand"
}
obj2=obj1;
Object.freeze(obj1);
console.log(obj2);
obj2.name="prashant";
console.log(obj2);
console.log(obj1);
