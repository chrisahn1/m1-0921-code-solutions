/* exported includes */
function includes(array, value) {
  var present = false;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      present = true;
    }
  }
  return present;
}
