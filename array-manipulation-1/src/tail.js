/* exported tail */
function tail(array) {
  var newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define function named 'tail' that takes one argument 'array'
// declare variable 'newArray' as an empty array
// declare a for loop that starts with 1 as the initialization and iterates by 1 until the array's length
// each value of the array is being pushed in newArray
// return the value of newArray
