function add(n1, n2) {
    return n1 + n2;
}
function printResult(result) {
    console.log(result);
}
var combineValues;
combineValues = add;
// combineValues = printResult; //return TYpeScript ERROR !!!
// let combineValues: Function;
// combineValues = add;
// combineValues = 2; // not allowed as intialise since define type Function
console.log(combineValues(2, 3));
