var element1 = document.querySelector('.modal');
var element2 = document.querySelector('.box');
var element3 = document.querySelector('.reply');

element1.addEventListener('click', handleClick);
element3.addEventListener('click', handleClick);

var open = true;

function handleClick(event) {
  if (open === true) {
    element1.disabled = true;
    element2.className = 'box appear';
    open = false;
  } else {
    element1.disabled = false;
    element2.className = 'box gone';
    open = true;
  }
}
