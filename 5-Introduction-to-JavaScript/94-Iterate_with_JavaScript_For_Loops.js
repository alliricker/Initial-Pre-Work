/* Most common type is "for loop" - runs "for" a specific nu,ber of times. Declares with three optional expressions separated by semicolons. The initialization (1st) statement is executed one time - used to define and setup loop variable. The condition (2nd) statement is evaluated at the beginning of every loop iteration and will continue as long as it is true. If it is false, the loop will not execute. The final expression (3rd) is executed at the end of each loop, used to increment or decrement the loop counter. */

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
 for (var i = 1; i < 6; i++) {
   myArray.push(i);
 }
