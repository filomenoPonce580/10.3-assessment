/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
    if(name === undefined || students.name === undefined){
      return null
    }else{
      return students.score
    }
  }
  
  module.exports = findStudentScoreByName;
  