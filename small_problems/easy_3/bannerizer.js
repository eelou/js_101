/*Write a function that will take a short line of text, and write it to the console log within a box.*/

function logInBox (str1) {
  console.log(`+${"-".repeat(str1.length + 2)}+`);
  console.log(`|${" ".repeat(str1.length + 2)}|`);
  console.log(`| ${str1} |`);
  console.log(`|${" ".repeat(str1.length + 2)}|`);
  console.log(`+${"-".repeat(str1.length + 2)}+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox("");