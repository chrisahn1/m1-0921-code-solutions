function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('event.target.value: ', event.target.value);
}

var element1 = document.querySelector('#contact-form input[name=\'name\']');
var element2 = document.querySelector('#contact-form input[name=\'email\']');
var element3 = document.querySelector('textarea');

element1.addEventListener('focus', handleFocus);
element1.addEventListener('blur', handleBlur);
element1.addEventListener('input', handleInput);

element2.addEventListener('focus', handleFocus);
element2.addEventListener('blur', handleBlur);
element2.addEventListener('input', handleInput);

element3.addEventListener('focus', handleFocus);
element3.addEventListener('blur', handleBlur);
element3.addEventListener('input', handleInput);
