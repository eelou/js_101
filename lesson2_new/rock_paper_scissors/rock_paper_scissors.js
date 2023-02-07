const readline = require('readline-sync');
//Declaring for valid choices for the game
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

//function to display messages
function prompt(message) {
  console.log(`${message}`);
}

function getUserInput() {
  let userInput = readline.question('=> ');
  return userInput;
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

while (true) {

  //asking the user for their choices
  prompt(`Choose One: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  //checking if the user input the valid choice
  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice`);
    choice = readline.question();
  }
  //calculating the random number for computer choice
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  //selecting for the computer choice
  let computerChoice = VALID_CHOICES[randomIndex];
  //displaying the choices
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  //determining the winner of the game
  displayWinner(choice,computerChoice);
  //asking if the user want to do another calculation
  prompt(`Would you like to perform another calculation? (y/n) `);
  let answer = getUserInput();
  if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    break;
  } else if (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'y'
            && answer.toLowerCase() !== 'no' && answer.toLowerCase() !== 'n') {
    prompt(`Please enter 'yes' or 'no'.`);
    answer = getUserInput();
  }
}