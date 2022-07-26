function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;

  if (showResult) {
    console.log(`${phrase} ${result}`);
  }

  return n1 + n2;
}

const number1 = 56;
const number2 = 45.7;
const printResult = true;
const printPhrase = "Result is: ";

const result = add(number1, number2, printResult, printPhrase);
