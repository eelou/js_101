const readline = require('readline-sync');
const GAME_RULE = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard:   ['paper', 'spock'],
  spock:    ['rock', 'scissors'],
};
const MAX_SCORE = 3;
let playerScore = 0;
let computerScore = 0;

function prompt (message) {
  console.log(`=> ${message}`);
}

function determineRoundWinner (choice,computerchoice) {
  return GAME_RULE[choice].includes(computerchoice);
}

function displayWinner (choice, computerChoice) {
  console.log(`The player picks ${choice} and the computer picks ${computerChoice}.`);
  if (determineRoundWinner(choice, computerChoice)) {
    prompt ('You Win!!!');
  } else if (choice === computerChoice) {
    prompt (`It's a tie!!!`);
  } else {
    prompt (`Computer Win!!!`);
  }
}

function validChoice (checkChoice) {
  switch (checkChoice) {
    case 'r':
      checkChoice = 'rock';
      return checkChoice;
    case 'p':
      checkChoice = 'paper';
      return checkChoice;
    case 'sc':
      checkChoice = 'scissors';
      return checkChoice;
    case 'sp':
      checkChoice = 'spock';
      return checkChoice;
    case 'l':
      checkChoice = 'lizard';
      return checkChoice;
  }
}

function countingScore(choice,computerChoice) {
  if (determineRoundWinner(choice,computerChoice)) {
    playerScore += 1;
  } else if (choice === computerChoice) {
    playerScore += 0;
    computerScore += 0;
  } else {
    computerScore += 1;
  }
}

function displayScore() {
  prompt(`The player score is ${playerScore} and the computer score is ${computerScore}.`);
}

function displayGrandWinner() {
  prompt(``);
  if (playerScore === MAX_SCORE ) {
    prompt(`Congratulations! You are the Grand Winner!!!`);
  } else {
    prompt(`Computer is the Grand Winner.`);
  }
  prompt(``);
}

while (true) {
  playerScore = 0;
  computerScore = 0;
  while (playerScore < MAX_SCORE && computerScore < MAX_SCORE) {
    prompt(`Choose one: ${Object.keys(GAME_RULE).join(', ')}. (r, p, sc, sp, l)`);
    let choice = readline.question();
    while (!Object.keys(GAME_RULE).includes(validChoice(choice)) &&
      !Object.keys(GAME_RULE).includes(choice)) {
      prompt("That's not a valid choice.");
      choice = readline.question();
    }
    if (Object.keys(GAME_RULE).includes(validChoice(choice))) {
      choice = validChoice(choice);
    }
    let randomIndex = Math.floor(Math.random() * Object.keys(GAME_RULE).length);
    let computerChoice = Object.keys(GAME_RULE)[randomIndex];
    determineRoundWinner(choice,computerChoice);
    displayWinner(choice,computerChoice);
    countingScore(choice,computerChoice);
    displayScore();
  }
  displayGrandWinner();
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}