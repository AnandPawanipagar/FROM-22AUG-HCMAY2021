let img = document.createElement("img");
img.id = "myFlower";
img.src = "flower-img.jpg";
document.body.appendChild(img);
//selecting and adding css to the img
let getImg = document.getElementById("myFlower");
getImg.style.height = "50%";
getImg.style.width = "50%";
getImg.style.display = "block";
getImg.style.margin = "0 auto";
// console.log(img);
