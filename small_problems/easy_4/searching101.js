/*
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.
*/
/*
Understanding the [P]roblem
===========================
Input:
- number six times

Output:
- string with one number and one array 

Rules/Goals:
- Determine whether the last input number appears in first 5 input number
- print if the number appear or not 

[E]xamples and Test Cases
=========================
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

Mental Model
============
- 25 -> [25] -> 15 -> [25, 15] -> 20 -> [25, 15, 20] -> 17 -> [25, 15, 20, 17]
  -> 23 -> [25, 15, 20, 17, 23] -> 17 -> true -> "The number 17 appears in 25,15,20,17,23."
  
[D]ata Structure
================
- there will one array to store the numbers input by the user

[A]lgorithm
===========
- declare a variable 'readline' and initialize it to let the user input
- declare a variable 'numbersArray' and initialize it to empty array
- declare a variable 'numbers'
- iterate 5 times (i)
  - if first iteration
    - print out 'Enter the 'i'st number: '
    - reassign 'numbers' to user input
    - store in the 'numbersArray'
    - increment the iteration
  - if second iteration
    - print out 'Enter the 'i'nd number: '
    - reassign 'numbers' to user input
    - store in the 'numbersArray'
    - increment the iteration
  - if third iteraton
    - print out 'Enter the 'i'rd number: '
    - reassign 'numbers' to user input
    - store in the 'numbersArray'
    - increment the iteration
  - rest of the 2 iterations
    - print out 'Enter the 'i'th number: '
    - reassign 'numbers' to user input
    - store in the 'numbersArray'
    - increment the iteration
 - print out 'Enter the last number: '
 - declare the variable 'lastNumber' and initialized to user input
 - check if 'lastNumber' is included in 'numbersArray'
  - if it is included in the array
    - print out 'The number 'lastNumber' appears in 'numbersArray''
  - if it isn't included in the array
    - print out 'The number 'lastNumber' does not appear in 'numbersArray''
  
 
[C]ode with Intent
==================
*/
const readline = require('readline-sync');
let numbersArray = [];
let number;

for (let i = 1; i <= 5; i += 1) {
  if (i === 1) {
    console.log(`Enter the ${i}st number: `);
    number = readline.question();
    numbersArray.push(Number(number));
  } else if (i === 2) {
    console.log(`Enter the ${i}nd number: `);
    number = readline.question();
    numbersArray.push(Number(number));
  } else if (i === 3) {
    console.log(`Enter the ${i}rd number: `);
    number = readline.question();
    numbersArray.push(Number(number));
  } else {
    console.log(`Enter the ${i}th number: `);
    number = readline.question();
    numbersArray.push(Number(number));
  }
}

console.log("Enter the last number: ");
let lastNumber = Number(readline.question());

if (numbersArray.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbersArray.join(",")}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbersArray.join(",")}.`);
}