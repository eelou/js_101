function signedIntegerToString (num){
  let arr = [];
  if (num < 0) {
    arr.unshift(Math.abs(num));
    arr.unshift("-");
  } else if (num > 0) {
    arr.unshift(Math.abs(num));
    arr.unshift("+");
  } else {
    arr.unshift(Math.abs(num));
  }
  return arr.join("");
}


function integerToString (num) {
  let arr = [];
  
  do {
    arr.unshift(num % 10);
    num = Math.floor(num / 10);
  } while (num > 0)
  
  return (arr.join(""));
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");