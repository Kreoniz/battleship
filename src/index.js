import { Player } from './scripts/player.js';
import { BoardRenderer } from './scripts/render.js';
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

// Randomly deside which player moves first
const PlayerFirstTurn = Boolean(Math.round(Math.random()));

const boardRenderer = new BoardRenderer(
  PlayerFirstTurn,
  document.querySelector('#playerBoard'),
  player,
  document.querySelector('#opponentBoard'),
  opponent,
);

console.log('Is player turn?', boardRenderer.isPlayerTurn);
boardRenderer.renderPlayerBoard();
boardRenderer.renderOpponentBoard();

if (!boardRenderer.isPlayerTurn) {
  boardRenderer.makeOpponentMove(opponent, player);
}

console.log(player.shootRandomCell());
