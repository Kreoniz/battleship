import { Ship } from './ship.js';

class Cell {
  constructor(x, y) {
    this.status = 'empty';
    this.ship = null;
    this.x = x;
    this.y = y;
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
    this.initializeBoard(w, h);
  }

  initializeBoard(w = 10, h = 10) {
    this.#coordinates = [];
    for (let r = 0; r < h; r += 1) {
      this.#coordinates[r] = [];
      for (let c = 0; c < w; c += 1) {
        this.#coordinates[r][c] = new Cell(c, r);
      }
    }
  }

  checkAllShipsSunk() {
    return this.#ships.every((ship) => ship.isSunk());
  }

  placeShip(shipCoords) {
    const ship = new Ship(shipCoords.length);

    const { w, h } = this.getBoardDimensions();

    if (shipCoords.some((coords) => coords.x >= w || coords.y >= h)) {
      return false;
    }

    const adjacentCells = shipCoords
      .map((c) => this.getShipAdjacentCells(c.x, c.y))
      .flat();

    const occupiedAdjacentCells = adjacentCells.filter(
      (c) => this.getCell(c.x, c.y).status !== 'empty',
    );

    if (occupiedAdjacentCells.length > 0) {
      return false;
    }

    const cells = [];
    for (let i = 0; i < shipCoords.length; i += 1) {
      const coords = shipCoords[i];
      const cell = this.#coordinates[coords.y][coords.x];

      if (!cell.ship) {
        cells.push(cell);
      } else if (cell.ship) {
        return false;
      }
    }

    for (let i = 0; i < cells.length; i += 1) {
      const cell = cells[i];
      cell.ship = ship;
      cell.status = 'occupied';
      this.#ships.push(ship);
    }
    return true;
  }

  receiveAttack(x, y) {
    const cell = this.#coordinates[y][x];

    if (cell.ship || cell.status === 'occupied') {
      cell.ship.hit();
      cell.status = 'hit';

      if (cell.ship.isSunk()) {
        return 'destroyed';
      } else {
        return 'hit';
      }
    }

    if (cell.status === 'empty') {
      cell.status = 'missed';
      return 'missed';
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

  getShipAdjacentCells(x, y) {
    const { w, h } = this.getBoardDimensions();

    const cells = [];
    const queue = [{ x, y }];
    const visited = [];

    const deltas = [
      [-1, -1],
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
      [-1, 0],
    ];

    while (queue.length > 0) {
      const currentCoords = queue.shift();
      visited.push(currentCoords);

      const currentX = +currentCoords.x;
      const currentY = +currentCoords.y;

      for (let i = 0; i < deltas.length; i += 1) {
        const changedX = currentX + deltas[i][0];
        const changedY = currentY + deltas[i][1];

        if (
          changedX >= 0 &&
          changedX <= w - 1 &&
          changedY >= 0 &&
          changedY <= h - 1
        ) {
          const changedCoords = { x: changedX, y: changedY };

          if (
            visited.filter((c) => +c.x === changedX && +c.y === changedY)
              .length !== 0
          ) {
            continue;
          }

          const status = this.getCell(changedX, changedY).status;

          if (status === 'hit' || status === 'occupied') {
            queue.push(changedCoords);
            cells.push(changedCoords);
          } else {
            cells.push(changedCoords);
          }
        }
      }
    }

    return cells;
  }

  getBoardDimensions() {
    return { w: this.#coordinates[0].length, h: this.#coordinates.length };
  }

  getShootableCells() {
    return this.#coordinates
      .flat()
      .filter(
        (cell) =>
          cell.status !== 'hit' &&
          cell.status !== 'missed' &&
          cell.status !== 'destroyed',
      );
  }

  randomPlacement(shipSizes) {
    this.initializeBoard();
    const { w, h } = this.getBoardDimensions();

    for (let i = 0; i < shipSizes.length; i += 1) {
      let placed = false;

      while (!placed) {
        const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        const startRow = Math.floor(Math.random() * w);
        const startCol = Math.floor(Math.random() * h);

        const coords = [];

        if (direction === 'horizontal') {
          for (let x = startCol; x < startCol + shipSizes[i]; x++) {
            coords.push({ x: x, y: startRow });
          }
        } else if (direction === 'vertical') {
          for (let y = startRow; y < startRow + shipSizes[i]; y++) {
            coords.push({ x: startCol, y: y });
          }
        }

        if (this.placeShip(coords)) {
          placed = true;
        }
      }
    }
  }
}
