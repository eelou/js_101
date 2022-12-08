// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Peform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt (message) {
  console.log(`=> ${message}`);
}

function invalidNumber (num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to Calculator!');

prompt('What\'s the first number?');
let num1 = readline.question();

while (invalidNumber(num1)) {
  prompt(`Hm... that doesn't look like a valid number.`);
  num1 = readline.question();
}

prompt('What\'s the second number?');
let num2 = readline.question();

while (invalidNumber(num1)) {
  prompt(`Hm... that doesn't look like a valid number.`);
  num2 = readline.question();
}

prompt('What operation would you like to perform?\n=> 1) Add\n=> 2) Subtract\n=> 3) Multiply\n=> 4) Divide');
let operation = readline.question();

//while (!['1', '2', '3', '4'].includes(operation))
while (operation !== '1' && operation !== '2' && operation !== '3' && operation !== '4') {
  prompt(`Must choose 1, 2, 3, or 4`);
  operation = readline.question();
}

let result;

switch (operation) {
  case '1':
    result = Number(num1) + Number(num2);
    break;
  case '2':
    result = Number(num1) - Number(num2);
    break;
  case '3':
    result = Number(num1) * Number(num2);
    break;
  case '4':
    result = Number(num1) / Number(num2);
    break;
}

prompt(`The result is: ${result}`);