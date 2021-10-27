/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }

  return numbers;
}

console.log('getNumbersToTen: ', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty: ', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';

  while (count <= times) {
    repeated += word + ' ';
    count += 1;
  }
  return repeated;
}

console.log('repeatWord: ', repeatWord('testing', 5));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log('logEachCharacter: ', string[i]);
  }
}

logEachCharacter('');
logEachCharacter('Chris Ahn');
logEachCharacter('Hello World!');

function doubleAll(numbers) {
  var doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log('doubleAll: ', doubleAll([3, 5, 6, 8, 12]));

function getKeys(object) {
  var keys = [];
  var key;

  for (key in object) {
    keys.push(key);
  }
  return keys;
}

console.log('getKeys: ', getKeys({ firstName: 'Chris', lastName: 'Ahn', Status: 'Student' }));
console.log('getKeys: ', getKeys({ model: 'Blue Falcon', vehicle: 'racer', number: 12345 }));

function getValues(object) {
  var values = [];
  var key;

  for (key in object) {
    values.push(object[key]);
  }
  return values;
}

console.log('getValues: ', getValues({ firstName: 'Chris', lastName: 'Ahn', Status: 'Student' }));
console.log('getValues: ', getValues({ model: 'Blue Falcon', vehicle: 'racer', number: 12345 }));
