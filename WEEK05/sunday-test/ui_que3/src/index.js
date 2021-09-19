console.log(navigator.platform);
const Win = `
<h1>Question 3</h1>
<div>
 <button>Win Download</button>
</div>
`;
const Mac = `
<h1>Question 3</h1>
<div>
 <button>Mac Download</button>
</div>
`;
const Android = `
<h1>Question 3</h1>
<div>
 <button>Android Download</button>
</div>
`;
if (navigator.platform.indexOf("Win") !== -1) {
  document.getElementById("app").innerHTML = Win;
} else if (navigator.platform.indexOf("Mac") !== -1) {
  document.getElementById("app").innerHTML = Mac;
} else if (navigator.platform.indexOf("Android") !== -1) {
  document.getElementById("app").innerHTML = Android;
} else {
  document.getElementById("app").innerHTML = `Other OS ${navigator.platform} `;
}
