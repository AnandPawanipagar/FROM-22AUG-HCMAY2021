//the behaviour of this keyword vary in global and fuctional context.
//this keyword in javascript refers to the object it belongs to .
//If function is used as the property of an object then, that function is called as method.
//It has different values depending on where it is used:

// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.

let obj = {
  stuName: "Anand",
  stdNo: "1RTGV",
};
console.log(obj);
const counter = {
  count: 0,
  next: function () {
    console.log(this.message);
    return ++this.count;
    //  return ++counter.count;
  },
  message: "hi",
};
console.log(counter.next());
//In global context, this keyword reprensents to global object that is window object
console.log(this === window);
this.color = "black";
console.log(this.color);
console.log(window.color);
