/*
Problem statement:

Given two strings, return the characters that are not common in the two strings.
console.log(uniqueStringCharacters("xyab","xzca") === "ybzc");
console.log(uniqueStringCharacters("a","z") === "az");
console.log(uniqueStringCharacters("abcd","de") === "abce");
console.log(uniqueStringCharacters("abc","abba") === "c");
console.log(uniqueStringCharacters("xyz","zxy") === "");

*/
/*
Understanding the [P]roblem
===========================
- Reading the problem statement to understand the problem.
- We classify the problem into 3 "categories":

Input:
- two strings

Output:
- one string

Rules/Goals:
- every letter in the output string should be unique
- output string will have unique characters from both strings
- unique: doesn't appear in the OTHER string


[E]xamples and Test Cases
=========================
1. Re-affirm our understanding of the problem step, by looking at the examples and test cases.

2. Check the examples and test cases for any implied requirements that aren't explicitly stated in the problem statement.



-- Intermission: Mental Model --
WHAT we have to do to get from input to output:

"xyab","xzca" -> "" -> "y" -> "yb" -> "ybz" -> "ybzc"

"xyab","xzca" -> [] -> ["y"] -> ["y", "b", "z", "c"] -> "ybzc"

front door -> car -> highway -> parking lot -> market


[D]ata Structure
================
- Do I need an array or an object to hold the data for my solution?


[A]lgorithm
===========
HOW we get from input to output
- It needs specific enough so that we can implement it
- But you can't name any specific methods or syntax
    X Use the forEach method on the array
    O Iterate through the array
    
    - Code agnostic

front door -> car
get out of my chair and put clothes on
take the keys and shut the door behind you
lock the door

"xyab","xzca" -> ""

Grace
-----

- declare a variable `result` and assign it to an empty string
- iterate through the first string
  - if the current character is not in the second string
    - add the current character to `result`
- iterate through the second string
  - if the current character is not in the first string
    - add the current character to `result`
- return `result`

(check a character is in a string)
- iterate through the string
  - if the current character is equal to the input character
    - return true
- at end of iteration (no matching character is found) return false



Chase
-----
"xyab","xzca" -> "" -> "y" -> "yb" -> "ybz" -> "ybzc"
- declare a variable that is an empty string
- iterate through first string
  - identify characters that are shared in common with second string
  - move characters from first string that are not shared in common to empty result string
- iterate through second string skipping letters shared in common w/ first string
  - move characters not shared in common from second string to end of result string
  


Ee
--
"xyab","xzca" -> "" -> "y" -> "yb" -> "ybz" -> "ybzc"
- declare a new variable 'newString' and initialize it as empty string
- iterate through the first string for every letter
  - check if it isn't included in the second string 
    - if it isn't included in the second string, 
    - check if it is included in 'newString'
        - if it isn't included add the letter to the 'newString'
- iterate through the second thring for every letter
  - check if it isn't included in the first string
    - if it isn't included in the first string, 
    - check if it is included in 'newString' 
        - if it isn't included add the letter to the 'newString'
- return 'newString'
*/
function uniqueStringCharacters(str1, str2) {
  let newString = "";
  for (let i = 0; i < str1.length; i += 1) {
    if (!(str2.includes(str1[i]))) {
      if (!(newString.includes(str1[i]))) {
        newString += str1[i];
      }
    }
  }
  for (let j = 0; j < str2.length; j += 1) {
    if (!(str1.includes(str2[j]))) {
      if (!(newString.includes(str2[j]))) {
        newString += str2[j];
      }
    }
  }
  return newString;
}

console.log(uniqueStringCharacters("xyab","xzca") === "ybzc");
console.log(uniqueStringCharacters("a","z") === "az");
console.log(uniqueStringCharacters("abcd","de") === "abce");
console.log(uniqueStringCharacters("abc","abba") === "c");
console.log(uniqueStringCharacters("xyz","zxy") === "");

/*
[C]ode with Intent
==================
- Translate your algorithm directly into code, there shouldn't be any new ideas
- If something doesn't work, then STOP CODING, and go back to your algorithm
- TEST YOUR CODE FREQUENTLY!!
*/

/*
Understanding the [P]roblem
===========================
[E]xamples and Test Cases
=========================
Mental Model
============
[D]ata Structure
================
[A]lgorithm
===========
[C]ode with Intent
==================
*/