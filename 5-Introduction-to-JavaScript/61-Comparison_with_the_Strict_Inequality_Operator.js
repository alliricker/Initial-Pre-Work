// The strict inequality operator (!==) returns false and will not convert data types

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !==17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);
testStrictNotEqual(17);
testStrictNotEqual("17");
testStrictNotEqual(12);
testStrictNotEqual("bob");
