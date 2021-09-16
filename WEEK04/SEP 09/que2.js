// 2. Combine arguments ("JavaScript", "Rest", "Parameters")by using Rest param and reduce function
// Expected output: JavaScript Rest Parameters

let combine = (...args) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let ans = args.reduce(reducer);
  return console.log(ans);
};
combine("JavaScript", "Rest", "Parameters");
