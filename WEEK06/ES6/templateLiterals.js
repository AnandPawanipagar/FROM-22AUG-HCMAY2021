//Template literals are the string literals enclosed by the backtick “(grave accent) and can contain placeholders indicated by dollar sign curly braces.
let myName = "John";
let myRole = "Software Developer";
console.log(`My name is ${myName} and I am a ${myRole}.`); //
// output---My name is John and I am a Software Developer

//for multiline string, before template literals we used /n .for example
let myName = "John";
let myRole = "Software Developer";
console.log("Welcome! \n My Name is " + myName + "\n I am a " + myRole);
//with template literals
console.log(`Welcome!
My Name is ${myName}
I am a ${myRole}`); //newline character unnecessary
