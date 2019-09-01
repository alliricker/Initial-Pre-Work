// If statements are used to make decisions - if tells JavaScript to execute the code in {} only under certain conditions, defined in parentheses. These conditions are Boolean conditions. If the condition is true, the program will execute the statement; if it is false, it will not.

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true";
  }
  return "No, that was false";


  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
