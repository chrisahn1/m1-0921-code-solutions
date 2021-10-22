function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

var seconds = convertMinutesToSeconds(5);
var greeting = greet('Beavis');
var area = getArea(17, 42);
var firstname = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
var element = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('convertMinutesToSeconds: ', seconds);
console.log('greet: ', greeting);
console.log('getArea: ', area);
console.log('getFirstName: ', firstname);
console.log('getLastElement', element);
