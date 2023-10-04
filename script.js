const input = document.getElementById('input');
const setBtn = document.getElementById('input-button');

setBtn.addEventListener('click', () => {
    const inputVal = input.value;
    createGrid(inputVal);
})

function getSize(input) {
    if (input >= 2 && input <= 100) {
        return penSize = input;
    } else {
        alert("Input not accepted, please try again!")
    };
};

function createGrid(input) {
    let drawingArea = document.querySelector('#board')
    let blocks = drawingArea.querySelectorAll('div')
    blocks.forEach((div) => div.remove());
    drawingArea.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    drawingArea.style.gridTemplateRows = `repeat(${input}, 1fr)`;

    for (i = 0; i <= (input * input); i++) {
        let block = document.createElement('div');
        block.className = 'grid-item';
        drawingArea.style.backgroundColor = "white";
        block.addEventListener("mouseover", getColor);
        drawingArea.insertAdjacentElement('beforeend', block);
    
   };
}

createGrid(16)

function getSize(input) {
    if (input >= 2 && input <=100) {
        createGrid(input)
    } else {
        alert("Input not accepted, please try again")
    }
}

function getColor() {
    color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
}

function altColor(pick) {
    color = pick;
}

function resetBoard() {
    let drawingArea = document.querySelector('#board');
    let block = drawingArea.querySelectorAll('div');
    block.forEach((div) => (div.style.backgroundColor = "white"))
}