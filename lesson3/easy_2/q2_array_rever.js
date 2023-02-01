/*let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]*/

let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

let numbers1 = [1, 2, 3, 4, 5];
let sortedArray = [...numbers1].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]