const X_CLASS = "x";
const O_CLASS = "o";
const X_HOVER_CLASS = "x-hover";
const O_HOVER_CLASS = "o-hover";
const WINNING_ARRAY = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let cells = document.querySelectorAll('.cell');
let container = document.querySelector('.container');
let winningMsg = document.querySelector('.winning-msg');
let turnClass = X_CLASS;
let turnContainer = X_HOVER_CLASS;
let xIndexes = [];
let oIndexes = [];

initGame();

function initGame() {
  container.classList.add(turnContainer);
}

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        mark(i);
        changeHover();
    }, {once : true});
}

function mark(i) {
    cells[i].classList.add(turnClass);
    if(turnClass === X_CLASS) {
        xIndexes.push(i);
        checkResult(xIndexes);
        turnClass = O_CLASS;
    } else {
        oIndexes.push(i);
        checkResult(oIndexes);
        turnClass = X_CLASS;
    }
}

function changeHover() {
    container.classList.remove(turnContainer);
    turnContainer = turnContainer === X_HOVER_CLASS ? O_HOVER_CLASS : X_HOVER_CLASS;
    container.classList.add(turnContainer);
}

function checkResult(indexes) {
    let isEndGame = false;
    for(let i = 0; i < WINNING_ARRAY.length; i++) {
        if(indexes.includes(WINNING_ARRAY[i][0]) && indexes.includes(WINNING_ARRAY[i][1]) && indexes.includes(WINNING_ARRAY[i][2])){
                winningMsg.innerHTML += turnClass.toUpperCase() + " wins!";
         }  
    }
}
