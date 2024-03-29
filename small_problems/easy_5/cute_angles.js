/*
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.
*/
/*
- declare a variable 'minutes' and initialized to (parameter - round down of parameter) * 60
- declare a variable 'seconds' and initialized to (minutes - round down of minutes) * 60
- print out whole thing
*/
function dms (num) {
  let minutes = (num - Math.floor(num)) * 60;
  let seconds = (minutes - Math.floor(minutes)) * 60;
  
  console.log(`${Math.floor(num)}\u00B0${Math.floor(minutes).toLocaleString('en-US', {minimumIntegerDigits: 2})}'${Math.floor(seconds).toLocaleString('en-US', {minimumIntegerDigits: 2})}"`)
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"