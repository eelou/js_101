/*
Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.
*/
/*
- declare a variable 'arr' and initialize to split string with ""
- declare a variable 'integer' and initialize to 0
- iterate through the length of 'arr'
  - for each element
    - write a switch case
      - '0' return 0 
      - '1' return 1 * 10 ^((arr length - 1) - element index)
      ...
      - '9' return 9 * (arr length - element index)
    - add to integer
*/

function stringToInteger (str) {
  let arr = str.split("");
  let integer = 0;
  
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case "0" : 
        integer += 0;
        break;
      case "1" :
        integer += 1 * 10 ** ((arr.length - 1) - i);
        break;
      case "2" :
        integer += 2 * 10 ** ((arr.length - 1) - i);
        break;
      case "3" :
        integer += 3 * 10 ** ((arr.length - 1) - i);
        break;
      case "4" :
        integer += 4 * 10 ** ((arr.length - 1) - i);
        break;
      case "5" :
        integer += 5 * 10 ** ((arr.length - 1) - i);
        break;
      case "6" :
        integer += 6 * 10 ** ((arr.length - 1) - i);
        break;
      case "7" :
        integer += 7 * 10 ** ((arr.length - 1) - i);
        break;
      case "8" :
        integer += 8 * 10 ** ((arr.length - 1) - i);
        break;
      case "9" :
        integer += 9 * 10 ** ((arr.length - 1) - i);
        break;
      default :
        integer += arr[i];
        break;
    }
  }
  return integer;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true