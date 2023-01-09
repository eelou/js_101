const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors','spock','lizard'];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) || 
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard'))) {
    prompt('You win!');
  } else if ((choice === 'rock' && (computerChoice === 'paper' || computerChoice=== 'spock')) ||
             (choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'liazard')) ||
             (choice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock'))) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function prompt (message) {
  console.log(`=> ${message}`);
}

function validChoice (checkChoice) {
  if (checkChoice === 'r' || checkChoice === 'rock') {
    return checkChoice = 'rock';
  }else if (checkChoice === 'p' || checkChoice === 'paper') {
    return checkChoice = 'paper';
  }else if (checkChoice === 'l' || checkChoice === 'lizard') {
    return checkChoice = 'lizard';
  }else if (checkChoice === 's') {
    prompt ('Do you mean scissors or spock? (sc or sp)');
    let checkChoice = readline.question();
    
    while (checkChoice !== 'sc' && checkChoice !== 'sp' && checkChoice !== 'scissors' && checkChoice !== 'spock') {
      prompt("That's not a valid choice!!!");
      checkChoice = readline.question();
    }
      if (checkChoice === 'sc' || checkChoice === 'scissors') {
        console.log(`1`);
        return checkChoice = 'scissors';
      }else if (checkChoice === 'sp' || checkChoice === 'spock') {
        console.log(`2`);
        return checkChoice = 'spock';
      }
  }else if (checkChoice === 'sc' || checkChoice === 'scissors') {
    return checkChoice = 'scissors';
  }else if (checkChoice === 'sp' || checkChoice === 'spock') {
    return checkChoice = 'spock';
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
