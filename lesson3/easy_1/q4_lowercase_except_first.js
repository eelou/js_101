/*
Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)
*/
let munstersDescription = "the Munsters are CREEPY and Spooky.";
let fixedString = munstersDescription.charAt(0).toUpperCase() + 
                    munstersDescription.substring(1).toLowerCase();
console.log(fixedString);