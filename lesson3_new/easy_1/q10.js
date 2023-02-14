/*Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

let newArray = advice.split(" ");
console.log(newArray.slice(0, newArray.indexOf("house")).join(" "));