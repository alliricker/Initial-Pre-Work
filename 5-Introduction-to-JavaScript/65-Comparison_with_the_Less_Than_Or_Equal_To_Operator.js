// The less than or equal to operator (<=) compares the values of two numbers. If the number on the left is less than or equal to the number on the right - true. If not - false. It will convert data types

function testLessOrEqual(val) {
  if (val<= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);
testLessOrEqual(0);
testLessOrEqual(11);
testLessOrEqual(12);
testLessOrEqual(23);
testLessOrEqual(24);
testLessOrEqual(25);
testLessOrEqual(55);
