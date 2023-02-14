/*In the previous problem, our first answer added 'Dino' to the array like this:*/
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
let itemsArrray = ["Dino", "Hoppy"];
itemsArrray.forEach((element) => {
  flintstones.push(element);
});

console.log(flintstones);

/*let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");   // we can pass multiple arguments to push
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino', 'Hoppy' ]*/