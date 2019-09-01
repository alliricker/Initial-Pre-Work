// You can determine the type of variable or value with the typeof operator. typeof3 returns number, whereas type of '3' returns string.

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
compareEquality("20", 20);
