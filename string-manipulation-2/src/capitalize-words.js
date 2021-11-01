/* exported capitalizeWords */
function capitalizeWords(string) {
  var previousChar = string[0];
  var newString = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (previousChar === ' ') {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
    previousChar = string[i];
  }
  return newString;
}
