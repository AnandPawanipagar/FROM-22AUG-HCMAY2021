//how to use callback in map method example
let arrObj = [
  {
    firstname: "Anand",
    lastname: "pawanipagar",
  },
  {
    firstname: "Prashant",
    lastname: "Sharma",
  },
];
arrObj.map((i)=>{
    console.log(i.firstname)
})
//how to use callback in setTimeout 
setTimeout(()=>{
    console.log('hello world')
},2000);
//passsing function as a parameter to the outer function

function func1(callback,callback2){
    console.log("before callback 1");

    callback();

    console.log("after callback 1");
    console.log("before callback 2");

    callback2();
}

func1(()=>{
    console.log("I am callback1");
},()=>{
    console.log("I am callback 2")
});