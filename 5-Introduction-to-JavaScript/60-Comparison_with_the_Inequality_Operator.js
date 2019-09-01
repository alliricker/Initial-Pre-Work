// The inequality operator (!=) means NOT equal and returns false whereas equality operator would return true. It will convert data when comparing.

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
testNotEqual(99);
testNotEqual("99");
testNotEqual(12);
testNotEqual("12");
testNotEqual("bob");
