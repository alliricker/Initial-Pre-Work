// Using the const declaration alone will not protect against mutation. To ensure data doesn;t change, use function Object.freeze. You will not be able to add, update, or delete.

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
let obj = {
  name: MATH_CONSTANTS.PI,
  review: 3.14
};
Object.freeze(MATH_CONSTANTS);
console.log(obj);


  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
