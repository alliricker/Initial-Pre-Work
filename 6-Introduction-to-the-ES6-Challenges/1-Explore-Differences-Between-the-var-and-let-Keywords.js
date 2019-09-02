// ES6 introduced the keyword let to prevent errors when overwriting a variable declaration. When using let, a variable with the same name can only be written once. "use strict" enables Strict Mode and catches common mistakes and "unsafe" caculations

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
