import { Gameboard } from './gameboard.js';

export class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  shootRandomCell() {
    const shootableCells = this.gameboard.getShootableCells();

    const randomIndex = Math.floor(Math.random() * shootableCells.length);
    const { x, y } = shootableCells[randomIndex];

    return { x, y };
  }
}
