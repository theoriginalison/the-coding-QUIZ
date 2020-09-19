console.log("I'm working!");

//create variables
var choiceOneBtn = document.querySelector("#choiceOne")
var choiceTwoBtn = document.querySelector("#choiceTwo")
var choiceThreeBtn = document.querySelector("#choiceThree")
var choiceFourBtn = document.querySelector("#choiceFour")
var timer = document.querySelector("#timer")

//create objects with questions and answers
var questionOne = {
    questionText: "Commonly used data types DO NOT include:"
    choiceOne: "1. strings"
    choiceTwo: "2. booleans"
    choiceThree: "3. alerts"
    choiceFour: "4. numbers"
}

var questionTwo = {
    questionText: "The condition in an if / else statement is enclosed within ______."
    choiceOne: "1. quotes"
    choiceTwo: "2. curly braces"
    choiceThree: "3. parentheses"
    choiceFour: "4. square brackets"
}

var questionThree = {
    questionText: "Arrays in JavaScript can be used to store ______."
    choiceOne: "1. numbers and strings"
    choiceTwo: "2. other arrays"
    choiceThree: "3. booleans"
    choiceFour: "4. all of the above"
}

var questionFour = {
    questionText: "String values must be enclosed within ______ when being assigned to variables."
    choiceOne: "1. commas"
    choiceTwo: "2. curly braces"
    choiceThree: "3. quotes"
    choiceFour: "4. parentheses"
}