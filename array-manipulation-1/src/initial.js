/* exported initial */
function initial(array) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
