// Bracket notations on objects can be used to access a property which is stored as the value of a variable. Useful for iterating through object properties or accessing a lookup table.

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber= 16;       // Change this Line
var player = testObj[playerNumber];
console.log(player);  // Change this Line 
