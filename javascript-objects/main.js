var student = { firstName: 'Chris', lastName: 'Ahn', age: 31 };

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'part-time';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = { make: 'racer', model: 'Blue Falcon', year: 2560 };
vehicle['color'] = 'Blue';
vehicle['isConvertable'] = true;

console.log('value of vehicle.color: ', vehicle['color']);
console.log('value of vehicle.isConvertable: ', vehicle['isConvertable']);

console.log('Entire vehicle object: ', vehicle);

var pet = { name: 'Cookie', type: 'Cat' };

delete pet['name'];
delete pet['type'];

console.log('Entire objetc of pet: ', pet);
