// You can take the return value of a function and assign it to a variable (everything to the right of = is resolved BEFORE the value is assigned)

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

var processed = 2;
function processArg(num) {
  return (num + 7);
  processed = processArg(7);
}
