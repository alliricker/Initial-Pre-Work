// ES6 has default parameters for functions that kick in when the argument is not specified. "Anonymous" is used when you do not provide a value for the parameter.

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
