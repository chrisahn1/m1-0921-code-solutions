/* exported omit */
// define function named omit with 2 parameters source and keys
// declare empty object variable newObject and variable key
// declare for loop with that iterates with 'in' operator
// return value of newObject
function omit(source, keys) {
  var newObject = {};
  var key;
  for (key in source) {
    if (!keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

// for loop iterates by each key(property) in source
// within the for loop, an if statement is declared
// if statement checks if keys doesnt include key
// if return true then newObject adds key value as new property and source key as value
