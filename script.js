let container = document.querySelector('.container');

function makeGrid (numberOfLines) {
    for (i = 0; i < numberOfLines; i++) {
        let line = document.createElement('div');
        line.classList.add('line');
        container.append(line);
        for (u = 0; u < numberOfLines; u++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.count = 0;
            line.appendChild(cell);
        }
    }
}

function randomN (n) {
    return Math.floor(Math.random() * (n + 1));
}

function randomRGB (black) {
    return `rgb(${randomN(255) - black}, ${randomN(255) - black}, ${randomN(255) - black})`
}

function mouseover () {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = randomRGB(10*Number(cell.dataset.count));
            cell.dataset.count = Number(cell.dataset.count) + 1;

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