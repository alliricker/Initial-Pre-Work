// The radix specifies the base number in the string, it can be an integer between 2 and 36. Use function parseInt(string, radix);

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
convertToInteger("111001");
convertToInteger("JamesBond");
