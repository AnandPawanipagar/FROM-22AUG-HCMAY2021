for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("after " + i + " seconds(s);" + i);
  }, 1000);
}
// The setTimeout function callback isn’t triggered until the for loop execution has completed. When the for loop has finished executing the value of i is 4. Now when the setTimeout call begins to execute it uses the last set value of i which is 4. Hence 4 is printed in all the setTimeout callbacks.

//solution to this
// One solution to the above seen issue is to create a new scope for each setTimeout execution. You can use IIFE to create a new scope for each setTimeout callback without polluting the global scope. Simply wrap up the setTimeout code inside a IIFE.
for (var i = 1; i <= 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log("after " + i + " seconds(s);" + i);
    }, 1000);
  })(i);
}
