/*
Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.
*/
/*
- change the integer to string 
- check whether the string is equal split reverse join of the string
*/

function isPalindromicNumber (num) {
  return console.log(num === Number(String(num).split("").reverse().join("")));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true