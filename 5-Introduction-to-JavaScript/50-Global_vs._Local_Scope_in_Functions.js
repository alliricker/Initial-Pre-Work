// If local and global variables are in the same name, the local variable takes precedence over the global variable.

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var myOutfit = "sweater";
  return myOutfit;

  // Only change code above this line
  return outerWear;
}

myOutfit();
