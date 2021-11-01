/* exported invert */
function invert(source) {
  var propSwitch;
  var valueSwitch;
  var newObject = {};
  var key;
  for (key in source) {
    propSwitch = source[key];
    valueSwitch = key;
    newObject[propSwitch] = valueSwitch;
  }
  return newObject;
}
