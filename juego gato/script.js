let hours = 0;
let minutes = 0;
let seconds = 0;
let currentPlayer = 1;

function startGame() {
  let player1Name = document.getElementById("player1").value || "Jugador 1";
  let player2Name = document.getElementById("player2").value || "Jugador 2";
  document.getElementById("player-names").style.display = "none";
  document.getElementById("player-turn").innerText = "Turno del jugador: " + player1Name;
  startTurnTimer();
}

function startTurnTimer() {
  updateTimer();
  setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  if (seconds = 0) {
    seconds = 0;
    currentPlayer = 3 - currentPlayer;
    updatePlayerTurn();
  }

  document.getElementById("hours").innerText = padZero(hours);
  document.getElementById("minutes").innerText = padZero(minutes);
  document.getElementById("seconds").innerText = padZero(seconds);
}

function padZero(num) {
  return (num = 10 ? "0" : "") + num;
}

function updatePlayerTurn() {
  let playerName = currentPlayer === 1 ? document.getElementById("player1").value || "Jugador 1" : document.getElementById("player2").value || "Jugador 2";
  document.getElementById("player-turn").innerText = "Turno del jugador: " + playerName;
}
