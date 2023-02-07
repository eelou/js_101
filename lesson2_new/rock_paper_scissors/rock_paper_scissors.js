const readline = require('readline-sync');
//declaring game rule
const GAME_RULE = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard:   ['paper', 'spock'],
  spock:    ['rock', 'scissors'],
};
//declaring and setting the match score to 3 (best out of 5)
const MATCH_SCORE = 3;

//declaring the score of player and computer
let playerScore;
let computerScore;

//function to display messages
function prompt(message) {
  console.log(`${message}`);
}

//function to get user input
function getUserInput() {
  let userInput = readline.question('=> ');
  return userInput;
}

//function to check valid choices
function validChoice (choice) {
  switch (choice) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 'sc':
      return 'scissors';
    case 'sp':
      return 'spock';
    case 'l':
      return 'lizard';
    default:
      return 'invalid choice';
  }
}

//function to ask user to choose between scissors or spock
function chooseScissorsOrSpock (choice) {
  switch (choice) {
    case 'sp':
      return 'spock';
    case 'sc':
      return 'scissors';
    default:
      return 'invalid choice';
  }
}

//function to check if the player win the round or not
function checkPlayerWinRound (choice, computerChoice) {
  return GAME_RULE[choice].includes(computerChoice);
}

//function to display the round winner
function displayRoundWinner (choice, computerChoice) {
  prompt(`The player picks ${choice} and the computer picks ${computerChoice}.`);
  if (checkPlayerWinRound(choice, computerChoice)) {
    prompt(`The winner of this round is player.`);
  } else if (choice === computerChoice) {
    prompt(`This round is a tie.`);
  } else {
    prompt(`The winner of this round is computer.`);
  }
}

//function to count the score
function countingScore (choice, computerChoice) {
  if (checkPlayerWinRound(choice, computerChoice)) {
    playerScore += 1;
  } else if (choice === computerChoice) {
    playerScore += 0;
    computerScore += 0;
  } else {
    computerScore += 1;
  }
}

//function to display current score
function displayScore () {
  prompt(`Currently, the player score is ${playerScore} and the computer score is ${computerScore}.`);
}

//function to display the match winner
function displayMatchWinner () {
  if (playerScore === 3) {
    prompt(`The Grand Winner of the match is the player.`);
  } else {
    prompt(`The Grand Winner of the match is the computer.`);
  }
}

while (true) {
  //setting the player score and computer score to 0
  playerScore = 0;
  computerScore = 0;
  console.clear();

  while (playerScore < MATCH_SCORE && computerScore < MATCH_SCORE) {

    //asking the user for their choices
    prompt(`Choose one: ${Object.keys(GAME_RULE).join(', ')}. (r, p, sc, sp, l)`);
    let choice = readline.question();

    //checking if the user input the valid choice
    while (!GAME_RULE.hasOwnProperty(choice) &&
            !Object.keys(GAME_RULE).includes(validChoice(choice)) &&
            !(choice === 's')) {
      prompt(`That's not a valid choice`);
      choice = readline.question();
    }
    //setting the choice so that it is the keys from GAME_RULE
    if (Object.keys(GAME_RULE).includes(validChoice(choice)))  {
      choice = validChoice(choice);
    } else if (choice === 's') {
      prompt(`Please choose scissors or spock. (sc or sp)`);
      choice = readline.question();

      while (!Object.keys(GAME_RULE).includes(chooseScissorsOrSpock(choice))) {
        prompt(`That's not a valid choice. Please choose between scissors or spock. (sc or sp)`);
        choice = readline.question();
      }

      if (Object.keys(GAME_RULE).includes(chooseScissorsOrSpock(choice))) {
        choice = chooseScissorsOrSpock(choice);
      }
    }

    //calculating the random number for computer choice
    let randomIndex = Math.floor(Math.random() * Object.keys(GAME_RULE).length);
    //selecting for the computer choice
    let computerChoice = Object.keys(GAME_RULE)[randomIndex];
    //displaying the choices
    displayRoundWinner(choice, computerChoice);
    //calling the function countingScore to count the score
    countingScore(choice, computerChoice);
    //calling the function to display the current score
    displayScore();
    prompt(``);
  }

  //display the Match winner
  displayMatchWinner();
  prompt('');

  //asking if the user want to do another calculation
  prompt(`Would you like to play another match? (y/n) `);
  let answer = getUserInput();
  if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    break;
  } else if (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'y'
            && answer.toLowerCase() !== 'no' && answer.toLowerCase() !== 'n') {
    prompt(`Please enter 'yes' or 'no'.`);
    answer = getUserInput();
  }
}