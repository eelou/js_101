/*
Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.
*/
function digitList (num) {
  return String(num).split("").map(x => Number(x));
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));