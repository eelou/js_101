/*
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.
*/

/*
- declare a variable 'newArray' and initialized to empty array
- iterate through the length of the parameter array
  - push the product of array1 element and array2 element to 'newArray'
- return 'newArray'
*/

function multiplyList (arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i += 1) {
    newArray.push(arr1[i] * arr2[i]);
  }
  console.log(newArray);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]