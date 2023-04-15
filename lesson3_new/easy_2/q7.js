/*Consider the following object:*/
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let newFlintstones = (Object.entries(flintstones));
let newArray = [];
newFlintstones.forEach((element) => {
  if (element.includes("Barney")) {
    newArray = newArray.concat(element);
  }
});

console.log(newArray);
console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").pop());