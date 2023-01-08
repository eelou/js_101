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

function invalidNumber (num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) < 0;
}

//Welcome message
prompt('Welcome!');

//using while loop to loop back the whole program as the user needed
while (true) {
  //Getting data from the user
  prompt('What is your loan amount?');
  let loanAmount = readline.question(`=> `);
  //using while loop to test the user input
  while (invalidNumber(loanAmount)) {
    prompt(`Your entry is invalid. Please re-enter again for your loan amount.`);
    loanAmount = readline.question(`=> `);
  }
  prompt('What is your Annual Percentage Rate (APR)? (Please enter the percentage without the % sign.');
  let aPR = readline.question(`=> `);
  //using while loop to test the user input
  while (invalidNumber(aPR)) {
    prompt(`Your entry is invalid. Make sure you are not entering the % sign. Please re-enter again for your APR.`);
    aPR = readline.question(`=> `);
  }
  //Changing APR input into decimal number
  if (Number(aPR) < 1) {
    prompt(`The amount you enter is 1) ${aPR}% or 2) ${aPR * 100}%?`);
    let ans = readline.question(`=> `);
    while (ans !== '1' && ans !== '2') {
      prompt(`You had enter invalid choice. Please choose between 1 and 2.`);
      ans = readline.question(`=> `);
    }
    if (ans === '1') {
      aPR = Number(aPR / 100);
    } else {
      aPR = Number(aPR);
    }
  } else {
    aPR = Number((aPR / 100).toFixed(aPR.length + 2));
  }
  //changing APR into monthly interest rate
  let monthlyInterestRate = aPR / 12;
  prompt('What is the loan duration in months?');
  let loanInMonths = readline.question(`=> `);
  //using while loop to test the user input
  while (invalidNumber(loanInMonths)) {
    prompt(`Your entry is invalid. Please re-enter again for your loan duration.`);
    loanInMonths = readline.question(`=> `);
  }
  //Calculating for monthly payments
  let monthlyPayments = Number(loanAmount) * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-Number(loanInMonths)))));
  prompt(`Your Monthly payment is: $${monthlyPayments.toFixed(2)}.`);
  prompt(`Would you like to perform another calculation? (y/n) `);
  let answer = readline.question();
  if (answer[0].toLowerCase() !== 'y') break;
}