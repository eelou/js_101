/*Write a one-line expression to count the number of lower-case t characters in each of the following strings:*/
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let count = 0;
statement1.split("").forEach((x) => x === "t" ? count += 1 : count += 0);
console.log(count);

console.log(statement1.split("").filter((w) => w === "t").length);
console.log(statement2.split("").filter((w) => w === "t").length);