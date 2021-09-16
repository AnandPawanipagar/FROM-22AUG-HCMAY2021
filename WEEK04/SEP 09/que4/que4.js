// 4. How to use string literals inside HTML tag
// Ex: create div
// <div>
// <img src="image.png" alt=image  />
// <span>I am Span.</span>
// </div>
let div = document.createElement(`div`);
div.innerHTML = `<img src="./photo.jpg" alt="Anand Photograph"/>
<span>I am span </span>`;
document.body.appendChild(div);
