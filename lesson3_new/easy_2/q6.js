let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

//console.log([].concat(...flintstones));

let newFlintstones = [];
flintstones.forEach((word) => {
 newFlintstones = newFlintstones.concat(word);
});
console.log(newFlintstones);