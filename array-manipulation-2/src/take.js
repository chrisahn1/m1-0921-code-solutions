/* exported take */
// define function named take with 2 parameters array and count
// declare variable size and variable new Array as an empty array
// declare if else statement
// declare for loop that iterates til it reaches to size and increments by 1
// return value of newArray
function take(array, count) {
  var size;
  var newArray = [];
  if (count > array.length) {
    size = array.length;
  } else {
    size = count;
  }
  for (let i = 0; i < size; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// if statement checks if count is greater than length of array
// if return true then size is assigned wiht length of array
// else size is assigned with count
// within the for loop, current value of array is appended in newArray
