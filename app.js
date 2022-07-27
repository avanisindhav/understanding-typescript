// Type Aliases & Object Types
// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.
var u1 = { name: "Max", age: 30 }; // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.
// For example, you can simplify this code:
// function greet(user: { name: string; age: number }) {
//   console.log("Hi, I am " + user.name);
// }
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// To: type User = { name: string; age: number };
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
