/*Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)*/

function findFibonacciIndexByLength (length) {
  let firstNumber = 1;
  let secondNumber = 1;
  let fibaonacciNumber = 0;
  let count = 2;
  let fibaonacci = "1 1 ";
  
  while (String(fibaonacciNumber).length < length) {
    fibaonacciNumber = firstNumber + secondNumber;
    count += 1;
    fibaonacci += `${fibaonacciNumber} `;
    firstNumber = secondNumber;
    secondNumber = fibaonacciNumber;
  }
  return `${count} & ${fibaonacci}.`
}

console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(2));    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3));
console.log(findFibonacciIndexByLength(10));