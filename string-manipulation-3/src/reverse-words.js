/* exported reverseWords */
function reverseWords(string) {
  var tempString = '';
  var newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      for (let n = tempString.length - 1; n >= 0; n--) {
        newString += tempString[n];
      }
      newString += string[i];
      tempString = '';
    } else {
      tempString += string[i];
    }
  }
  for (let n = tempString.length - 1; n >= 0; n--) {
    newString += tempString[n];
  }
  return newString;
}
