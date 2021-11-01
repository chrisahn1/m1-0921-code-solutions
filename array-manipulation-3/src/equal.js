/* exported equal */
// define function named equal with 2 parameters first and second
// declare variable equalResult with a boolian value true
// declare if statement
// declare for loop that starts with initialization 0, checks if less than length of first, and increments by 1
// declare if statement within the for loop and has a break operator
// return value of equalResult
function equal(first, second) {
  var equalResult = true;
  if (first.length !== second.length) {
    equalResult = false;
    return equalResult;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      equalResult = false;
      break;
    }
  }
  return equalResult;
}

// first if statement checks if the lengths of first and second are the same
// if the value is false, then equalResult is assigned with false and returns it
// the if statement inside the for loop checks values of first and second are the same or not
// if return false then equalResult is assigned with false
