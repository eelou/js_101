/*Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.*/

const readline = require('readline-sync');

function addition (num1, num2) {
  return `==> ${num1} + ${num2} = ${Number(num1) + Number(num2)}`;
}

function subtraction (num1, num2) {
  return `==> ${num1} - ${num2} = ${num1 - num2}`;
}

function product (num1, num2) {
  return `==> ${num1} * ${num2} = ${num1 * num2}`;
}

function quotient (num1, num2) {
  return `==> ${num1} / ${num2} = ${parseInt(num1 / num2)}`;
}

function remainder (num1, num2) {
  return `==> ${num1} % ${num2} = ${num1 % num2}`;
}

function power (num1, num2) {
  return `==> ${num1} ** ${num2} = ${num1 ** num2}`;
}

console.log("==> Enter the first number: ");
let num1 = readline.question();

console.log("==> Enter the second number: ");
let num2 = readline.question();

console.log(addition(num1, num2));
console.log(subtraction(num1, num2));
console.log(product(num1, num2));
console.log(quotient(num1, num2));
console.log(remainder(num1, num2));
console.log(power(num1, num2));