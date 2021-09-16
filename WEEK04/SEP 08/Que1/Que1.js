// 1. Solve the problem which has been given in class using the ternary operator.
// function say(massage) {
//   console.log(typeof massage);
//   if (massage === undefined) {
//     massage = "Hi";
//   } else {
//     massage = massage;
//   }
//   console.log(massage);
// }
// say();
// say("XYZ");
let say=(message)=>{
  return (message===undefined ? 'hi':message)
}
let ans=say();
console.log(ans);