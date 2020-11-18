const X_CLASS = "x";
const O_CLASS = "o";
const X_HOVER_CLASS = "x-hover";
const O_HOVER_CLASS = "o-hover";

let cells = document.querySelectorAll('.cell');
let container = document.querySelector('.container');
let turnClass = X_CLASS;
let turnContainer = X_HOVER_CLASS;

setup();

function setup(){
  container.classList.add(turnContainer);
}

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        mark(i);
    }, {once : true});
}

function mark(i) {
    cells[i].classList.add(turnClass);
    turnClass = turnClass === X_CLASS ? O_CLASS : X_CLASS;
    
    container.classList.remove(turnContainer);
    turnContainer = turnContainer === X_HOVER_CLASS ? O_HOVER_CLASS : X_HOVER_CLASS;
    container.classList.add(turnContainer);
}