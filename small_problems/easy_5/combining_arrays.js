/*Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.*/
/*
- declare a variable 'newArray' and initialized it to empty array
- iterate through all the elements of first array
  - check if the element is in 'newArray' if not add to 'newArray'
- iterate through all the elements of second array
  - check if the element is in 'newArray' if not add to 'newArray'
*/
let newArray = [];

function union (arr1, arr2) {
  checkArray(arr1);
  checkArray(arr2);
  console.log(newArray);
}

function checkArray (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!(newArray.includes(arr[i]))) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]