// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Peform the operation on the two numbers.
// Print the result to the terminal.

const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
const LANGUAGE = 'en';

function prompt (key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}

function invalidNumber (num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('welcome');

while (true) {
  prompt('firstNumber');
  let num1 = readline.question();
  
  while (invalidNumber(num1)) {
    prompt(`errorNumber`);
    num1 = readline.question();
  }
  
  prompt('secondNumber');
  let num2 = readline.question();
  
  while (invalidNumber(num2)) {
    prompt(`errorNumber`);
    num2 = readline.question();
  }
  
  prompt('performOperation');
  let operation = readline.question();
  
  //while (!['1', '2', '3', '4'].includes(operation))
  while (operation !== '1' && operation !== '2' && operation !== '3' && operation !== '4') {
    prompt(`wrongChoice`);
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
  
  console.log(`The result is: ${result}`);
  
  prompt(`onemore`);
  let answer = readline.question();
  
  if (answer[0].toLowerCase() !== 'y') {
    break;
  }
}