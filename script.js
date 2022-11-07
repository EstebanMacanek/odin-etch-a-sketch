let container = document.querySelector('.container');

for (i = 0; i < 16; i++) {
    let line = document.createElement('div');
    line.classList.add('line');
    container.append(line);
    for (u = 0; u < 16; u++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        line.appendChild(cell);
    }
}