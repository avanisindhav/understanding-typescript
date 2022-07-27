// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }
// //  you can specify return type after parameter :type as seen in above function

function add(n1: number, n2: number) {
  return n1 + n2;
}
//  typescript can infere the return type itself too

// function printResult(result: number) {
//   console.log("Result is :", result);
// }
//if function does not return anything then return type of funtion will be void
// even if you try to console console.log(printResult(23)) will return undefined

// if you wanna pass the return type as undefined then need to pass return; statement in function luike below
// function printResult(result: number): undefined {
//   console.log("Result is :", result);
//   return;
// }

// otherwise we can use void withoiut return and typescript can also infer thi stype
function printResult(result: number): void {
  console.log("Result is :", result);
}

console.log(printResult(add(2, 3)));
