/*Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.*/

function crunch (str1) {
  let str2 = "";
  for (let i = 0; i < str1.length; i += 1) {
    if (str1[i] !== str1[i + 1]) {
      str2 += str1[i];
    }
  }
  console.log(str2);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');      

/*
function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}
*/