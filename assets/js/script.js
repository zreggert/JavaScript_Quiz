var startButton = document.querySelector(".start");
var timer = document.querySelector(".timer");
var mainContainer = document.querySelector("main");


var timerId;
var counter = 75;


timer.textContent = counter;

startButton.addEventListener("click", function(event) {
    //console.log("button clicked");
    startTimer();
    displayQuestion();
})

function displayQuestion() {
    mainContainer.innerHTML = "";
    mainContainer.innerHTML
}

function startTimer() {
    timerId = setInterval(function() {
        counter--;
        timer.textContent = counter;

        console.log(counter); 
    }, 1000)
}

function stopTimer () {
    clearInterval(timerId);
}

var quizQuestions = [
    {
        question: "Commonly used data types do not inlude ______.",
        choices: ["alerts", "boolean", "numbers", "strings"],
        answer: 0
    },
    {
        question: "The condition in an if/else statement is enclosed within ______.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 3
    },
    {
        question: "String values must be enclosed within ______",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is ______",
        choices: ["JavaScript", "console.log", "terminal/bash", "for loops"],
        answer: 1
    },
];