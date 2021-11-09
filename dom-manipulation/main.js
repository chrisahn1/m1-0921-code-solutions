var element1 = document.querySelector('.hot-button');
var element2 = document.querySelector('.click-count');

element1.addEventListener('click', handleClick);
element2.addEventListener('click', handleClick);

var a = 0;

function handleClick(event) {
  a++;
  if (a < 4) {
    element1.className = 'hot-button cold';
  } else if (a < 7) {
    element1.className = 'hot-button cool';
  } else if (a < 10) {
    element1.className = 'hot-button tepid';
  } else if (a < 13) {
    element1.className = 'hot-button warm';
  } else if (a < 16) {
    element1.className = 'hot-button hot';
  } else {
    element1.className = 'hot-button nuclear';
  }
  element2.textContent = `Clicks: ${a}`;
}
