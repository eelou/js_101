/*
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.
*/
/*

*/

function wordSizes (str) {
  let obj = {};
  let arr = str.split(" ");
  
  if (str.length !== 0) {
    for (let i = 0; i < arr.length; i += 1) {
      let stringLength = arr[i].replace(/[^a-z0-9A-Z]/g,"").length;
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

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}