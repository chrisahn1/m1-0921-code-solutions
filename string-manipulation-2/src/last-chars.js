/* exported lastChars */
function lastChars(length, string) {
  var index;
  var newString = '';
  if (length > string.length) {
    index = 0;
  } else {
    index = string.length - length;
  }
  for (let i = index; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}
