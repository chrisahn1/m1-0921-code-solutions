function logSubmit(event) {
  var obj = {};
  obj.name = inputs[0].value;
  obj.email = inputs[1].value;
  obj.text = inputs[2].value;

  console.log('Values: ', obj);
  event.preventDefault();
  document.querySelector('#contact-form').reset();
}

var element = document.querySelector('#contact-form');
var inputs = document.querySelector('#contact-form').elements;

element.addEventListener('submit', logSubmit);
