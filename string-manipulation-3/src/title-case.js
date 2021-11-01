/* exported titleCase */
function titleCase(title) {
  var conjunctions = ['and', 'or', 'nor', 'but'];
  var articles = ['a', 'an', 'the'];
  var prepositions = ['as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  var firstLetter = true;
  var subtitle = false; // ':' indicates subtitle
  var firstWord = true;

  var newString = '';
  var tempString = '';
  for (let i = 0; i < title.length; i++) {
    if (title[i] === ' ') {
      if (tempString.toUpperCase() === 'JAVASCRIPT') {
        tempString = 'JavaScript';
      } else if (tempString.toUpperCase() === 'JAVASCRIPT:') {
        tempString = 'JavaScript:';
      } else if (tempString.toUpperCase() === 'API') {
        tempString = 'API';
      } else if (tempString.toUpperCase() === 'API:') {
        tempString = 'API:';
      } else if (conjunctions.includes(tempString.toLowerCase())) {
        if (subtitle === false && firstWord === false) {
          tempString = tempString.toLowerCase();
        } else {
          subtitle = false;
        }
      } else if (articles.includes(tempString.toLowerCase())) {
        if (subtitle === false && firstWord === false) {
          tempString = tempString.toLowerCase();
        } else {
          subtitle = false;
        }
      } else if (prepositions.includes(tempString.toLowerCase())) {
        if (subtitle === false && firstWord === false) {
          tempString = tempString.toLowerCase();
        } else {
          subtitle = false;
        }
      }
      newString += tempString + title[i];
      tempString = '';
      firstLetter = true;
      firstWord = false;
      continue;
    }
    if (firstLetter === true && title[i] !== ' ') {
      tempString += title[i].toUpperCase();
      firstLetter = false;
      continue;
    }
    if (title[i] === ':') {
      subtitle = true;
      tempString += title[i];
      continue;
    }
    if (title[i] === '-') {
      firstLetter = true;
      tempString += title[i];
      continue;
    }
    tempString += title[i];
  }
  if (tempString.toUpperCase() === 'API') {
    tempString = 'API';
  }
  if (tempString.toUpperCase() === 'JAVASCRIPT') {
    tempString = 'JavaScript';
  }
  newString += tempString;
  return newString;
}
