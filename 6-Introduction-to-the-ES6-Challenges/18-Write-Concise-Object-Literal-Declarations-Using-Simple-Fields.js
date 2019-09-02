// ES6 adds support for easily defining object literals. You do not have to write x:x in a simple function return, just one x and that will be converted to x:x automatically

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
