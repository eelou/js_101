const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors','spock','lizard'];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) || 
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
      (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt('Computer wins!');
  } else {
    prompt("Computer wins!");
  }
}

function prompt (message) {
  console.log(`=> ${message}`);
}

function validChoice (checkChoice) {
  if (checkChoice === 'r' || checkChoice === 'rock') {
    checkChoice = 'rock';
    return checkChoice;
  } else if (checkChoice === 'p' || checkChoice === 'paper') {
    checkChoice = 'paper';
    return checkChoice;
  } else if (checkChoice === 'l' || checkChoice === 'lizard') {
    checkChoice = 'lizard';
    return checkChoice;
  } else if (checkChoice === 's') {
    prompt ('Do you mean scissors or spock? (sc or sp)');
    let checkChoice = readline.question();
    
    while (checkChoice !== 'sc' && checkChoice !== 'sp' && checkChoice !== 'scissors' && checkChoice !== 'spock') {
      prompt("That's not a valid choice!!!");
      checkChoice = readline.question();
    }
    if (checkChoice === 'sc' || checkChoice === 'scissors') {
      console.log(`1`);
      checkChoice = 'scissors';
      return checkChoice;
    } else if (checkChoice === 'sp' || checkChoice === 'spock') {
      console.log(`2`);
      checkChoice = 'spock';
      return checkChoice;
    }
  } else if (checkChoice === 'sc' || checkChoice === 'scissors') {
    checkChoice = 'scissors';
    return checkChoice;
  } else if (checkChoice === 'sp' || checkChoice === 'spock') {
    checkChoice = 'spock';
    return checkChoice;
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(validChoice(choice))) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  
  displayWinner(validChoice(choice),computerChoice);
  
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
