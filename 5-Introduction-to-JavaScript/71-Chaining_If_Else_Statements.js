// if/else statements can be chained together for complex logic.

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if (num < 15) {
    return "Medium";
  }
  else if (num < 20) {
    return "Large";
  }
  else if (num >= 20) {
    return "Huge";
  }

  // Only change code above this line
}

// Change this value to test
testSize(7);
testSize(0);
testSize(4);
testSize(5);
testSize(8);
testSize(10);
testSize(14);
testSize(15);
testSize(17);
testSize(20);
testSize(25);
