// The order of if and else if statements is important. Execution is from top to bottom.

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
orderMyLogic(4);
orderMyLogic(6);
orderMyLogic(11);
