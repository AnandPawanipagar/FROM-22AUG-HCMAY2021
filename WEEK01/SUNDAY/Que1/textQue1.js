let ul = document.createElement("ul");
ul.id = "menu";
document.body.appendChild(ul);
//Adding list items to the unordered list.
let li1 = document.createElement("li");
li1.textContent = "Home";
ul.appendChild(li1);
let li2 = document.createElement("li");
li2.textContent = "About";
ul.append(li2);
let li3 = document.createElement("li");
li3.textContent = "Services";
ul.append(li3);
let li4 = document.createElement("li");
li4.textContent = "Contact";
ul.append(li4);

// console.log(li1);
// console.log(ul);
