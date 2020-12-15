var interval;
var seconds = 60;
var currentQuestionIndex = 0;

// DOM elements
var questionContentEl = document.getElementById("questionContent");
var answerContentEl = document.getElementById("answerContent");

var codeQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },

  {
    question: "The condition in an if /else statement is enclosed within ____",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
  },
];

var buttonEl = document.getElementById("submitBtn");
buttonEl.setAttribute("style", "display: block; margin: auto;");

buttonEl.addEventListener("click", function () {
  alert("I've been clicked");
  startTimer();
  renderNextQuestion();
});
function renderNextQuestion() {
  questionContentEl.textContent = codeQuestions[currentQuestionIndex].question;
  answerContentEl.innerHTML = "";

  for (i = 0; i < codeQuestions[currentQuestionIndex].choices.length; i++){

    var selectButton = document.createElement("button");
    selectButton.textContent=codeQuestions[currentQuestionIndex].choices[i];
    answerContentEl.appendChild(selectButton);

    //   var pTag = document.createElement("p");
    //   pTag.textContent= codeQuestions[currentQuestionIndex].choices[i];
    //   answerContentEl.appendChild(pTag);
  }
}
function gameOver() {
  alert("times up!");
}
function startTimer() {
  interval = setInterval(function () {
    seconds--;
    if (seconds === 0) {
      clearInterval(interval);
      gameOver();
    }
    console.log(seconds);
  }, 1000);
}
