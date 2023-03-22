const squareElement = document.querySelectorAll(".squares");
const quitElement = document.querySelector(".quit");

const winningArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 3, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const userMoves = [];

squareElement.forEach((square, idx) => {
  square.addEventListener("click", () => {
    handleUserAction(square, idx);
  });
});

function handleUserAction(square, position) {
  square.classList.add("circle");
  getPosition(position);
  updateBoard(position);
  getRandomPosition();
}

function getPosition(idx) {
  return [Math.floor(idx / 3), idx % 3];
}

function updateBoard(idx) {
  const [row, column] = getPosition(idx);
  board[row][column] = 0;
}

function getRandomPosition() {
  const [row, col] = getPosition(Math.floor(Math.random() * 9));

  while (board[row][col] !== null) {
    const stoppingCondition = board
      .map((row) =>
        row
          .map((el) => (el !== null ? (el = 1) : (el = null)))
          .reduce((a, b) => a + b, 0)
      )
      .reduce((a, b) => a + b, 0);
    if (stoppingCondition === 9) break;
  }

  markRandomPosition(row, col);
  return;
}

function markRandomPosition(row, column) {
  const position = row * 3 + column;
  board[row][column] = 1;
  console.log(board);

  setTimeout(() => {
    squareElement[position].classList.add("cross");
  }, 500);
  console.log(board);
}

quitElement.addEventListener("click", quitGame);

function quitGame() {
  console.log("clicked");
  const winState = document.querySelector(".winstate");
  const winStateMsg = document.getElementById("msg");
  winState.classList.add("fullscreen");
  winStateMsg.classList.add("fullscreen");
}
