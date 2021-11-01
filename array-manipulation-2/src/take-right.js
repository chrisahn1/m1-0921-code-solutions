/* exported takeRight */
function takeRight(array, count) {
  var index;
  var newArray = [];
  if (count > array.length) {
    index = array.length;
  } else {
    index = array.length - count;
  }
  for (let i = index; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
