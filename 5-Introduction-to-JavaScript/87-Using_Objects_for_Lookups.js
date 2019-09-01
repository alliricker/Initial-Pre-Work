// Objects are like dictionaries - you can use an object to "lookup" values if you have tabular data - as opposed to a switch statement or an if/else chain. The switch statement was converted to a object and the result variable was added.

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
phoneticLookup("alpha");
phoneticLookup("bravo");
phoneticLookup("delta");
phoneticLookup("echo");
phoneticLookup("foxtrot");
phoneticLookup("");
