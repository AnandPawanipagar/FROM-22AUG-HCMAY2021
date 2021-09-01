let completed = false;
let promise = new Promise((resolve, reject) => {
  if (completed) {
    resolve("this is resolve function");
  } else {
    reject("this is reject function");
  }
});
console.log(promise);
promise
  .then((success) => {
    console.log(`it is resolved thats why it entered into then ${success}`);
  })
  .catch((error) => {
    console.log(
      "it went to re reject state thats why it entered to catch block " + error
    );
  });
console.log("we are writting this message outside of the promise");
// let flag=false;
// let promise=new Promise((resolve, reject)=>{
// if(flag){
//     resolve("Iam resolve");

// }else{
//     reject('Iam reject')
// }
// })
// promise.then((success)=>{
// console.log(success)
// }).catch((error)=>{
// console.log(error)
// })
