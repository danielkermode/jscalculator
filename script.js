var buttonNames = ['AC', 'CE', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '.', 0, 'ANS', '='];
var currentInput = '';
var answer = '';

function clickHandler(e) {
  var displayInput = document.getElementById('calc-input');
  switch(this.textContent) {
    case 'AC':
      currentInput = '';
      break;
    case 'CE':
      currentInput = currentInput.toString().slice(0, -1);
      break;
    case '=':
      //the evil magic ingredient. Use of 'eval' is discouraged in JS but good for some cases.
      //Plus I'm lazy.
      currentInput = eval(currentInput);
      answer = currentInput;
      break;
    case 'ANS':
      currentInput = answer.toString();
      break;
    default:
      currentInput += this.textContent;
  }
  displayInput.value = currentInput;
}

function addButtons(arr) {
  arr.forEach(function(val, ind) {
    //create button and append value as button text.
    var newButton = document.createElement('button');
    //give button appropriate properties
    newButton.className = 'calc-button';
    newButton.onclick = clickHandler;

    var content = document.createTextNode(val);
    newButton.appendChild(content);
    //add the newly created button and its content into the DOM
    document.getElementById('calc-buttons' + (Math.floor(ind/4) + 1)).appendChild(newButton);
  })
}

document.addEventListener('DOMContentLoaded', function(e) {
  addButtons(buttonNames);
});