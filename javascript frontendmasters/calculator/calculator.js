let runningTotal = 0;
let buffer = '0';
let previousOperatot;

const screen = document.querySelector('.screen');

function buttonClick(value) {  }

function handleSymbol() {}
function handleNumber() {}

function init() {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    })
}

init()