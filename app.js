//we can use custom types like above to avoid confusion and s
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}
var combineAgesAsNumber = combine(12, 23, "as-number");
console.log(combineAgesAsNumber);
var combineAgesAsText = combine(12, 23, "as-text");
console.log(combineAgesAsText);
