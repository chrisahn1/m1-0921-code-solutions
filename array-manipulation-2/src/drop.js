/* exported drop */
// declare function named drop with 2 parameters
// declare valiable newArray as empty array
// declare for loop and iterate until length of array and increment by 1
// return value of newArray
function drop(array, count) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i < count) {
      continue;
    }
    newArray.push(array[i]);
  }
  return newArray;
}

// within the for loop, an if statement is declared
// if i is less thatn count then skip by continue operator
// if return false then current array value is appended in newArray
