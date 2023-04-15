function stringToSignedInteger (str) {
  let arr = str.split("");
  let integer = 0;
  
  if (arr[0] === '-') {
    arr.shift();
    integer = stringToInteger(arr) * (-1);
  } else if (arr[0] === "+") {
    arr.shift();
    integer = stringToInteger(arr);
  } else {
    integer = stringToInteger(arr);
  }
  return integer;
}

function stringToInteger (arr) {
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

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true