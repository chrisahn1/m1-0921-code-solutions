var element1 = document.querySelector('.light-bulb');
var element2 = document.querySelector('.back-color');

element1.addEventListener('click', handleClick);
element2.addEventListener('click', handleClick2);

var switchLight = true;

function handleClick(event) {
  if (switchLight === true) {
    element1.className = 'light-bulb black';
    switchLight = false;
  } else {
    element1.className = 'light-bulb yellow';
    switchLight = true;
  }
}

function handleClick2(event) {
  if (switchLight === true) {
    element2.className = 'back-color light';
  } else {
    element2.className = 'back-color dark';
  }
}
