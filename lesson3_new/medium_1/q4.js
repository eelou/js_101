/*Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

Is there a difference between these implementations, other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}*/

let nanArray = [NaN];
console.log(Number.isNaN(nanArray[0]));

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  let a = Object.assign({},demoObject);
  Object.values(a).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
  return a;
}

console.log(messWithDemographics(munsters));
console.log(munsters);

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar());

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
  return one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

console.log(messWithVars(one, two, three));

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello','undefined');

for (let i = 0; i < 5; i += 1) {
  console.log(i += 1);
}


let a = [1,2,3];
let b = a;
a[0] = 5;

console.log(a);
console.log(b);

let myVar = "tttt";

function myFunc(myVar) {
  myVar[0] = 2;
}

myFunc(myVar);
console.log(myVar); // [2].

let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWord = 'Hi';

console.log(myWords);
console.log(myWord);