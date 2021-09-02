//Example 1
//declaration of add function
let add=function(a,b){
    return a+b;
}
//calling add function
 console.log(add(1,2))

 //Example 2
 let substact=(a,b)=>{
     return a-b
 }
 console.log(substact(5,1))
 //Example 3
 let divide=(a,b)=>a/b;
 console.log(divide(10,2));

 let multiply=a=>a*a;
 console.log(multiply(2));

 //if you are using arrow functions, you can avoid writting { } and return keyword as shown in example 3 and 4.
 //if you have only 1 parameter then you can avoid using () also.
 //while calling the function, you have the same syntax for all types that is -----functionName(parameter1,parameter2)
 //if you will not use () while calling the function, and only write the functionName, then you can see the same function in output. it will not execute.