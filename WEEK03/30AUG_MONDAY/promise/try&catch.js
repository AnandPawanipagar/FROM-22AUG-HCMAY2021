// try{
//     notExisting();
// }catch(error){
//     console.log(error.name+ ":"+error.message)
// }
// console.log('hello anand');
try{
    notExisting();
    console.log('anand')
}catch(error){
    console.log(`${error.name}:${error.message}`)
}
// console.log('this message is out of try and catch block')