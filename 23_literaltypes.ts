function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    // resultConversion === "as-numbr" // if i write this tyypo can be catch by typescript
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }

  return result;
}

const combineAgesAsNumber = combine(12, 23, "as-number");
console.log(combineAgesAsNumber);

const combineAgesAsText = combine(12, 23, "as-text");
console.log(combineAgesAsText);

// const combineName = combine("Aani", "sindhav", "as-tex"); //this is also throw error so we catch issue using typescript

// we can use enum too but for only two value we can use literal types
// literal is specific value

let number: 2.5 = 2.5;

// number = 6; //this throw error in typescript so ;like const number = 2.5; like this it will work as lireal type
