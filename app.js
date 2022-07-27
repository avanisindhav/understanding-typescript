var userInput1;
var userInput2;
userInput1 = 1;
userInput1 = "Avani";
userInput2 = 2;
userInput2 = "Abhay";
var userName;
// userName = userInput1; //not allowed by typescript will throw error as type unknown
userName = userInput2; //allowed by typescript as type any
if (typeof userInput1 === "string") {
    userName = userInput1;
}
