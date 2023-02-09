/*Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.*/

const readline = require('readline-sync');

console.log(`What is the bill?`);
let billAmount = readline.question();

console.log(`What is the tip percentage?`);
let tipPercentage = readline.question();

let tip = (Number(tipPercentage) / 100) * Number(billAmount);
let total = Number(billAmount) + tip;

console.log(`The tip is ${tip.toFixed(2)}.`);
console.log(`The total is ${total.toFixed(2)}`);