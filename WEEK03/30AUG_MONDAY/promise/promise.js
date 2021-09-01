let completed= true;
let learnJS=new Promise(function(resolve,reject){
    if(completed){
        resolve("iam resolve")
    }
    else{
        reject('iam reject')
    }
})
console.log(learnJS);

var pendingJs=new Promise((resolve,reject)=>{
setTimeout(()=>{
    if(completed){
        resolve("iam resolve")
    }
    else{
        reject("iam reject")
    }
},1000)
});
console.log(pendingJs)