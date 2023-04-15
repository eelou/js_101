/*
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.
*/
/*
- declare a variable 'arr' and initialized it to split words of the string by space
- declare a variable 'newArr' and initialized it to empty array
- check if 'arr' length is equal 1
  - if yes
    - reassign newArr to arr
  - if no
    - iterate through array
      - for each element 
        - declare a variable 'firstLetter' and initialize to first letter
        - declare a variable 'lastLetter' and initialize to last letter
        - concant 'firstLetter', middle part and 'lastLetter'
        - add to new array
- return new array
*/

function swap (str) {
  let arr = str.split(" ");
  
  let newArr = [];
  
  if (arr.length === 1) {
    newArr = arr;
  } else {
      newArr = arr.map((x) => {
      let firstLetter = x[0];
      let lastLetter = x[x.length - 1];
      x = lastLetter + x.slice(1,x.length-1) + firstLetter;
      return x;
    });
  }
  console.log(newArr.join(" "));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

/*
function swap(string) {
  return string.split(' ').map(word => {
    if (word.length === 1) return word;

    return word.slice(-1) + word.slice(1, -1) + word[0];
  }).join(' ');
}
*/