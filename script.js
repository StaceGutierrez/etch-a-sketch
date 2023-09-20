const drawingArea = document.getElementById('container');
const rowArea = document.createElement('div');
const row = document.createElement('div');
const columnArea = document.createElement('div');
const column = document.createElement('div');
const gridArea = 16; // 16X16 drawing area
rowArea.className = 'row';
columnArea.className = 'column';

const createGrid = () => {
    for (i = 0; i < gridArea; i++) {
        for (j = 0; j < gridArea; j++) {
            rowArea.appendChild(row);
        }
        columnArea.appendChild(column);
    }
}

drawingArea.appendChild(columnArea);

