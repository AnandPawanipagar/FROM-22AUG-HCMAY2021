// 4. Show an example of  Variable swapping.
// for example: let tempVar1 = 10;
//     let tempVar2 = 20;
// output should be tempVar1 = 20 and tempVar2 = 10.
let tempVar1 = 10;
let tempVar2 = 20;
let temp = tempVar1; //changeing tempvar1
tempVar1 = tempVar2; //changeing tempvar1 to tempvar2
tempVar2 = temp; //changeing tempvar2

console.log(`tempvar1 is : + ${tempVar1}  , tempVar2 is : ${tempVar2}`);
