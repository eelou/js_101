/*
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.
*/
/*
- declare a function 'isPalindrome' with one parameter named 'str'
  - declare a variable 'firstHalf' and initialized to empty array.
  - declare a variable 'secondHalf' and initialized to empty array.
  - check if the 'str' length is divisible by 2
    - if it is divisible by 2
      - iterate through the string for first half of the string length
        - add each element to the 'firstHalf'
      - iterate through the second half of the string 
        - add each element to the 'secondHalf'
    - if it isn't divisible by 2
      - iterate through the string for first half until a letter befor the mid 
        - add each element to the 'firstHalf'
      - iterate through the second half of the string starting from a letter after the mid
        - add each element to the 'secondHalf'
  - reassign the 'secondHalf' to the result of reverse order of 'secondHalf'
  - check if the 'firstHalf' is exactly the same as 'secondHalf'
    - if exactly the same
      - return true
    - if not
      - return false
*/

function isPalindrome (str) {
  let firstHalf = [];
  let secondHalf = [];
  
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length / 2; i += 1) {
      firstHalf.push(str[i]);
    }
    for (let i = str.length / 2; i < str.length; i += 1) {
      secondHalf.push(str[i]);
    }
  } else {
    for (let i = 0; i < (str.length / 2) - 1; i += 1) {
      firstHalf.push(str[i]);
    }
    for (let i = Math.floor(str.length / 2) + 1; i < str.length; i += 1) {
      secondHalf.push(str[i]);
    }
  }
  
  secondHalf =  secondHalf.reverse();
  if (firstHalf.join("") === secondHalf.join("")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

function isPalindrome1(string) {
  return string === string.split('').reverse().join('');
}