// The let keyword is like a var keyword, but with more features - if declared within a block, statement, or expression the scope is limited to that block, statement, or expression.

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
