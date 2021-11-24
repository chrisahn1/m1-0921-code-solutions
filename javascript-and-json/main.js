var arr = [
  {
    isbn: 111111,
    title: 'Harry Potter',
    author: 'J.K. Rowlings'
  },
  {
    isbn: 222222,
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: 333333,
    title: '1984',
    author: 'George Orwell'
  }
];

for (let i = 0; i < arr.length; i++) {
  var key;
  for (key in arr[i]) {
    console.log(key + ': ', arr[i][key]);
    console.log('typeof: ', typeof arr[i][key]);
  }
}

var arr1 = ['{"isbn": 111111, "title": "Harry Potter", "author": "J.K. Rowlings"}',
  '{"isbn": 222222, "title": "Lord of the Rings", "author": "J.R.R. Tolkien"}',
  '{"isbn": 333333, "title": "1984", "author": "George Orwell"}'
];

for (let i = 0; i < arr1.length; i++) {
  console.log('typeof arr1: ', typeof arr1[i]);
  console.log(arr1[i]);
}

var obj = '{"id": 1234, "name": "Chris Ahn"}';

console.log('typeof obj: ', typeof obj);

var obj1 = JSON.parse(obj);
console.log('typeof obj1: ', typeof obj1);
