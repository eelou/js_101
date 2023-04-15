function integerToString (num) {
  let arr = [];
  
  do {
    arr.unshift(num % 10);
    num = Math.floor(num / 10);
  } while (num > 0)
  
  console.log (arr.join(""));
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"