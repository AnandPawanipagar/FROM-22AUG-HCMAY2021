let completed=true;
function func1(){
    return new Promise(function(resolve,reject){
        if(completed){
            resolve();
        }
        else{
            reject('myname');
        }
    })
}
func1().then(function(error){
    console.log('thanks for resolving'+ error)
}).catch(function(name){
    console.log('it is rejected'+ name)
})
