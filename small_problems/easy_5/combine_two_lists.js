/*
Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.
*/
/*
- declare a variable 'newArray' and initialize to empty array
- for the length of parameter array 
  - push the element of array1 into 'newArray'
  - push the element of array2 into 'newArray'
- print 'newArray'
*/

function interleave (arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i += 1) {
    newArray.push(arr1[i]);
    newArray.push(arr2[i]);
  }
  console.log(newArray);
}
 
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]