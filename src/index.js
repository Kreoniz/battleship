import { Player } from './scripts/player.js';
import { BoardRenderer } from './scripts/render.js';
import './styles/styles.css';

const player = new Player();
const opponent = new Player();

const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

player.gameboard.randomPlacement(shipSizes);
opponent.gameboard.randomPlacement(shipSizes);

// Randomly decide which player moves first
const PlayerFirstTurn = Boolean(Math.round(Math.random()));

const boardRenderer = new BoardRenderer(
  PlayerFirstTurn,
  document.querySelector('#playerBoard'),
  player,
  document.querySelector('#opponentBoard'),
  opponent,
);

boardRenderer.renderPlayerBoard();
boardRenderer.renderOpponentBoard();

const randomizeBtn = document.querySelector('#randomize');
randomizeBtn.addEventListener('click', () => {
  player.gameboard.randomPlacement(shipSizes);
  boardRenderer.renderPlayerBoard();
});

const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', () => {
  randomizeBtn.style.display = 'none';
  startBtn.disabled = true;

  if (!boardRenderer.isPlayerTurn) {
    boardRenderer.makeOpponentMove(opponent, player);
  }
});
