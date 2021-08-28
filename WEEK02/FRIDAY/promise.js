function myDisplayer(some){
    document.getElementById('demo').innerHTML=some;
}
let mypromise=new Promise(function(myResolve, myReject){
    let x=0;
    if(x==0){
        myResolve("ok");
    }
    else{
        myReject("error")
    }
});