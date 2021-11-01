/* exported flatten */
// define function named flatten with 1 parameter array
// declare both variables newArray and tempArray as empty arrays
// for loop is declared with initialization as zero, checks if less than length of array, and increments by 1
// if statement is delcared
// within the if statement has a for loop declared
// in the 2nd for loop, tempArray is appended in newArray
// in the else statement, array is appended in newArray
// return value of newArray

function flatten(array) {
  var newArray = [];
  var tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      tempArray = array[i];
      for (let n = 0; n < tempArray.length; n++) {
        newArray.push(tempArray[n]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// the if statement checks if one of the values in array is an array
// if return true, tempArray which is assigned with the array is added in newArray
// then the 2nd for loop pushes each value of tempArray
