/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH <= 7) {
    return 'acid';
  } else if (pH >= 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
}

console.log('isUnderFive(4): ', isUnderFive(4));
console.log('isUnderFive(10): ', isUnderFive(10));
console.log('isUnderFive(5): ', isUnderFive(5));

console.log('isEven(4): ', isEven(4));
console.log('isEven(10): ', isEven(10));
console.log('isEven(5): ', isEven(5));

console.log('startsWithJ(\'JavaScript\'): ', startsWithJ('JavaScript'));
console.log('startsWithJ(\'PHP\'): ', startsWithJ('PHP'));
console.log('startsWithJ(\'HTML\'): ', startsWithJ('HTML'));
console.log('startsWithJ(\'Java\'): ', startsWithJ('Java'));
console.log('startsWithJ(\'Kotlin\'): ', startsWithJ('Kotlin'));
console.log('startsWithJ(\'C#\'): ', startsWithJ('C#'));

var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
console.log('isOldEnoughToDrink(bart): ', isOldEnoughToDrink(bart));

var homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
console.log('isOldEnoughToDrive(homer): ', isOldEnoughToDrive(homer));

console.log('isOldEnoughToDrinkAndDrive(homer): ', isOldEnoughToDrinkAndDrive(homer));

console.log('categorizeAcidity(-1): ', categorizeAcidity(-1));
console.log('categorizeAcidity(14.0000001): ', categorizeAcidity(14.0000001));
console.log('categorizeAcidity(7): ', categorizeAcidity(7));
console.log('categorizeAcidity(2): ', categorizeAcidity(2));
console.log('categorizeAcidity(9): ', categorizeAcidity(9));

console.log('introduceWarnerBro(\'yakko\'): ', introduceWarnerBro('yakko'));
console.log('introduceWarnerBro(\'wakko\'): ', introduceWarnerBro('wakko'));
console.log('introduceWarnerBro(\'dot\'): ', introduceWarnerBro('dot'));
console.log('introduceWarnerBro(\'cody\'): ', introduceWarnerBro('cody'));
console.log('introduceWarnerBro(\'minerva\'): ', introduceWarnerBro('minerva'));
