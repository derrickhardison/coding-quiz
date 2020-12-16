// JavaScript Variables

var interval;
var seconds = 20;
var currentQuestionIndex = 0;

// DOM elements

var questionContentEl = document.getElementById("questionContent");
var answerContentEl = document.getElementById("answerContent");
var timerDisplayEl = document.getElementById("timerDisplay");

// timerDisplayEl.textContent = seconds;

var codeQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },

  {
    question: "The condition in an if /else statement is enclosed within ____:",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
  },

  {
    question: "Arrays in JavaScript can be used to store:",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above:",
    ],
    correctAnswer: "all of the above",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
    correctAnswer: "console log",
  },

  {
    question:
      "String values must be enclosed within ___ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "parentheses",
  },
];

var buttonEl = document.getElementById("submitBtn");
buttonEl.setAttribute("style", "display: block; margin: auto;");

buttonEl.addEventListener("click", function () {
  startTimer();
  renderNextQuestion();
});

// Function Definitions

function startTimer() {
  interval = setInterval(function () {
    seconds--;
    if (seconds === 0) {
      clearInterval(interval);
      gameOver();
    }
    //console.log(seconds);
  }, 1000);
}

function gameOver() {
  alert("times up!");
}

function answerClick(event) {
  if (event.target.matches("button")) {
    //console.log(event.target);

    var answer = event.target.textContent;

    if (codeQuestions[currentQuestionIndex].correctAnswer === answer) {
      console.log("correct answer clicked");
      currentQuestionIndex++;
    } else {
      console.log("wrong answer");
      currentQuestionIndex++;
    }
  }
  renderNextQuestion();
}

function response() {
  // if (userAnswer === correctAnswer) {
  //     currentQuestionIndex++;
  //   } else {
  //     alert("Wrong answer");
  //   }
}

function renderNextQuestion() {
  questionContentEl.textContent = codeQuestions[currentQuestionIndex].question;
  answerContentEl.innerHTML = "";
  buttonEl.remove();

  for (i = 0; i < codeQuestions[currentQuestionIndex].choices.length; i++) {
    var selectButton = document.createElement("button");
    selectButton.textContent = codeQuestions[currentQuestionIndex].choices[i];
    //selectButton.addEventListener("click", function () {});
    selectButton.addEventListener("click", answerClick);
    answerContentEl.appendChild(selectButton);
  }
}

// Function Calls

// Event Listeners

// Rough drafts
//   var pTag = document.createElement("p");
//   pTag.textContent= codeQuestions[currentQuestionIndex].choices[i];
//   answerContentEl.appendChild(pTag);
