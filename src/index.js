import { Player } from './scripts/player.js';
import { renderPlayerBoard, renderOpponentBoard } from './scripts/render.js';
import './styles/styles.css';

const player = new Player();
const opponent = new Player();

const playerShips = [
  [{ x: 9, y: 0 }],
  [{ x: 0, y: 9 }],
  [{ x: 3, y: 6 }],
  [{ x: 5, y: 8 }],
  [
    { x: 6, y: 4 },
    { x: 7, y: 4 },
  ],
  [
    { x: 5, y: 2 },
    { x: 5, y: 1 },
  ],
  [
    { x: 0, y: 6 },
    { x: 0, y: 7 },
  ],
  [
    { x: 9, y: 9 },
    { x: 8, y: 9 },
    { x: 7, y: 9 },
  ],
  [
    { x: 9, y: 5 },
    { x: 9, y: 6 },
    { x: 9, y: 7 },
  ],
  [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 1, y: 3 },
    { x: 1, y: 4 },
  ],
];

for (let i = 0; i < playerShips.length; i += 1) {
  player.gameboard.placeShip(playerShips[i]);
}

const opponentShips = [
  [{ x: 3, y: 0 }],
  [{ x: 4, y: 4 }],
  [{ x: 2, y: 9 }],
  [{ x: 5, y: 8 }],
  [
    { x: 4, y: 2 },
    { x: 5, y: 2 },
  ],
  [
    { x: 7, y: 2 },
    { x: 7, y: 1 },
  ],
  [
    { x: 3, y: 6 },
    { x: 3, y: 7 },
  ],
  [
    { x: 9, y: 9 },
    { x: 8, y: 9 },
    { x: 7, y: 9 },
  ],
  [
    { x: 9, y: 5 },
    { x: 9, y: 6 },
    { x: 9, y: 7 },
  ],
  [
    { x: 1, y: 3 },
    { x: 1, y: 4 },
    { x: 1, y: 5 },
    { x: 1, y: 6 },
  ],
];

for (let i = 0; i < opponentShips.length; i += 1) {
  opponent.gameboard.placeShip(opponentShips[i]);
}

function renderBoard(root, gameboard, isPlayer) {
  root.innerHTML = '';

  for (let i = 0; i < 10; i += 1) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let j = 0; j < 10; j += 1) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.dataset.x = j;
      cellDiv.dataset.y = i;

      if (!isPlayer) {
        cellDiv.classList.add('shootable');

        cellDiv.addEventListener('click', () => {
          if (!cellDiv.classList.contains('shootable')) {
            return;
          }

          const x = cellDiv.dataset.x;
          const y = cellDiv.dataset.y;

          const result = gameboard.receiveAttack(x, y);
          const cell = gameboard.getCell(x, y);
          console.log(cell);

          cellDiv.classList.remove('shootable');

          if (cell.status === 'hit') {
            cellDiv.classList.add('occupied');
            cellDiv.classList.add('hit');
          } else if (cell.status === 'destroyed') {
            const adjacentCells = gameboard.getShipAdjacentCells(x, y);

            for (let i = 0; i < adjacentCells.length; i += 1) {
              const adjacentX = adjacentCells[i].x;
              const adjacentY = adjacentCells[i].y;

              const adjacentCellDiv = root.querySelector(
                `[data-x="${adjacentX}"][data-y="${adjacentY}"]`,
              );

              gameboard.receiveAttack(adjacentX, adjacentY);
              adjacentCellDiv.classList.add('missed');
              adjacentCellDiv.classList.remove('shootable');
            }

            cellDiv.classList.add('occupied');
            cellDiv.classList.add('hit');
          } else if (result === 'missed') {
            cellDiv.classList.add('missed');
          }
          renderBoard(root, gameboard, isPlayer);
        });
      }

      if (isPlayer) {
        if (gameboard.getCell(j, i).status === 'occupied') {
          cellDiv.classList.add('occupied');
        }
      }

      rowDiv.appendChild(cellDiv);
    }

    root.appendChild(rowDiv);
  }
}

renderPlayerBoard(
  document.querySelector('#playerBoard'),
  player.gameboard,
  false,
);

renderOpponentBoard(
  document.querySelector('#opponentBoard'),
  opponent.gameboard,
  false,
);
