// The parseInt() function parses through a string and returns an integer. "JamesBond" will return NaN because the first character cannot be converted into a number. 

function convertToInteger(str) {

  return parseInt(str);
}

convertToInteger("56");
convertToInteger("56");
convertToInteger("77");
convertToInteger("JamesBond");
