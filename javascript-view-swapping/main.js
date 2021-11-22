var ele1 = document.querySelector('.tab-container');
var ele2 = document.querySelectorAll('.tab');
var ele3 = document.querySelectorAll('.view');

ele1.addEventListener('click', handleClick);

function handleClick(event) {

  var value = event.target.getAttribute('data-view');

  for (let i = 0; i < 3; i++) {
    ele2[i].className = 'tab';
    ele3[i].className = 'view hidden';
    if (value === ele2[i].getAttribute('data-view')) {
      ele2[i].className = 'tab active';
      ele3[i].className = 'view';
    }
  }
}
