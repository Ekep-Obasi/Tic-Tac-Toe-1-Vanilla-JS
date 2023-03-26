const squareElement = document.querySelectorAll(".squares");
const audioELement = document.querySelector(".audioControl");
let clicked = true;
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
