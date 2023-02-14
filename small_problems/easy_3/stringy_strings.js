/*Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.*/

function stringy (num) {
  let str = "";
  for (let i = 1; i <= Number(num); i += 2) {
    str += "10";
  }
  if (str.length === Number(num)) {
    console.log(str);
  } else {
    console.log(str.slice(0,str.length - 1));
  }
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);  