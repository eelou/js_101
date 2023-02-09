/*Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet*/

const readline = require('readline-sync');

console.log(`Enter the length of the room in meters:`);
let length = readline.question();

console.log(`Enter the width of the room in meters:`);
let width = readline.question();

let area = (Number(length) * Number(width)).toFixed(2);
let areaInFeet = (area * 10.7639).toFixed(2);

console.log(`The area of the room is ${area} square meters (${areaInFeet} square feet).`);