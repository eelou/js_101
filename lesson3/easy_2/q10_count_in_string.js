let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let newarray1 = [];
let newarray2 = [];

for ( let i = 0; i < statement1.length; i += 1)
  if (statement1[i] === "t") {
    console.log(i);
    newarray1.push(i);
}

console.log(newarray1.length);

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;