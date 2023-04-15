/*
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.
*/
/*
- declare a variable 'newNum' and initialize to 0
- iterate through the length of parameter array
  - add current element to 'newNum'
- return 'newArray'
*/

function runningTotal (arr) {
  let newNum = 0;
  console.log(arr.map((x) => newNum += x));
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []