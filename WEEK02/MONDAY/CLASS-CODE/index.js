function add(){
    let sum=0;
    // console.log(arguments);
    console.log(arguments.length);
    for (let i=0; i<arguments.length; i++ ){
        sum=sum+arguments[i];
    }
    return sum;
}
function average(a,b,fun){
    console.log(arguments);
    console.log(arguments.length);
    return fn(a,b)
}