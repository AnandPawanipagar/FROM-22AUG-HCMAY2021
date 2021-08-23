let arr = [1, 2, 3, 4, 5, "xyz"];
let status = false;
arr.forEach((i) => {
  if (arr[i] === "xyz") {
    arr.push("new element");
    status = true;
  }
});

if (!status) {
  alert("xyz is not present in the array.");
}
console.log(arr);
