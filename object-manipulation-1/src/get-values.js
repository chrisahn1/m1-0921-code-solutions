/* exported getValues */
function getValues(object) {
  var array = [];
  var key;
  for (key in object) {
    array.push(object[key]);
  }
  return array;
}
