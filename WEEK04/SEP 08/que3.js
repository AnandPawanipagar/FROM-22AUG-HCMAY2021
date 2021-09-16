// 3. Write a function -
// function put(toy, toyBox=[]){
// Body
// }
// add teddy in array toyBox=["Teddy"] by passing default parameter.
function put(toy, toyBox = []) {
  toyBox.push = "Teddy";
  console.log(toyBox);
  console.log("Toy");
}
put();
