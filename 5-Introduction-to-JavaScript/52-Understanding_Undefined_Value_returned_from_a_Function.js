// A function CAN include the return statement but it doesn't have to. If it does not, when you call it the function processes the inner code but the return value is undefined.

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive () {
  sum = sum + 5;
}

// Only change code above this line
var returnedValue = addFive();
