// Variables declared within a function and the function parameters have a local scope - they are only visible within that function.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar;
  console.log(myVar);
}
myLocalScope();

// Run and check the console


// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
