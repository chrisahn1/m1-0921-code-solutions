/* exported getKeys */
function getKeys(object) {
  var key;
  var array = [];
  for (key in object) {
    array.push(key);
  }
  return array;
}

// define function named getKeys with 1 parameter object
// declare variable named key
// declare variable that's an empty array
// declare a for loop with key in object
// append key into the array
// return value of array
