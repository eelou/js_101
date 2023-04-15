/*Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.*/
/*
- declare a variable 'obj' and initialized it to empty object
- declare a variable 'arr' and initialized it to split words
- check if the str length is equal to 0
  - if not
    - iterate through 'arr' 
      - declare a variable 'stringLength' and initialized it to curret element length
      - check if 'obj' has property named 'stringLength'
        - if not
          - add key value pair of 'stringLength' as key and 1 as value
        - if 'obj' has property named 'stringLength'
          - declare a variable 'count' and initialized it to the value of property named 'stringLength' of 'obj'
          - set the value of 'stringLength' property to 'counter' + 1
  print 'obj'
*/

function wordSizes (str) {
  let obj = {};
  let arr = str.split(" ");
  
  if (str.length !== 0) {
    for (let i = 0; i < arr.length; i += 1) {
      let stringLength = arr[i].length;
      if (!obj.hasOwnProperty(stringLength)) {
        obj[stringLength] = 1;
      } else {
        let counter = obj[stringLength];
        obj[stringLength] = counter + 1;
      }
    }
  }
  console.log(obj);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}