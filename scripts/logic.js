squareElement.forEach((square, idx) => {
  square.addEventListener("click", () => {
    handleUserAction(square, idx);
    userMoves.push(idx);
    finalVerdict(userMoves, "O");
  });
});

function handleUserAction(square, position) {
  getPosition(position);
  updateBoard(position, square);
}

function getPosition(idx) {
  return [Math.floor(idx / 3), idx % 3];
}

function updateBoard(idx, square) {
  const [row, column] = getPosition(idx);
  if (board[row][column] === null) {
    square.classList.add("circle");
    board[row][column] = 0;
    getRandomPosition();
  }
}

function getRandomPosition() {
  const [row, col] = getPosition(Math.floor(Math.random() * 9));
 
  if (board[row][col] !== null) {
    getRandomPosition();
    const totalMovesArr = board
      .map((row) =>
        row
          .map((el) => (el !== null ? (el = 1) : (el = null)))
          .reduce((a, b) => a + b, 0)
      )
      .reduce((a, b) => a + b, 0);
    if (totalMovesArr > 7) {
      finalVerdict([0, 1, 2], "No one");
      endGame();
    }
  } else {
    markRandomPosition(row, col);
  }
  return;
}

function markRandomPosition(row, column) {
  const position = row * 3 + column;
  cpuMoves.push(position);
  finalVerdict(cpuMoves, "X");

  board[row][column] = 1;

  setTimeout(() => {
    squareElement[position].classList.add("cross");
  }, 750);
}

function finalVerdict(moves, winningPlayer) {
  winningArray.forEach((wincondition) => {
    const decision = wincondition.every((el) => moves.includes(el));
    if (decision) {
      winner.innerHTML = winningPlayer;
      endGame();
      return decision;
    }
  });
}