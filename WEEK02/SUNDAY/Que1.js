//In js, we can pass functions as parameters to other functions and call them inside outer functions. 
function print(callback){
    callback();
}
//The print() takes another function as a parameter and calls it inside.This is valid in js and it is a callback.so a function that is passed to another funtion as a parameter is a callback function
//example of a callback.
const message = function() {  
    console.log("hello hicoder");
}
 
setTimeout(message, 3000);
// In the above example, message is a callback, since it has been passed  to setTimeout method as a parameter.