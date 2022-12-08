/*
Given a collection of numbers.

Iterate through the collection one by one.
  - save the first value as the starting value.
  - for each iteration, compare the saved value with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value.

START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END
*/

function findGreatest(numbers) {
  let savedNumber = numbers[0];

  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}

/*
Create a function
  Add two numbers
  return the results
  
START

# Given two numbers

SET result

SET a function sumNumbers with 2 arguments
  result = Number(num1) + Number(num2)
  return PRINT result

END
*/

/*
Create a function
  Iterate through the array one by one
    save the first string as the starting string
    for each iteration, add it to the previous string
    move to the next string in the array
  After iterating through the array, return the saved value
  
START

#Given an array of string called "stringArray"

SET savedArray = []
SET iterator = 0

SET a function stringsConcatenated with 1 argument
  WHILE iterator <= lenght of array
    savedArray = savedArray + value within array at space "iterator"
    iterator = iterator + 1
    return savedArray

PRINT savedArray
END
*/

/*
Create a function
  Iterate through the array every other index
    save the first value as the starting new array
    for each iteration, add it to the new array
    move to the next iteration
  After iterating through the array, return the new array

START

#Given a collection of numbers in an array

SET newArray = []
SET iterator = 0

SET a function everyOther with 1 argument
  WHILE iterator <= lenght of array
    newArray.push(value within array at space "iterator")
    iterator = iterator + 2
    return PRINT(newArray)

END
*/


