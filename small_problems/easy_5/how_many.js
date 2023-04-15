/*
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").
*/

/*
- declare a variable 'obj' and initialized to empty object
- iteratre through the length of parameter array
  - if 'obj' has the property named the element of the array
    - update the count and set it to the value of that property
  - if not
    - set the element as property and set the value to 1
- declare a variable 'entry' and initialized to 'obj' keys-values pair
- iterate through the length of 'entry'
  - print the element [0] => element [1]

*/

function countOccurrences (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (obj.hasOwnProperty(arr[i])) {
      let count = obj[arr[i]] + 1;
      obj[arr[i]] = count;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let entry = Object.entries(obj);
  for (let i = 0; i < entry.length; i += 1) {
    console.log(`${entry[i][0]} => ${entry[i][1]}`);
  }
  
  /*for (const [key,value] of Object.entries(obj)) {
    console.log(`${key} => ${value}`);
  }*/
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);