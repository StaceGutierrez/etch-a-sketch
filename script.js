const input = document.getElementById('input');
const setBtn = document.getElementById('input-button');

setBtn.addEventListener('click', () => {
    const inputVal = input.value;
    console.log(inputVal);

})

function getSize(input) {
    if (input >= 2 && input <= 100) {
        return penSize = input;
    } else {
        alert("Input not accepted, please try again!")
    };
};

function createGrid(rows, cols) {
    drawingArea.style.setProperty('--grid-rows', rows);
    drawingArea.style.setProperty('--grid-cols', cols);
    for (i = 0; i <= (rows * cols); i++) {
        let cell = document.createElement('div');
        drawingArea.appendChild(cell).className = 'grid-item';
    };
};
