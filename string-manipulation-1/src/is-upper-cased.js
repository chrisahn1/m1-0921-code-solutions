/* exported isUpperCased */
function isUpperCased(word) {
  var status = true;

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      status = false;
    }
  }
  return status;
}
