var startButton = document.querySelector(".start");
var timer = document.querySelector(".timer");
var mainContainer = document.querySelector("main");
var timerId;
var counter = 75



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