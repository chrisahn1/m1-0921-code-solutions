/* exported pick */
// declare funciton named pick with 2 parameters source and keys
// declare empty object variable newObject and variable key
// declare for loop that iterates by property of source
// return value of newObject
function pick(source, keys) {
  var newObject = {};
  var key;
  for (key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

// within the for loop, an if statement is declared
// if statement checks if keys includes key and source key is not undefined
// if return true then newObject adds key as new property with source key as value
