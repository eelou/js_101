/*
Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.*/
const grades = {
  "A" : [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
  "B" : [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
  "C" : [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
  "D" : [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
}
const gradesLetter = ["A", "B", "C", "D"];
const getGrade = (grade1, grade2, grade3) => {
  let average = Math.round((Number(grade1) + Number(grade2) + Number(grade3)) / 3);
  
  if (average < 60) {
    return "F";
  } else {
    for (let i = 0; i < gradesLetter.length; i += 1) {
      if (grades[gradesLetter[i]].includes(average)) {
        return gradesLetter[i];
      } 
    }
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));
console.log(getGrade(10, 80, 60));