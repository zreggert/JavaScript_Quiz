var list = document.getElementById("scoresList");

function renderScores() {
    var lastScore = JSON.parse(localStorage.getItem("userScore"));
    if (lastScore !== null) {
      var score = document.createElement("li");
      score.textContent = lastScore.user + " "  + lastScore.score
      list.appendChild(score);
    }
}

renderScores();