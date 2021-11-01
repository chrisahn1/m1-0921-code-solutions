/* exported truncate */
// define function named truncate with 2 parameters length and string
// declare variables size and newString with newString as empty
// if statement declared
// for statement declared
// concatenate '...' at end of newString
// return value of newString
function truncate(length, string) {
  var size;
  var newString = '';
  if (string.length < length) {
    size = string.length;
  } else {
    size = length;
  }
  for (let i = 0; i < size; i++) {
    newString += string[i];
  }
  newString += '...';
  return newString;
}

// if statement checks if length of string is less than length
// size is assigned with the value that's the lowest
// for loop concatenates with each character of string
