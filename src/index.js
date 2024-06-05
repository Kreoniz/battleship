import { Player } from './scripts/player.js';
import './styles/styles.css';

console.log('Hello');

const player = new Player();

console.log(player);
console.log(player.gameboard);

const board = document.querySelector('#board');

for (let i = 0; i < 10; i += 1) {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');

  for (let j = 0; j < 10; j += 1) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');
    cellDiv.dataset.x = j;
    cellDiv.dataset.y = i;

    rowDiv.appendChild(cellDiv);
  }

  board.appendChild(rowDiv);
}
