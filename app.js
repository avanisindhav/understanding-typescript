function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log("".concat(phrase, " ").concat(result));
    }
    return n1 + n2;
}
var number1 = 56;
var number2 = 45.7;
var printResult = true;
var printPhrase = "Result is: ";
var result = add(number1, number2, printResult, printPhrase);
// console.log(result);
