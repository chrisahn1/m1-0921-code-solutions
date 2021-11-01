/* exported dropRight */
function dropRight(array, count) {
  var size;
  var newArray = [];
  if (count > array.length) {
    size = array.length;
  } else {
    size = array.length - count;
  }
  for (let i = 0; i < size; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
