document.addEventListener('DOMContentLoaded', function () {

  var lightSwitch = document.querySelector('button');

  var docBody = document.querySelector('body');

  var lightStatus = document.querySelector('h1');

  lightSwitch.addEventListener('click', function() {
    if (docBody.classList.contains('light')) {
      docBody.classList.remove('light');
      docBody.classList.add('dark');
      lightStatus.innerText = 'Hey, who turned off the lights?';
    }
    else {
      docBody.classList.remove('dark');
      docBody.classList.add('light');
      lightStatus.innerText ='It\'s so bright in here!';
    }
  })

});
