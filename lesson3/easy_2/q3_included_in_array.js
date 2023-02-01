/* Given a number and an array, determine whether the number is included in the array. */
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

let numberCheck1 = numbers.includes(number1);
let numberCheck2 = numbers.includes(number2);

console.log(numberCheck1);
console.log(numberCheck2);