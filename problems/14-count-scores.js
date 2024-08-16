/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

function countScores(people) {
  let newScores = {};
  let tempArr = null;
  let tempKey = null;
  people.forEach(function (element) {
    let obj = element; // Getting the objects from the people array
    for (let key in obj) {
      // Getting the value of the objects
      let value = obj[key];

      // checking if the value is a string and if it is NOT in the newScores object
      if (newScores[value] === undefined && value.length > 0) {
        // setting a new key for the newScores using the obj value
        newScores[value] = null;
        tempKey = value; // tempkey for newScores
      }

      // checking if the value is numerical and the key has no value;
      else if (null === newScores[tempKey]) {
        newScores[tempKey] = value; // setting the value of the key newScores
      }

      // checking the key if is it in the newScores object
      else if (tempArr.includes(tempKey)) {
        let valueNewScores = newScores[tempKey];
        newScores[tempKey] = valueNewScores + value;
      }
      tempArr = Object.keys(newScores); // updating the arr
      tempKey = value; // return name
    }
  });
  return newScores;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
