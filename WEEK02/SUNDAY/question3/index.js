let arrList = [];
// pushing the data
function pushElem() {
  let input = document.getElementById("input");
  let inputVal = input.value;
  arrList.push(inputVal);
  var personName = "";
  console.log(arrList);
  for (let i = 0; i < arrList.length; i++) {
    personName = personName + `<div class="personNameBox">${arrList[i]}</div>`;
  }
  console.log(personName);
  document.getElementById("textboxDiv").innerHTML = personName;
}
// popping the data
function popElem() {
  arrList.shift();
  var personName = "";
  console.log(arrList);
  for (let i = 0; i < arrList.length; i++) {
    personName = personName + `<div class="personNameBox">${arrList[i]}</div>`;
  }
  document.getElementById("textboxDiv").innerHTML = personName;
}
