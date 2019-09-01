// All comparison operators in JavaScript return a boolean true or false value. ==  (equality operator) is the most basic operator, it compares two values and returns true if they are equivalent or false if they are not. To compare two different data types, JavaScript needs to convert one type to another. This is called "Type Coercion."

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
testEqual(12);
testEqual("12");
