/* exported isLowerCased */
function isLowerCased(word) {
  var status = true;

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      status = false;
    }
  }
  return status;
}
