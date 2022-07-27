function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + " " + n2.toString();
    }
    return result;
}
var combinedAges = combine(21, 22);
console.log(combinedAges);
var combineNames = combine("Avani", "Sindhav");
console.log(combineNames);
//to specify either number or string we use union with |
