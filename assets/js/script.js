var startButton = document.querySelector(".start");
var timer = document.querySelector(".timer");
var mainContainer = document.querySelector("main");
var questionContainerEL = document.getElementById("questions-container");
var answerButtonsEl = document.getElementById("answer-buttons");
var questionEl = document.getElementById("question");

var currentQuestionIndex;

var timerId;
var counter = 75;

var quizQuestions = [
    {
        question: "Commonly used data types do not inlude ______.",
        answers: [
            {text: "alerts", correct: true},
            {text: "boolean", correct: false},
            {text: "numbers", correct: false},
            {text: "strings", correct: false},
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within ______.",
        answers: [
            {text: "quotes", correct: false},
            {text: "curly brackets", correct: false},
            {text: "parentheses", correct: true},
            {text: "square brackets", correct: false},
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: [
            {text: "numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "boolenas", correct: false},
            {text: "all of the above", correct: true},
        ]
    },
    {
        question: "String values must be enclosed within ______",
        answers: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true},
            {text: "parentheses", correct: false},
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is ______",
        answers: [
            {text: "JavaScript", correct: false},
            {text: "console.log", correct: true},
            {text: "terminal/bash", correct: false},
            {text: "for loops", correct: false},
        ]
    },
];


timer.textContent = counter;

startButton.addEventListener("click", function(event) {
    //console.log("button clicked");
    startTimer();
    startGame();
})



function startGame() {
    mainContainer.classList.add("hide");
    questionContainerEL.classList.remove("hide");
    currentQuestionIndex = 0;
    nextQuestion();
}

function nextQuestion() {
    displayQuestion(quizQuestions[currentQuestionIndex]);
}

function displayQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.classList.add("answer-button")
        button.innerText = answer.text
        answerButtonsEl.appendChild(button)
    });
}



function startTimer() {
    timerId = setInterval(function() {
        counter--;
        timer.textContent = counter;

        console.log(counter); 
    }, 1000)
}

function stopTimer() {
    clearInterval(timerId);
}

