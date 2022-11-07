let container = document.querySelector('.container');

function makeGrid (numberOfLines) {
    for (i = 0; i < numberOfLines; i++) {
        let line = document.createElement('div');
        line.classList.add('line');
        container.append(line);
        for (u = 0; u < numberOfLines; u++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            line.appendChild(cell);
        }
    }
}

function mouseover () {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    });
}

makeGrid(16);
mouseover();

let button = document.querySelector('button');
button.addEventListener('click', () => {
    numberOfLines = parseInt(prompt('How many lines?'));
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    makeGrid(numberOfLines);
    mouseover();
});