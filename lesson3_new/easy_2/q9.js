/*Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?*/

let title = "Flintstone Family Members";
console.log("1234567890123456789012345678901234567890");
let space = Math.floor((40 - title.length) / 2) + title.length;

console.log(title.padStart(space, " "));
console.log(title.length);