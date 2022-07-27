function add27(n1: number, n2: number) {
  return n1 + n2;
}

function printResult27(result: number) {
  console.log(result);
}

let combineValues: (x: number, y: number) => number;

combineValues = add27;
// combineValues = printResult27; //return TYpeScript ERROR !!!
// let combineValues: Function;

// combineValues = add27;
// combineValues = 2; // not allowed as intialise since define type Function

console.log(combineValues(2, 3));
