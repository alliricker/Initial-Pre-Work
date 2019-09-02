// Some developers prefer to use const by default unless they  know that you will need to reassign the value. If so, use let. Objects (arrays, functions) assigned with const are still mutable, const only prevents the reassignment of the variable identifier.

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid

s[0] = 2;
s[1] = 5;
s[2] = 7;
console.log;

  // change code above this line
}
editInPlace();
