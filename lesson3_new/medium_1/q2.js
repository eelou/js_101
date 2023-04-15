/*
Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";
Return a new string that swaps the case of all of the letters:
`tHE mUNSTERS ARE CREEPY AND SPOOKY.`
*/
/*
Understanding the [P]roblem
===========================
Input :
  - 1 string
Output :
  - 1 string
Rules/Goals :
  - change the case of letters of the string
[E]xamples and Test Cases
=========================
Mental Model
============
"xYz" => "XYz" => "Xyz" => "XyZ"
[D]ata Structure
================
- no array or object needed
[A]lgorithm
===========
- declare a variable `munstersDescription` and initialized it to "The Munsters are creepy and spooky."
- declare a variable `newString` and initialized it to empty string
- Iterate each character of the string
  - if its upper case
    - change the letter to lowercase
    - add it to newString
    - otherwise
      - change the letter to uppercase
      - add it to newString
- print out newString
[C]ode with Intent
==================
*/
let munstersDesription = "The Munsters are creepy and spooky.";
let newString = "";

for (let i = 0; i < munstersDesription.length; i += 1) {
  if (munstersDesription[i] === munstersDesription[i].toUpperCase()) {
    newString += munstersDesription[i].toLowerCase();
  } else {
    newString += munstersDesription[i].toUpperCase();
  }
}
console.log(newString);

let munstersDesription1 = "The Munsters are creepy and spooky.";
console.log(munstersDesription1.split("").map((x) => {
  if (x === x.toUpperCase()) {
    return x.toLowerCase();
  } else {
    return x.toUpperCase();
  }
}).join(""));
