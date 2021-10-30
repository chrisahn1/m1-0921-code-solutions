/* exported compact */
function compact(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === false) {
      continue;
    } else if (typeof array[i] === 'object') {
      if (array[i] === null && array[i] !== undefined) {
        continue;
      } else {
        newArray.push(array[i]);
      }
    } else if (array[i] == -0 || array[i] === 0) {
      continue;
    } else if (array[i] === undefined) {
      continue;
    } else if (array[i] === '') {
      continue;
    } else if (typeof array[i] === 'string') {
      newArray.push(array[i]);
    } else if (isNaN(array[i])) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
