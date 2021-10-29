/* exported capitalize */
function capitalize(word) {
  var newString = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      newString += word[i].toUpperCase();
    } else {
      newString += word[i].toLowerCase();
    }
  }
  return newString;
}

// define function named capitalize with one parameter that accepts a string called word
// declare a variable that's an empty string
// declare a for loop that checks each character and iterates by 1
// declare an if statement where the expression evaluates if we're in the first letter
// the newString variable is concatenated with the capitalized charcter of the first index
// the else statement is declared
// within the else statement block, the newString variable is concatenated with a lowercased character of the current index
// return the value of newString
