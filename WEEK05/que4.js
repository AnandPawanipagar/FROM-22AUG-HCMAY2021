let name = "HICODER";

let printName = (name) => {
  let alphabet = [...name];
  return alphabet.forEach((i) => {
    console.log(i);
  });
};
printName(name);
