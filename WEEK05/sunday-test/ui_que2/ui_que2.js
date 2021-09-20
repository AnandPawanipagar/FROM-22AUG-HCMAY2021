setTimeout(() => {
  let emailDiv = document.getElementById("exampleModal");
  emailDiv.classList.remove("invisible");
  document.getElementById("bgId").classList.add("blur");
  document.getElementById("bgId").classList.add("disableDiv");
  document.getElementById("getStart").classList.remove("first_button");
}, 5000);
function closeBtn() {
  let CloseModal = document.getElementById("exampleModal");
  CloseModal.classList.add("invisible");
  document.getElementById("bgId").classList.remove("blur");
  document.getElementById("bgId").classList.remove("disableDiv");
  document.getElementById("getStart").classList.add("first_button");
}
function bringForm() {
  let myForm = document.getElementById("myForm");
  myForm.classList.remove("invisible");
  document.getElementById("getStart").classList.remove("first_button");
}
