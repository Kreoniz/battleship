import { Gameboard } from './gameboard.js';

export class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  makeRandomMove() {
    const w = this.gameboard.getBoardDimensions().w;
    const h = this.gameboard.getBoardDimensions().h;

    const x = Math.floor(Math.random() * w);
    const y = Math.floor(Math.random() * h);
    return { x, y };
  }
}
