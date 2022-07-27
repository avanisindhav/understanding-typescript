let userInput1: unknown;
let userInput2: any;

userInput1 = 1;
userInput1 = "Avani";

userInput2 = 2;
userInput2 = "Abhay";

let userName29: string;
// userName = userInput1; //not allowed by typescript will throw error as type unknown
userName29 = userInput2; //allowed by typescript as type any

//this is allowed as we put check before so typescript allow that
if (typeof userInput1 === "string") {
  userName29 = userInput1;
}
