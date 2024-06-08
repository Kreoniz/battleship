import { Player } from './scripts/player.js';
import './styles/styles.css';

console.log('Hello');

const player = new Player();
const opponent = new Player();

console.log(player);
console.log(player.gameboard);

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
  [{ x: 1, y: 5 }],
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
  console.log(root);

  for (let i = 0; i < 10; i += 1) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let j = 0; j < 10; j += 1) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.dataset.x = j;
      cellDiv.dataset.y = i;

      if (!isPlayer) {
        cellDiv.classList.add('enemy');

        cellDiv.addEventListener('click', () => {
          const x = cellDiv.dataset.x;
          const y = cellDiv.dataset.y;
          console.log(x, y);
          const cell = gameboard.getCell(x, y);
          console.log(cell);

          if (cell.status === 'occupied') {
            gameboard.receiveAttack(x, y);
            cellDiv.classList.add('occupied');
            cellDiv.classList.add('hit');
          } else if (cell.status === 'empty') {
            gameboard.receiveAttack(x, y);
            cellDiv.classList.add('missed');
          }
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

renderBoard(document.querySelector('#playerBoard'), player.gameboard, true);
renderBoard(
  document.querySelector('#opponentBoard'),
  opponent.gameboard,
  false,
);
