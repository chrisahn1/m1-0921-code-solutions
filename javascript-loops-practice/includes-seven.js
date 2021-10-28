/* exported includesSeven */
function includesSeven(array) {
  var existence = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      existence = true;
    }
  }
  return existence;
}
