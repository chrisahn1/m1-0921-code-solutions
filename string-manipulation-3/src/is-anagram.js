/* exported isAnagram */
// define function named isAnagram with 2 parameters firstString and secondString
// declare variables isAna, tempFirst as empty array, and tempSecond as empty array
// declare 1st for loop that loops to length of firstString
// declare 2nd for loop that loops to length of secondString
// declare if statement that checks if lengths of firstString and secondString are the same or not
// if returns false then isAna is assigned with value false and returns value of isAna
// declare 3rd for loop that loops to length of tempFirst
// within the 3rd loop, a for loop is delcared that loops to length of tempSecond
// after the 3rd for loop is done, if statement is declared to check if both tempFirst and tempSecond are empty or not
// if both are empty then isAna is assigned with true; otherwise isAna is assigned with false
// return value is isAna
function isAnagram(firstString, secondString) {
  var isAna;
  var tempFirst = [];
  var tempSecond = [];
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] === ' ') {
      continue;
    }
    tempFirst.push(firstString[i]);
  }
  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] === ' ') {
      continue;
    }
    tempSecond.push(secondString[i]);
  }
  if (tempFirst.length !== tempSecond.length) {
    isAna = false;
    return isAna;
  }
  for (let i = 0; i < tempFirst.length; i++) {
    for (let n = 0; n < tempSecond.length; n++) {
      if (tempFirst[i] === tempSecond[n]) {
        tempFirst.splice(i, 1);
        tempSecond.splice(n, 1);
        i--;
        n--;
        continue;
      }
    }
  }
  if (tempFirst.length === 0 && tempSecond.length === 0) {
    isAna = true;
  } else {
    isAna = false;
  }
  return isAna;
}

// the 1st and 2nd for loops iterates each characters and appends them in separate arrays
// thg 3rd for loop goes over both arrays and eliminates mutual values with the splice method
// i and n need the iterate back in order to not skip values once the mutual values are removed
