import { Ship } from '../ship';

it('should be of a given length', () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
});

it('should get hit', () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.hits).toBe(1);
});

it('should not sink if not hit enough times', () => {
  const ship = new Ship(4);

  for (let i = 0; i < 3; i += 1) {
    ship.hit();
  }

  expect(ship.isSunk()).toBeFalsy();
});

it('should sink if hit enough times', () => {
  const ship = new Ship(7);

  for (let i = 0; i < 7; i += 1) {
    ship.hit();
  }

  expect(ship.isSunk()).toBeTruthy();
});
