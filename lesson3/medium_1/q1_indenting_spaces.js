let flintstones = "The Flintstones Rock!";

for (let spacing = 0; spacing < 10; spacing += 1) {
  console.log(flintstones.padStart(spacing + flintstones.length, " "));
}

//answer from launchschool
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}