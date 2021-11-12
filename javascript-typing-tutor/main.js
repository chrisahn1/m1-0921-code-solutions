var list = document.querySelectorAll('span');

var index = 0;

document.addEventListener('keydown', typing);

function typing(e) {
  if (e.key === list[index].textContent && index < 30) {
    list[index].className = 'letter green';
    index++;
  } else {
    list[index].className = 'letter red';
  }

  if (index < 30 && list[index].className !== 'letter red') {
    list[index].className = 'letter current';
  }
}
