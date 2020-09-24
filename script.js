//global variables
var question = document.querySelector("#question");
var choice = document.querySelectorAll(".choices");
var choiceOneBtn = document.querySelector("#choiceOne");
var choiceTwoBtn = document.querySelector("#choiceTwo");
var choiceThreeBtn = document.querySelector("#choiceThree");
var choiceFourBtn = document.querySelector("#choiceFour");
var corIncID = document.querySelector("#corIncID");

var startButton = document.querySelector("#start");
var startContainer = document.querySelector("#startContainer");
var questionContainer = document.querySelector("#questionContainer");
var endContainer = document.querySelector("#endContainer");

var finalScore = document.querySelector("#finalScore");
var enterScoresBtn = document.querySelector("#enterScoreBtn");

//variables for the timer
var timer = document.querySelector("#timer");
var secondsLeft = 60;
var score = 0;

//objects with questions and answers
var questionOne = {
  questionText: "Commonly used data types DO NOT include:",
  choiceOne: "1. strings",
  choiceTwo: "2. booleans",
  choiceThree: "3. alerts",
  choiceFour: "4. numbers",
  correct: "3. alerts",
};

var questionTwo = {
  questionText:
    "The condition in an if / else statement is enclosed within ______.",
  choiceOne: "1. quotes",
  choiceTwo: "2. curly braces",
  choiceThree: "3. parentheses",
  choiceFour: "4. square brackets",
  correct: "3. parentheses",
};

var questionThree = {
  questionText: "Arrays in JavaScript can be used to store ______.",
  choiceOne: "1. numbers and strings",
  choiceTwo: "2. other arrays",
  choiceThree: "3. booleans",
  choiceFour: "4. all of the above",
  correct: "4. all of the above",
};

var questionFour = {
  questionText:
    "String values must be enclosed within ______ when being assigned to variables.",
  choiceOne: "1. commas",
  choiceTwo: "2. curly braces",
  choiceThree: "3. quotes",
  choiceFour: "4. parentheses",
  correct: "3. quotes",
};

//question counter

var questionCounter = 0;

//questions as an array of objects
var questionArray = [questionOne, questionTwo, questionThree, questionFour];

//add eventListeners
startButton.addEventListener("click", function (event) {
  startContainer.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  setTime();
  nextQuestion();
});

//question iteration
choice.forEach((element) => {
  element.addEventListener("click", function (event) {
    var userChoice = event.target.textContent;
    corIncID.textContent = "";
    if (userChoice === questionArray[questionCounter].correct) {
      corIncID.textContent = "Correct! You're a star. :D";
    } else {
      corIncID.textContent = "Incorrect! Yr still cute tho. ;)";
      secondsLeft -= 15;
    }
    questionCounter += 1;

    if (questionArray.length === questionCounter) {
      questionContainer.classList.add("hidden");
      endContainer.classList.remove("hidden");
      score = secondsLeft;
    } else {
      nextQuestion();
    }
    nextQuestion();
  });
});

function nextQuestion() {
  question.textContent = questionArray[questionCounter].questionText;
  choiceOneBtn.textContent = questionArray[questionCounter].choiceOne;
  choiceTwoBtn.textContent = questionArray[questionCounter].choiceTwo;
  choiceThreeBtn.textContent = questionArray[questionCounter].choiceThree;
  choiceFourBtn.textContent = questionArray[questionCounter].choiceFour;
}

//for the timer:
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "You have " + secondsLeft + " seconds remaining.";

    if (secondsLeft <= 0 || questionCounter === 4) {
      clearInterval(timerInterval);
      if (score < 0) {
        score = 0;
        timer.textContent = 0;
      }
      finalScore.textContent = "Your final score is " + score + "!";
    }
  }, 1000);
}

//committing initials & scores to local storage
enterScoresBtn.addEventListener("click", function (event) {
  var userInitials = document.querySelector("#userInitials").value;

  var userScore = finalScore.textContent.split(" ")[4].replace(/!+$/, "");
  localStorage.setItem("user initials", userInitials);
  localStorage.setItem("final score", userScore);
  renderScore();
});

function renderScore() {
  var userInitialsStored = localStorage.getItem("user initials");
  var userScoreStored = localStorage.getItem("final score");
}
