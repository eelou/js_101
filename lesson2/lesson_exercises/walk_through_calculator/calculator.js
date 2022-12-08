// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Peform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log('What\'s the first number?');
let num1 = readline.question();

console.log('What\'s the second number?');
let num2 = readline.question();

console.log('What operation would you like to perform?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide');
let operation = readline.question();

let result;

if ( operation === '1' ) {
  result = Number(num1) + Number(num2);
}else if ( operation === '2' ) {
  result = Number(num1) - Number(num2);
}else if ( operation === '3' ) {
  result = Number(num1) * Number(num2);
}else if ( operation === '4' ) {
  result = Number(num1) / Number(num2);
}else {
  console.log('Please choose the correct option.');
}

console.log(`The result is: ${result}`);