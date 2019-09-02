// In ES6 there is a new syntax to create objects using the keyword class. This is JUST a syntax! Class declares a new function and a constructor is added - can be ivoked when new is called to create a new object.

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable {
  constructor(Vegetable) {
    this.name = Vegetable;
  }
}
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
