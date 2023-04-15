/*
Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...
*/
/*
Understanding the [P]roblem
===========================
Input :
  - 1 string
Output :
  - 1 string x 10
Rules/Goals:
  - the string output should have indented 1 space for each line
[E]xamples and Test Cases
=========================

Mental Model
============

[D]ata Structure
================
  - no array or object needed
[A]lgorithm
===========
  - declare a variable 'string' and initialized it to "The Flintstones Rock!"
  - Iterate 10 times
    - print out 'string' with increasing 1 space indented each time
      starting 0 indented space for first line
[C]ode with Intent
==================
*/
let string = "The Flintstones Rock!";
for (let i = 0; i < 10; i += 1) {
  console.log(`${string.padStart(i + string.length," ")}`);
}