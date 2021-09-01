let input = document.getElementById("myId");
console.log(input);
let myFunction=function () {
  var myInput = document.getElementById("myId");
  myInput.value = myInput.value.toUpperCase();
}
input.addEventListener("change", myFunction);
//regular functions are hoisted in js but anonymous functions are not hoisted. so you can not access them before there declaration.
