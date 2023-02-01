let title = "Flintstone Family Members";
const tableWidth = 40;

let spacesNeeded = Math.floor(( 40 - title.length) / 2);

console.log(title.padStart(spacesNeeded + title.length," "));