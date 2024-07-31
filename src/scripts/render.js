import MissileIcon from '../assets/missile.svg';

export class BoardRenderer {
  isPlayerTurn;
  player;
  opponent;
  animationDuration = 750;

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
        cellDiv.classList.add('opponent');

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

            this.animateAttack(cellDiv);

            setTimeout(() => {
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
                this.isPlayerTurn = false;
                this.makeOpponentMove(this.opponent, this.player);
              } else if (
                attackResult === 'hit' ||
                attackResult === 'destroyed'
              ) {
                this.isPlayerTurn = true;
              }

              if (this.opponent.gameboard.checkAllShipsSunk()) {
                document.querySelector('#status').textContent = 'YOU WIN!';
              }

              this.renderOpponentBoard();
            }, this.animationDuration);
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
    const cellDiv = document.querySelector(
      `.opponent[data-x="${x}"][data-y="${y}"]`,
    );

    this.animateAttack(cellDiv);

    setTimeout(() => {
      if (attackResult === 'hit') {
        this.isPlayerTurn = false;
      } else if (attackResult === 'destroyed') {
        const adjacentCells = defender.gameboard.getShipAdjacentCells(x, y);

        for (let i = 0; i < adjacentCells.length; i += 1) {
          const adjacentX = adjacentCells[i].x;
          const adjacentY = adjacentCells[i].y;

          defender.gameboard.receiveAttack(adjacentX, adjacentY);
        }

        this.isPlayerTurn = false;
      } else if (attackResult === 'missed') {
        this.isPlayerTurn = true;
      }

      if (defender.gameboard.checkAllShipsSunk()) {
        this.isPlayerTurn = true;
        document.querySelector('#status').textContent = 'OPPONENT WINS!';
        this.renderOpponentBoard();
      }

      if (!this.isPlayerTurn) {
        this.makeOpponentMove(attacker, defender);
      }
      this.renderBoards();
    }, this.animationDuration);
  }

  animateAttack(cellDiv) {
    const missileFalling = [
      { top: 0 },
      { top: `${cellDiv.getBoundingClientRect().top + 5}px` },
    ];

    this.isPlayerTurn = false;

    const missileTiming = {
      duration: this.animationDuration,
      iterations: 1,
    };

    const svg = document.createElement('div');
    svg.innerHTML = MissileIcon;
    svg.classList.add('missile');
    svg.style.position = 'absolute';
    svg.style.top = `-${cellDiv.getBoundingClientRect().height}px`;
    svg.style.left = `${cellDiv.getBoundingClientRect().left + 5}px`;
    svg.style.width = '30px';
    svg.style.height = '30px';
    svg.animate(missileFalling, missileTiming);
    document.body.appendChild(svg);

    this.renderBoards();
    cellDiv.classList.add('target');

    setTimeout(() => {
      cellDiv.classList.remove('target');
      svg.remove();
    }, this.animationDuration);
  }
}
