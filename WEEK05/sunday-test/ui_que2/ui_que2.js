setTimeout(() => {
  let emailDiv = document.getElementById("exampleModal");
  emailDiv.classList.remove("invisible");
  document.getElementById("bgId").classList.add("blur");
  document.getElementById("bgId").classList.add("disableDiv");
}, 5000);
function closeBtn() {
  let CloseModal = document.getElementById("exampleModal");
  CloseModal.classList.add("invisible");
  document.getElementById("bgId").classList.remove("blur");
  document.getElementById("getStart").classList.remove("first_button");
}
