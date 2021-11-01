/* exported firstChars */
function firstChars(length, string) {
  var size;
  var newString = '';
  if (length > string.length) {
    size = string.length;
  } else {
    size = length;
  }
  for (let i = 0; i < size; i++) {
    newString += string[i];
  }
  return newString;
}
