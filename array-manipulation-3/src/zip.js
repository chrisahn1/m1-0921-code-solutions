/* exported zip */
function zip(first, second) {
  var size;
  var newArray = [];
  var pairArray = [];
  if (first.length < second.length) {
    size = first.length;
  } else {
    size = second.length;
  }
  for (let i = 0; i < size; i++) {
    pairArray.push(first[i]);
    pairArray.push(second[i]);
    newArray.push(pairArray);
    pairArray = [];
  }
  return newArray;
}
