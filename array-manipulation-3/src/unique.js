/* exported unique */
function unique(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (newArray.includes(array[i])) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
