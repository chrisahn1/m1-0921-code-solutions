/* exported numVowels */
function numVowels(string) {
  var sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
      sum++;
    }
  }
  return sum;
}
