const squareElement = document.querySelectorAll(".squares");
const quitElement = document.querySelector(".quit");
const winState = document.querySelector(".winstate");
const winStateMsg = document.getElementById("msg");
const refreshButtonElement = document.querySelector(".restart");
const startButtonElement = document.getElementById("startButton");
const winner = document.querySelector(".winner");

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
const cpuMoves = [];

squareElement.forEach((square, idx) => {
  square.addEventListener("click", () => {
    handleUserAction(square, idx);
    userMoves.push(idx);
    finalVerdict(userMoves, "O");
    console.log("userMoves:", userMoves);
  });
});

function handleUserAction(square, position) {
  getPosition(position);
  updateBoard(position, square);
}
3;
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
  console.log("cpuMoves:", cpuMoves);

  board[row][column] = 1;

  setTimeout(() => {
    squareElement[position].classList.add("cross");
  }, 500);
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

quitElement.addEventListener("click", () => {
  window.location.reload();
  winState.classList.remove("fullscreen");
  winStateMsg.classList.remove("fullscreen");
});

function endGame() {
  winState.classList.add("fullscreen");
  winStateMsg.classList.add("fullscreen");
}

refreshButtonElement.addEventListener("click", refresh);
startButtonElement.addEventListener("click", () => {
  document.querySelector(".welcome").classList.add("start");
});

function refresh() {
  squareElement.forEach((square) =>
    square.classList.remove(square.classList.split(" ").pop())
  );
  board.map((el) => el.map((innerEl) => (innerEl = null)));
}

const audioELement = document.querySelector(".audioControl");
let clicked = true;
audioELement.addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    document.getElementById("audio").pause();
    audioELement.innerHTML =
      '<i class="fa fa-volume-off" aria-hidden="true"></i>';
  } else {
    document.getElementById("audio").play();
    audioELement.innerHTML =
      '<i class="fa fa-volume-up" aria-hidden="true"></i>';
  }
});
