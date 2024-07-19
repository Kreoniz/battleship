export class BoardRenderer {
  isPlayerTurn;
  player;
  opponent;

  constructor(isPlayerTurn, playerRoot, player, opponentRoot, opponent) {
    this.isPlayerTurn = isPlayerTurn;
    this.player = player;
    this.playerRoot = playerRoot;
    this.opponent = opponent;
    this.opponentRoot = opponentRoot;
  }

  renderPlayerBoard() {
    this.playerRoot.innerHTML = '';

    for (let i = 0; i < 10; i += 1) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');

      for (let j = 0; j < 10; j += 1) {
        const cellDiv = document.createElement('div');
        cellDiv.dataset.x = j;
        cellDiv.dataset.y = i;

        const cell = this.player.gameboard.getCell(j, i);
        cellDiv.classList.add('cell');
        if (cell.status === 'occupied') {
          cellDiv.classList.add('ship');
        } else {
          cellDiv.classList.add(cell.status);
        }

        rowDiv.appendChild(cellDiv);
      }

      this.playerRoot.appendChild(rowDiv);
    }
  }

  renderOpponentBoard() {
    this.opponentRoot.innerHTML = '';

    for (let i = 0; i < 10; i += 1) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');

      for (let j = 0; j < 10; j += 1) {
        const cellDiv = document.createElement('div');
        cellDiv.dataset.x = j;
        cellDiv.dataset.y = i;

        const cell = this.opponent.gameboard.getCell(j, i);
        cellDiv.classList.add('cell');
        cellDiv.classList.add(cell.status);

        if (
          this.isPlayerTurn &&
          (cell.status === 'occupied' || cell.status === 'empty')
        ) {
          if (cell.status !== 'hit' && cell.status !== 'missed') {
            cellDiv.classList.add('shootable');
          }

          cellDiv.addEventListener('click', () => {
            const x = cellDiv.dataset.x;
            const y = cellDiv.dataset.y;
            cellDiv.classList.add(cell.status);

            const attackResult = this.opponent.gameboard.receiveAttack(x, y);

            if (attackResult === 'destroyed') {
              const adjacentCells =
                this.opponent.gameboard.getShipAdjacentCells(x, y);

              for (let i = 0; i < adjacentCells.length; i += 1) {
                const adjacentX = adjacentCells[i].x;
                const adjacentY = adjacentCells[i].y;

                this.opponent.gameboard.receiveAttack(adjacentX, adjacentY);
              }
            }

            if (attackResult === 'missed') {
              this.isPlayerTurn = !this.isPlayerTurn;
              this.renderOpponentBoard();
              this.makeOpponentMove(this.opponent, this.player);
            } else {
              this.renderOpponentBoard();
            }
          });
        }

        rowDiv.appendChild(cellDiv);
      }

      this.opponentRoot.appendChild(rowDiv);
    }
  }

  renderBoards() {
    this.renderPlayerBoard();
    this.renderOpponentBoard();
  }

  makeOpponentMove(attacker, defender) {
    let randomMove = defender.shootRandomCell();
    let x = randomMove.x;
    let y = randomMove.y;

    const attackResult = defender.gameboard.receiveAttack(x, y);
    console.log(attackResult, x, y);

    if (attackResult === 'hit') {
      this.makeOpponentMove(attacker, defender);
    } else if (attackResult === 'destroyed') {
      const adjacentCells = defender.gameboard.getShipAdjacentCells(x, y);

      for (let i = 0; i < adjacentCells.length; i += 1) {
        const adjacentX = adjacentCells[i].x;
        const adjacentY = adjacentCells[i].y;

        defender.gameboard.receiveAttack(adjacentX, adjacentY);
      }

      this.makeOpponentMove(attacker, defender);
    } else if (attackResult === 'missed') {
      this.isPlayerTurn = !this.isPlayerTurn;
    }

    this.renderBoards();
  }
}
