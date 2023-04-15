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
- declare a variable 'obj' and initialized to values pair of alphabet as keys and corresponding alphabet positions as values
- declare a variable 'newArray' and initialized to empty array
- iterate through parameter array 
  - for each element
    - declare a variable 'string' and initialized to lower case of the element
    - declare a variable 'count' and initialized to 0
    - iterate through the length of 'string'
      - check if the index correspond key-value pair from 'obj'
        - if yes update the count by 1
    - add the count value to 'newArray'
- return 'newArray'
[C]ode with Intent
==================
*/

function solve (arr) {
  let obj = { 
    'a' : 1,
    'b' : 2,
    'c' : 3,
    'd' : 4,
    'e' : 5,
    'f' : 6,
    'g' : 7,
    'h' : 8,
    'i' : 9,
    'j' : 10,
    'k' : 11,
    'l' : 12,
    'm' : 13,
    'n' : 14,
    'o' : 15,
    'p' : 16,
    'q' : 17,
    'r' : 18,
    's' : 19,
    't' : 20,
    'u' : 21,
    'v' : 22,
    'w' : 23,
    'x' : 24,
    'y' : 25,
    'z' : 26,
  }
  
  let newArray = [];
  
  for (let i = 0; i < arr.length; i += 1) {
    
    let string = arr[i].toLowerCase();
    let count = 0;
    
    for (let j = 0; j < string.length; j += 1) {
      if ((j + 1) === obj[string[j]]) {
        count += 1;
      }
    }
    newArray.push(count);
  }
  return newArray;
}

console.log(solve(["abode","ABc","xyzD"]));
console.log(solve(["abide","ABc","xyz"]));
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]));
console.log(solve(["encode","abc","xyzD","ABmD"]));
