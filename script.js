console.log("I'm working!"); //delete this when you're done!
console.log('YOU"RE DOING AMAZING, SWEETIE! ;D');

//create variables
var question = document.querySelector("#question");
var choiceOneBtn = document.querySelector("#choiceOne");
var choiceTwoBtn = document.querySelector("#choiceTwo");
var choiceThreeBtn = document.querySelector("#choiceThree");
var choiceFourBtn = document.querySelector("#choiceFour");

//variables for the timer
var timer = document.querySelector("#timer");
var secondsLeft = 60;

//create objects with questions and answers
var questionOne = {
  questionText: "Commonly used data types DO NOT include:",
  choiceOne: "1. strings",
  choiceTwo: "2. booleans",
  choiceThree: "3. alerts",
  choiceFour: "4. numbers",
};

// how to call objecs: console.log(questionOne.questionText);

var questionTwo = {
  questionText:
    "The condition in an if / else statement is enclosed within ______.",
  choiceOne: "1. quotes",
  choiceTwo: "2. curly braces",
  choiceThree: "3. parentheses",
  choiceFour: "4. square brackets",
};

var questionThree = {
  questionText: "Arrays in JavaScript can be used to store ______.",
  choiceOne: "1. numbers and strings",
  choiceTwo: "2. other arrays",
  choiceThree: "3. booleans",
  choiceFour: "4. all of the above",
};

var questionFour = {
  questionText:
    "String values must be enclosed within ______ when being assigned to variables.",
  choiceOne: "1. commas",
  choiceTwo: "2. curly braces",
  choiceThree: "3. quotes",
  choiceFour: "4. parentheses",
};

//created strings from the question objects
//remember that .parse is the opposite of .stringify !!
var q1String = JSON.stringify(questionOne);
var q2String = JSON.stringify(questionTwo);
var q3String = JSON.stringify(questionThree);
var q4String = JSON.stringify(questionFour);

//questions as an array of objects
//questions as an array of strings
var questionArray = [questionOne, questionTwo, questionThree, questionFour];
var qArrayString = [q1String, q2String, q3String, q4String];

//add eventListeners
choiceOneBtn.addEventListener("click", function () {});
choiceTwoBtn.addEventListener("click", function () {});
choiceThreeBtn.addEventListener("click", function () {});
choiceFourBtn.addEventListener("click", function () {});

//create the iteration through the questions...even though rn it's only console logging number 1, 2, 3, 4 (the length of the array)
//How to make elements of an object appear in the HTML?
for (let i = 0; i < questionArray.length; i++) {
  console.log(questionArray[i]);
  //question.appendChild.(questionOne.questionText)//trying to append an object property to a place in the HTML
  //should I use this? document.getElementById(id).innerHTML = new HTML
}
//this is how I'm trying to call the questionText property of the questionOne object into the h1 of #question
//but I want this to be an array! Or to be able to cycle through this
question.innerHTML = questionOne.questionText;
choiceOneBtn.innerHTML = questionOne.choiceOne;
choiceTwoBtn.innerHTML = questionOne.choiceTwo;
choiceThreeBtn.innerHTML = questionOne.choiceThree;
choiceFourBtn.innerHTML = questionOne.choiceFour;

//commit to local storage the score on the High Scores page
//differentiate between right and wrong answer -- can make the same button the right answer every time?
//need welcome screen to come up first, before anything else

//for the timer:

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "You have " + secondsLeft + " seconds remaining.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("You did the timer!");
      //sendMessage(); // instead of sendMessage, need to go to the score page!!
    }

    //need to also have an if statement referring to if the last question is answered
  }, 1000);
}

//commented out bc this is where the "colorsplosion" happens, and you'll replace this with the "All done" message and the score, w a place to enter initials (then initials have to go to local storage)
// function sendMessage() {
//     timeEl.textContent = " ";

//     var imgEl = document.createElement("img");

//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);

//   }

setTime();
