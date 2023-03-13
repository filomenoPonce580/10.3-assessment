// Write your tests here!
const findStudentScoreByName = require("../src/solution");
const expect = require("chai").expect;


describe("Checking score", () => {


  it("should return null of the student is not defined", () => {
    const expectNull = null;
    const expectNum = typeof 9

    const input = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];

    expect(findStudentScoreByName(input, input.incorrectName)).to.equal(expectNull);
  });

  


});