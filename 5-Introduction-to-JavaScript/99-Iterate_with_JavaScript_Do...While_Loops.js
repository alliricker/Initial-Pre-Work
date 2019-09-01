// Another type of loop is the "do... while" which will first run the "do" one pass of the code no matter what, then the "while" if a specified condition is true and stops once it is no longer true.

// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

do {
  myArray.push(i);
  i++;
} while (i < 10);
