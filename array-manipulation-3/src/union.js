/* exported union */
function union(first, second) {
  var newArray = [];
  for (let i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (let i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
      continue;
    } else {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
