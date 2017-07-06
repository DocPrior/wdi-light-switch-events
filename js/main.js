document.addEventListener('DOMContentLoaded', function () {

  var lightSwitch = document.querySelector('button');

  var docBody = document.querySelector('body');

  lightSwitch.addEventListener('click', function() {
    docBody.classList.remove('light');
    docBody.classList.add('dark');
  })

});
