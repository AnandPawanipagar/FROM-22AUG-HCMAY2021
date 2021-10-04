//Spread syntax expands an array into separate elements, while a rest syntax condenses array elements into a single element.
// Rest parameter: collects all remaining elements into an array.
//Spread and Rest are basically opposites to each other.\
//rest operator
function add(...args) {
  let result = 0;

  for (let arg of args) result += arg;

  return result;
}

add(1); // returns 1
add(1, 2); // returns 3
add(1, 2, 3, 4, 5); // returns 15

// spread operator
let arr = [1, 2, 3, 4];
[a, , b, ...restOf] = arr;
console.log(b);
