/* Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];
*/
/*
Understanding the [P]roblem
===========================
Input :
- 1 array
Output :
- 1 empty array
Rules/Goals :
- use 3 different ways to remove all elements
[E]xamples and Test Cases
=========================
- 
Mental Model
============
- [1,2,3,4,5] -> [1,2,3,4] -> [1,2,3] -> [1,2] -> [1] -> []
[D]ata Structure
================
- array is needed
[A]lgorithm
===========
1) - declare a variable "arrayLength" and initialized it to the length of array
   - Iterate through the length of the array using "arrayLength"
    - remove the last element of the array
   - return final array
2) - declare a variable "arrayLength" and initialized it to the length of array
   - Iterate through the length of the array using "arrayLength"
    - remove the first element of the array
   - return final array
3) - remove all elements from the array
   - return final array
[C]ode with Intent
==================
*/
let numbers = [1, 2, 3, 4];
let numbers1 = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];

function removeLast (array) {
  let arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    array.pop();
  }
  return array;
}

function removeFirst (array) {
  let arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    array.shift();
  }
  return array;
}

function removeAll (array) {
  array.splice(0,array.length);
  return array;
}

console.log(removeLast(numbers));
console.log(removeFirst(numbers1));
console.log(removeAll(numbers2));

/*
numbers.length = 0;
*/