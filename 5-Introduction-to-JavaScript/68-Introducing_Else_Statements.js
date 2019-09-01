// If an if statement is true, the code is executed. If it is false, nothing would happen. However, with an else statement, an alternative block of code can be executed.

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    return "Bigger than 5";
  } else {
    return "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
testElse (5);
testElse (6);
testElse (10);
