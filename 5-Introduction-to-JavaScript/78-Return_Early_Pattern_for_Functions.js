// The execution of the current function stops when a return statement is reached. Control returns to the calling location.

// Setup
function abTest(a, b) {
  // Only change code below this line

  if(a < 0 || b <0) {
  return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
abTest(2,8);
abTest(3,3);
