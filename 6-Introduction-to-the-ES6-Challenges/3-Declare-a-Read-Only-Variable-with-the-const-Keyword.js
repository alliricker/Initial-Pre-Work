// In ES6, new variables can also be declared with const keyword. const has all of the let features plus they are read-only - they are a constant value and cannot be reassigned. Best practice to name a const is to use all uppercase letters and seperate words with an underscore.

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
