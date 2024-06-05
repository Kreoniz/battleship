import { Player } from '../src/scripts/player';

test('if gameboard objects of each player are different', () => {
  const player1 = new Player();
  const player2 = new Player();

  expect(player1.gameboard).not.toBe(player2.gameboard);
});
