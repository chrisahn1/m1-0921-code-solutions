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

var books = JSON.stringify(arr);
console.log('typeof ' + books + ': ', typeof books);

var a = JSON.stringify({ id: 1234, name: 'Chris Ahn' });
console.log('typeof ', a, ': ', typeof a);

var obj = JSON.parse(a);
console.log('typeof ' + obj + ': ', typeof obj);
