/* exported capitalizeWord */
// define function named capitalizeWord with 1 parameter word
// declare variable tempString that's assigned with the upper case of first character of word
// declare for loop with initialization as 1, reaches til length of word and increments by 1
// declare variable newString as empty string
// declare if else statement that checks if tempString is string Javascript
// return value of newString
function capitalizeWord(word) {
  var tempString = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    tempString += word[i].toLowerCase();
  }
  var newString = '';
  if (tempString === 'Javascript') {
    for (let i = 0; i < tempString.length; i++) {
      if (i === 4) {
        newString += 'S';
      } else {
        newString += tempString[i];
      }
    }
  } else {
    newString = tempString;
  }
  return newString;
}

// within 1st for loop, concatenate tempString with lower cased character of current value of word
// within the if statement, declare a for loop that iterates to length of tempString
// if i is 4 then concatenate capital S else concatenate with current value of tempString
// else newString is assigned with tempString if tempString is not Javascript
