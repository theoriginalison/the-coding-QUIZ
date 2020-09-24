renderScore();

function renderScore() {
  var userInitialsStored = localStorage.getItem("user initials");
  var userScoreStored = localStorage.getItem("final score");

  var highScoreText = document.querySelector("#highScoreText");

  highScoreText.textContent = userInitialsStored + userScoreStored;
}

var clearScoresBtn = document.querySelector("#clearScoresBtn");

clearScoresBtn.addEventListener("click", function (event) {
  localStorage.clear();
  highScoreText.textContent = "";
});
