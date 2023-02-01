let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newflintStones = [];
newflintStones = newflintStones.concat(...flintstones);
console.log(newflintStones);