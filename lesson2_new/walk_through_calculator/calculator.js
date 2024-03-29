// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("Welcome to Calculator!");

while (true) {
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
  }

  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }
  
  prompt("What operation would you like to perform?\n=> 1) Add\n=> 2) Subtract\n=> 3) Multiply\n=> 4) Divide");
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("Must choose 1, 2, 3, or 4");
    operation = readline.question();
  }
  
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  
  prompt(`The result is: ${output}.`);
  
  prompt(`Do you want to do more calculation?`);
  let answer = readline.question();
  
  if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    break;
  }else if (answer.toLowerCase() !== 'yes' || answer.toLowerCase() !== 'y'
            || answer.toLowerCase() !== 'no' || answer.toLowerCase() !== 'n') {
    prompt(`Please enter 'yes' or 'no'.`);
    answer = readline.question();
  }
}