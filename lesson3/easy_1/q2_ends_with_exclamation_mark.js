/* Question 2
How can you determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false */

let str1 = "Come over here!"; 
let str2 = "What's up, Doc?";

function checkEndExclamationMark(strings) {
  if (strings[strings.length - 1] === '!') {
    return true;
  } else {
    return false;
  }
}

console.log(checkEndExclamationMark(str1));
console.log(checkEndExclamationMark(str2));

//solution
console.log(str1.endsWith("!")); // true
console.log(str2.endsWith("!")); // false