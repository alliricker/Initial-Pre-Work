// Getters are meant to return the value of an object's private variable without directly accessing the variable. Setters are meant to modify the value of an object's pricate variable based on the value passed into the setter function- could involve calculations or overwriting the previous value comletely. They're both important because they hide internal implementation details.

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat {
   constructor(farenheit){
      this.farenheit = farenheit;
    }
    get temperature(){
      return 5 / 9 * (this.farenheit - 32);
    }
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
