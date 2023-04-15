/*
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.
*/
/*
- declare a function named 'timeOfDay' with 1 parameter 
  - declare a variable 'hrs' and initialized to return value of 'calculateHrs' with absolute value of parameter passing as argument
  - declare a variable 'mins' and initialized to absolute value of parameter % 60
  - check if the parameter is less than 0 
    - if it is
      - check if 'mins' is equal to 0
        - if it is
          - reassign 'hrs' to 24 - 'hrs'
        - if it is not
          - reassign 'hrs' to 23 - 'hrs'
          - reassign 'mins' to 60 - 'mins'
  - return 'hrs' + ":" + 'mins'
  
- declare a function named 'calculateHrs' with 1 parameter
  - declare a variable 'totalHrs' and initialized to (parameter / 60) rounding down
  - declare a variable 'hrs' and initialized to 0
  - check if the 'totalHrs' is equal to or more than 24
    - if it is 
      - reassign 'hrs' to 'totalHrs' % 24
    - if it is not
      - reassign 'hrs' to 'totalHrs'
  - return 'hrs'
*/
function timeOfDay (num) {
  let hrs = calculateHrs(Math.abs(num));
  let mins = Math.abs(num) % 60;
  
  if (num < 0) {
    if (mins === 0) {
      hrs = 24 - hrs;
    } else {
      hrs = 23 - hrs;
      mins = 60 - mins;
    }
  }
  
  return hrs.toLocaleString('en-US', {minimumIntegerDigits: 2}) + ":" + mins.toLocaleString('en-US', {minimumIntegerDigits: 2});
}

function calculateHrs (num) {
  let totalhrs = Math.floor(num / 60);
  return totalhrs >= 24 ? totalhrs % 24 : totalhrs;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

let num = 5;
function myFunc(num) {
  num = 10;
}

myFunc(num);
console.log(num);