const squareElement = document.querySelectorAll(".squares");
const player = null;
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function handleUserAction(square, position) {
  square.classList.add("circle");
  getPosition(position);
  updateBoard(position);
  getRandomPosition();
}

squareElement.forEach((square, idx) => {
  square.addEventListener("click", () => {
    handleUserAction(square, idx);
  });
});

function getPosition(idx) {
  return [Math.floor(idx / 3), idx % 3];
}

function updateBoard(idx) {
  const [row, column] = getPosition(idx);
  board[row][column] = "0";
  console.log(board);
}

function getRandomPosition() {
  console.log("random position");
  const randomPosition = Math.floor(Math.random() * 9);
  const [row, col] = getPosition(randomPosition);
  console.log(row, col);
  while (board[row][col] !== null) {
    getRandomPosition();
    const stoppingCondition = board
      .map((row) => row.filter((el) => el !== null).reduce((a, b) => a + b, 0))
      .reduce((a, b) => a + b, 0);
    if (stoppingCondition.length === 9) break;
    console.log(` stop : ${stoppingCondition}`);
  }
  markRandomPosition(row, col);
  return;
}

function markRandomPosition(row, column) {
  const position = row * 3 + column;
  setTimeout(() => {
    squareElement[position].classList.add("cross");
  }, 500);
  console.log(board);
}
