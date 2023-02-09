/*Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.*/

const readline = require('readline-sync');
const START_NUMBER = 1;
let total;

let integer = parseInt(readline.question(`Please enter an integer greater than 0: `),10);
let computation = readline.question(`enter "s" to compute the sum, or "p" to compute the product. `);

if (computation === 's') {
  total = 0;
  for (let i = START_NUMBER; i <= integer; i += 1 ) {
    total += i;
  }
  console.log(`The sum of the integers between ${START_NUMBER} and ${integer} is ${total}.`);
} else if (computation === 'p') {
  total = 1;
  for (let i = START_NUMBER; i <= integer; i += 1) {
    total *= i;
  }
  console.log(`The product of the integers between ${START_NUMBER} and ${integer} is ${total}.`);
}