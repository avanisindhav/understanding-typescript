function combineUnionTest(n1: number | string, n2: number | string) {
  let result;

  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + " " + n2.toString();
  }
  return result;
}

const combinedAges = combineUnionTest(21, 22);
console.log(combinedAges);

const combineNames = combineUnionTest("Avani", "Sindhav");
console.log(combineNames);

//to specify either number or string we use union with |
