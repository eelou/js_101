/*Determine whether the name Dino appears in the strings below -- check each string separately): */

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
let word = 'Dino';

console.log(str1.includes(word));
console.log(str2.includes(word));

str1.match('Dino') !== null; // false
str2.match('Dino') !== null; // true

str1.indexOf('Dino') > -1; // false
str2.indexOf('Dino') > -1; // true