// 6. Using splice and other methods, convert the following variable in an object and print it's key.
// cookie="id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly"
// Expected Output:
// id is a3fWa
// Expres at Thu, 21 Oct 2021 07:28:00 GMT
// Works on HttpOnly

let cookie =
  "id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly";
const cookieArr = cookie.split(";");

const [idString, ExpString, SecureString, HttpString] = cookieArr;

const v1 = idString.trim();
const v2 = ExpString.trim();
const v3 = SecureString.trim();
const v4 = HttpString.trim();
const [id1, id1value] = v1.split("=");
console.log(id1 + " is " + id1value);
const [exp1, exp1Value] = v2.split("=");
console.log(exp1 + " is " + exp1Value);
console.log("Works on " + v4);

