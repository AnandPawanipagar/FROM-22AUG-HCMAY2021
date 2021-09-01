let add=(a,b)=>{
    return a+b
}
let avg=(a)=>{
    let myAvg=add(2,3);
   return myAvg/2
}
console.log(avg(add));

let substract=(a,b)=>a-b;
let avg=(substract)=>substract(10,2)/2;
console.log(avg(substract));
``