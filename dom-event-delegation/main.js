var element = document.querySelector('.task-list');

element.addEventListener('click', handleClick);

function handleClick(event) {
  var closestElement = event.target.closest('.task-list-item');
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  console.log('closest: ', closestElement);
  closestElement.remove();
}
