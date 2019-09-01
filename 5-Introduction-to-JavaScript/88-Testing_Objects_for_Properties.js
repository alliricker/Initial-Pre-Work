// If you want to check if the property of a given objects exists or not use the .hasOwnProperty(propname) method of objects. It will return true or false if found or not.

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  } else {
    return "Not Found"
  }
}

// Test your code by modifying these values
checkObj("gift");
checkObj("pet");
checkObj("house");
