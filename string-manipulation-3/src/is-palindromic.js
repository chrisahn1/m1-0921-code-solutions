/* exported isPalindromic */
// define function named isPalindromic with 1 parameter string
// declare variable reverseString as empty string
// 1st for loop is declared
// declare variables isPali with boolian value true and count with number 0
// 2nd for loop is declared
// return value of isPali
function isPalindromic(string) {
  var reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === ' ') {
      continue;
    }
    reverseString += string[i];
  }
  var isPali = true;
  var count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    }
    if (reverseString[count] !== string[i]) {
      isPali = false;
      break;
    }
    count++;
  }
  return isPali;
}

// the 1st for loop iterates backwards starting with length of string decrementing by 1 until it reaches to zero
// within the 1st for loop, an if statement is declared to skip empty spaces
// if not an empty string then reverseString is concatenated with string's current character
// the 2nd for loop iterates til the length of string and increments by 1
// 1st if statement checks if it encounters an empty space and skips with continue operator if true
// 2nd if statement checks to see if reverseString and string has different character values
// if true then isPali is assigend with false and breaks the for loop
