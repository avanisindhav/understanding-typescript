// const person = {
//   name: "Avani",
//   age: 22,
//   hobbies: ["Sports", "Cooking", "Reading"],
//   role: [2284, "Software Engineer"],
// };

//now we want Above Object role as tuples
//  tuples are not core datatype and not supported by javascript its typescript database
//  tuples are fixed length and fixed typed array
//  this also not done by typescript inference so need to define manually
//  like in above example we want role to be tuple that in a way that role must have 2 length
//  first will be employee id and second will be the designation string

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //this is the way tuples are identify by the typescript
} = {
  name: "Avani",
  age: 22,
  hobbies: ["Sports", "Cooking", "Reading"],
  role: [2284, "Software Engineer"],
};

// now if we try to replace employee id with string this will yell
// person.role[0] = "strings"

// same if we try to change length using or above any case error will be thrown
// person.role = [2284];
// person.role = [];
// person.role = [2284, "Software Engineer", "Simform Solution"];
// person.role = ["string", "number"];

// push is the exception that typescript is not able to detect
person.role.push("Simform Solution");

console.log(person);
