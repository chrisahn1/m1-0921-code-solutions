/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var tempArray = [];
  var tempCount = 0;
  if (array.length === 0) {
    return tempArray;
  }
  for (let i = 0; i < array.length; i++) {
    if (tempCount === size) {
      newArray.push(tempArray);
      tempArray = [];
      tempArray.push(array[i]);
      tempCount = 1;
    } else {
      tempArray.push(array[i]);
      tempCount++;
    }
  }
  if (tempArray != null) {
    newArray.push(tempArray);
  }

  return newArray;
}
