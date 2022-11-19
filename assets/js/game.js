// Declare const for DOM elements 
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progress-bar-full');

// Declare variables for game
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let quizQuestions = [];
let time = 2200;


// Start a new game

 function newGame(category) {
   score = 0;
   questionCounter = 0;
   quizQuestions = QUESTIONS_ARRAY[category];
   availableQuestions = [...quizQuestions];
   getNewQuestion();
 }


// Get a new question
function getNewQuestion() {
 localStorage.setItem('lastScore', score);
 if (availableQuestions.length === 0 || questionCounter >= MAX_NUMBER_QUESTIONS ) {
 
 //Brings the user to the game end page after the quiz is finished
  return window.location.assign('game-end.html');
}

 //Shows the user the number of question is answering
  questionCounter++;
  progressText.innerText ='Question ' +  questionCounter + '/' +  MAX_NUMBER_QUESTIONS ;

 //Update the progress any time the user answer a question
  progressBarFull.style.width = `${(questionCounter /  MAX_NUMBER_QUESTIONS ) * 100}%`;

 // Update the question to show the user after last question is answered
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  
 // Update the answers to show the user after last question is answered
  choices.forEach(choice => {
    const choiceNumber = choice.dataset.choice;
    choice.innerText = currentQuestion['choice' + choiceNumber];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}
