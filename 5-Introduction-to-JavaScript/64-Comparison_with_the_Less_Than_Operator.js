// The less than operator (<) compares the values of two numbers. If the number on the left is less than the number on the right- true. If not - false. This will convert data types

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);
testLessThan(0);
testLessThan(24);
testLessThan(25);
testLessThan(54);
testLessThan(55);
testLessThan(99);
