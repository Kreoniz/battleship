export function renderPlayerBoard(root, gameboard, isTurn) {
  root.innerHTML = '';

  for (let i = 0; i < 10; i += 1) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let j = 0; j < 10; j += 1) {
      const cellDiv = document.createElement('div');
      cellDiv.dataset.x = j;
      cellDiv.dataset.y = i;

      const cell = gameboard.getCell(j, i);
      cellDiv.classList.add('cell');
      if (cell.status === 'occupied') {
        cellDiv.classList.add('ship');
      } else {
        cellDiv.classList.add(cell.status);
      }

      rowDiv.appendChild(cellDiv);
    }

    root.appendChild(rowDiv);
  }
}

export function renderOpponentBoard(root, gameboard, isTurn) {
  root.innerHTML = '';

  for (let i = 0; i < 10; i += 1) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let j = 0; j < 10; j += 1) {
      const cellDiv = document.createElement('div');
      cellDiv.dataset.x = j;
      cellDiv.dataset.y = i;

      const cell = gameboard.getCell(j, i);
      cellDiv.classList.add('cell');
      cellDiv.classList.add(cell.status);
      if (cell.status !== 'hit' && cell.status !== 'missed') {
        cellDiv.classList.add('shootable');
      }

      if (cell.status === 'occupied' || cell.status === 'empty') {
        cellDiv.addEventListener('click', () => {
          const x = cellDiv.dataset.x;
          const y = cellDiv.dataset.y;
          cellDiv.classList.add(cell.status);

          const attackResult = gameboard.receiveAttack(x, y);

          if (attackResult === 'destroyed') {
            const adjacentCells = gameboard.getShipAdjacentCells(x, y);

            for (let i = 0; i < adjacentCells.length; i += 1) {
              const adjacentX = adjacentCells[i].x;
              const adjacentY = adjacentCells[i].y;

              gameboard.receiveAttack(adjacentX, adjacentY);
            }
          }

          if (attackResult === 'missed') {
            renderOpponentBoard(root, gameboard, !isTurn);
          } else {
            renderOpponentBoard(root, gameboard, true);
          }
        });
      }

      rowDiv.appendChild(cellDiv);
    }

    root.appendChild(rowDiv);
  }
}
