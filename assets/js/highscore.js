var scoresListEl = document.getElementById("scoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var clearButton = document.getElementById("clear-btn");


scoresListEl.innerHTML = highScores
  .map(score => {
    return `<li class="high-scores">${score.user} ${score.score}`
  })
  .join("");

  function resetScoreBoard() {
    while (scoresListEl.firstChild) {
        scoresListEl.removeChild
        (scoresListEl.firstChild)
    }
  }

  clearButton.addEventListener("click", function(event) {
    localStorage.clear();
    resetScoreBoard();
  })
