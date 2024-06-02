import { Ship } from './ship.js';

class Cell {
  constructor() {
    this.status = 'empty';
    this.ship = null;
  }

  placeShip(ship) {
    this.ship = ship;
  }

  isHit() {
    return this.hit;
  }
}

export class Gameboard {
  #ships = [];
  #coordinates = [];

  constructor(w = 10, h = 10) {
    for (let r = 0; r < h; r += 1) {
      this.#coordinates[r] = [];
      for (let c = 0; c < w; c += 1) {
        this.#coordinates[r][c] = new Cell();
      }
    }
  }

  placeShip(shipCoords) {
    const ship = new Ship(shipCoords.length);

    for (let i = 0; i < shipCoords.length; i += 1) {
      const coords = shipCoords[i];
      const cell = this.#coordinates[coords.y][coords.x];

      if (!cell.ship) {
        cell.ship = ship;
        cell.status = 'occupied';
        this.#ships.push(ship);
      } else if (cell.ship) {
        console.log("You can't place a ship where it's already placed");
      }
    }
  }

  receiveAttack(x, y) {
    const cell = this.#coordinates[y][x];

    if (cell.ship || cell.status === 'occupied') {
      cell.ship.hit();
      cell.status = 'hit';
    } else if (cell.status === 'empty') {
      cell.status = 'missed';
    }
  }

  printBoard() {
    for (let r = 0; r < this.#coordinates.length; r += 1) {
      const row = this.#coordinates[r];
      const line = [];

      for (let c = 0; c < row.length; c += 1) {
        const cell = row[c];

        if (cell.status === 'hit') {
          line.push('X');
        } else if (cell.status === 'occupied') {
          line.push(cell.ship.length);
        } else if (cell.status === 'missed') {
          line.push('.');
        } else if (cell.status === 'empty') {
          line.push('0');
        }

      }
      console.log(line.join(' '));
    }
  }

  getCell(x, y) {
    const cell = this.#coordinates[y][x];

    return cell;
  }

  getBoardDimensions() {
    return { w: this.#coordinates[0].length, h: this.#coordinates.length };
  }
}
