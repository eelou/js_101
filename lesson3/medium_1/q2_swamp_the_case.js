let munstersDescription = "The Munsters are creepy and spooky.";
let munstersDescription1 = munstersDescription.split("");

const newMessage = [];
munstersDescription1.forEach((element) => {
    if (element === element.toLowerCase()) {
      newMessage.push(element.toUpperCase());
    } else {
      newMessage.push(element.toLowerCase());
    }
  });
  
console.log(newMessage.join(""));

//answer from LaunchSchool

console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(""));