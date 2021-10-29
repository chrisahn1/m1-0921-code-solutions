/* exported getWords */
function getWords(string) {
  var tempString = '';
  var array = [];
  if (string.length === 0) {
    return array;
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      array.push(tempString);
      tempString = '';
    } else {
      tempString += string[i];
    }
  }
  array.push(tempString);
  return array;
}
