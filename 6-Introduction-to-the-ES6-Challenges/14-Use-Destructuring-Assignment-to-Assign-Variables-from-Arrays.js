// Destructuring an array in ES6 lets you pick and choose which elements you want to assign to variables.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
    [b,a] = [a,b];

  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8 
