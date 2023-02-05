//Ask the user for the loan amount
//Ask the user for the APR
//Ask the user for the loan duration
//Perform the calculation
//Print out the result

const readline = require('readline-sync');

//Writing a function for general messages inside the program
function prompt (messages) {
  console.log(messages);
}

//Writing a function to check invalid number
function isInvalidNumber (num) {
  return num.trimStart() === "" || Number.isNaN(Number(num)) || Number(num) <= 0;
}

//Writing a function for user input
function getUserInput () {
  let userInput = readline.question('=> ');
  return userInput;
}

//Displaying welcome message
prompt('Welcome to EL Mortgage Calculator!');

//Start the program body
while (true) {
  //Asking the user for loan amount
  prompt('What is your loan amount?');
  let loanAmount = getUserInput();
  //checking if the user input is a valid number
  while (isInvalidNumber(loanAmount)) {
    prompt('Please re-enter the valid loan amount.');
    loanAmount = getUserInput();
  }
  //Asking the user for annual interest rate
  prompt('What is your annual interest rate?\nPlease enter the percentage without the % sign.');
  let annualPercentageRate = getUserInput();
  //checking if the user input is a valid number
  while (isInvalidNumber(annualPercentageRate)) {
    prompt('Please re-enter the valid annual percentage rate.');
    annualPercentageRate = getUserInput();
  }
  //changing from percentage to decimal rate
  if (Number(annualPercentageRate) < 1) {
    prompt(`The amount you enter is 1) ${annualPercentageRate}% or 2) ${annualPercentageRate * 100}%?`);
    let ans = getUserInput();
    //making sure the userinput is either 1 or 2
    while (ans !== '1' && ans !== '2') {
      prompt(`You had enter invalid choice. Please choose between 1 and 2.`);
      ans = getUserInput();
    }
    if (ans === '1') {
      annualPercentageRate = Number(annualPercentageRate / 100);
    } else {
      annualPercentageRate = Number(annualPercentageRate);
    }
  } else {
    annualPercentageRate = Number((annualPercentageRate / 100).toFixed(annualPercentageRate.length + 2));
  }
  //Asking the user for loan duration
  prompt('What is your loan duration (in months)?');
  let loanDuration = getUserInput();
  //checking if the user input is a valid number
  while (isInvalidNumber(loanDuration)) {
    prompt('Please re-enter the valid loan duration (in months)');
    loanDuration = getUserInput();
  }
  //re-calculating the APR into monthly interest rate
  let monthlyInterestRate = annualPercentageRate % 12;
  //calculating monthly payments
  let monthlyPayments = Number(loanAmount) * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-Number(loanDuration)))));
  //displaying the monthly payment
  prompt(`Your Monthly payment is: $${monthlyPayments.toFixed(2)}.`);
  //asking if the user want to do another calculation
  prompt(`Would you like to perform another calculation? (y/n) `);
  let answer = getUserInput();
  if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    break;
  } else if (answer.toLowerCase() !== 'yes' || answer.toLowerCase() !== 'y'
            || answer.toLowerCase() !== 'no' || answer.toLowerCase() !== 'n') {
    prompt(`Please enter 'yes' or 'no'.`);
    answer = getUserInput();
  }
}