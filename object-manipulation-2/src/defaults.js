/* exported defaults */
function defaults(target, source) {
  var keySource;
  var keyTarget;
  for (keySource in source) {
    var exists = false;
    for (keyTarget in target) {
      if (keyTarget === keySource) {
        exists = true;
      }
    }
    if (exists === true) {
      continue;
    } else {
      target[keySource] = source[keySource];
    }
  }
}
