import { Gameboard } from '../src/scripts/gameboard.js';

it('should place the ship', () => {
  const gameboard = new Gameboard();
  const coords = [
    { x: 1, y: 2 },
    { x: 1, y: 3 },
    { x: 1, y: 4 },
  ];

  gameboard.placeShip(coords);

  for (let i = 0; i < coords.length; i += 1) {
    const x = coords[i].x;
    const y = coords[i].y;

    const cell = gameboard.getCell(x, y);

    expect(cell.status).toBe('occupied');
  }
});

it('should return proper dimensions', () => {
  const width = 8;
  const height = 13;

  const gameboard = new Gameboard(width, height);

  const dimensions = gameboard.getBoardDimensions();

  expect(dimensions.w).toBe(width);
  expect(dimensions.h).toBe(height);
});

it('should have empty cells when initialized', () => {
  const gameboard = new Gameboard();

  const { w, h } = gameboard.getBoardDimensions();

  for (let r = 0; r < h; r += 1) {
    for (let c = 0; c < w; c += 1) {
      const cell = gameboard.getCell(r, c);

      expect(cell.status).toBe('empty');
    }
  }
});

it('should handle attacking the cell properly', () => {
  const gameboard = new Gameboard();
  const coords = [
    { x: 1, y: 2 },
    { x: 1, y: 3 },
    { x: 1, y: 4 },
  ];

  gameboard.placeShip(coords);

  gameboard.receiveAttack(1, 2);
  expect(gameboard.getCell(1, 2).status).toBe('hit');

  gameboard.receiveAttack(2, 2);
  expect(gameboard.getCell(2, 2).status).toBe('missed');
});

/*
it('should correctly return empty cells surrounding the ship', () => {
  const gameboard = new Gameboard();
  const coords = [
    { x: 1, y: 2 },
    { x: 1, y: 3 },
    { x: 1, y: 4 },
  ];

  gameboard.placeShip(coords);

  const adjacentCells = gameboard.getShipAdjacentCells(1, 2);

  expect(adjacentCells).toContain({ x: 0, y: 1 });
  expect(adjacentCells).toContain({ x: 1, y: 1 });
  expect(adjacentCells).toContain({ x: 2, y: 1 });
  expect(adjacentCells).toContain({ x: 2, y: 2 });
  expect(adjacentCells).toContain({ x: 2, y: 3 });
  expect(adjacentCells).toContain({ x: 2, y: 4 });
  expect(adjacentCells).toContain({ x: 2, y: 5 });
  expect(adjacentCells).toContain({ x: 1, y: 5 });
  expect(adjacentCells).toContain({ x: 0, y: 5 });
  expect(adjacentCells).toContain({ x: 0, y: 4 });
  expect(adjacentCells).toContain({ x: 0, y: 3 });
  expect(adjacentCells).toContain({ x: 0, y: 2 });
});
*/
