/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

const students = [
  { name: "Jim", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];


function findStudentScoreByName(students, name) {
  let result = null
  students.forEach(studentObj=>{
    if(studentObj.name === name){
      result = studentObj.score
    }else{
      return null
    }
  })

  return result
}
  
console.log(findStudentScoreByName(students, "greg"))

module.exports = findStudentScoreByName;
  