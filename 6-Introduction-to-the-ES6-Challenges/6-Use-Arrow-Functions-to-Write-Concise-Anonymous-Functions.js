// In JavaScript, functions don't often need a name. Instead,  inline functions are created. ES6 allows us to write anonymous functions using arrow function syntax. Omit keyword return when there is no function body and only a return value.

const magic = () => {
  "use strict";
  return new Date();
};
