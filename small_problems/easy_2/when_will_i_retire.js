/*Build a program that logs when the user will retire and how many more years the user has to work until retirement.*/
const readline = require('readline-sync');

let age = readline.question(`What is your age? `);
let retireAge = readline.question(`At what age would you like to retire? `);
let currentYear = new Date().getFullYear();

function workYearsToGo (age, retireAge) {
  return Number(retireAge) - Number(age);
}

function retireYear (age, retireAge) {
  return workYearsToGo(age, retireAge) + currentYear;
}

console.log(`It's ${currentYear}. You will retire in ${retireYear(age, retireAge)}.`);
console.log(`You have only ${workYearsToGo(age, retireAge)} years of work to go!`);