let div = document.createElement("div");
div.id = "img";
document.body.appendChild(div);
div.style.border = "3px solid gray";
div.style.height = "400px";
div.style.width = "800px";
div.style.alignItems = "center";

function divName() {
  let img = document.createElement("img");
  img.setAttribute("src", "photo.jpg");
  img.setAttribute("width", "800px");
  img.setAttribute("height", "400px");
  div.appendChild(img);
}
divName();
