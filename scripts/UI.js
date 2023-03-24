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
  window.location.reload();
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
