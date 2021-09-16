// 2. Create a div and give height, width, and border. Inside that div add an image through the default parameter dynamically using JavaScript.
let div = document.createElement(`div`);
div.id = "imgDiv";
div.style.height = "500px";
div.style.width = "500px";
div.style.border = "5px solid black";
document.body.appendChild(div);
var Pic = "";

function displayImage(Pic="./photo.jpg") {
  let divLocation = document.getElementById("imgDiv");
  let imgElement = document.createElement("img");
  imgElement.src = pic;
  divLocation.append(imgElement);
}



displayImage(Pic);
