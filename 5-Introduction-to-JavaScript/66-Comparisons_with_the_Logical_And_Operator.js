// To test more than one thing at a time - the logical and the operator (&&) returns true if the operands to the left and right of it are true.

function testLogicalAnd(val) {
  // Only change code below this line


    if (val <= 50 && val >=25) {
      return "Yes";
    }


  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
testLogicalAnd(0);
testLogicalAnd(24);
testLogicalAnd(25);
testLogicalAnd(30);
testLogicalAnd(50);
testLogicalAnd(51);
testLogicalAnd(75);
testLogicalAnd(80);
