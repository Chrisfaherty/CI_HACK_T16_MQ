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

/**
* Compare the answer chosen by the user with the right answer if true the user will see a message in green if wrong the message will be in red
* */ 
choices.forEach(choice => {
    choice.addEventListener('click', e => {
      if (!acceptingAnswers) return;
  
      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset.choice;
      const classToApply =
      selectedAnswer == currentQuestion.correctAnswer ? 'correct' : 'incorrect';
  
     // Array of available right answer message reply back to the user
      let rightAnswerReply = ['YOUR ANSWER IS RIGHT! WELL DONE!',
                              'RIGHT ANSWER!', 
                              'RIGHT ANSWER! YOU ARE DOING WELL!',
                              'LOOKS LIKE YOU KNOW ABOUT MUSIC!'];
      const rightAnswerReplyIndex = Math.floor(Math.random() * rightAnswerReply.length);
      const rightAnswerReplyRondom = rightAnswerReply[rightAnswerReplyIndex];
  
     // Array of available wrong answer message reply back to the user 
      let wrongAnswerReply = ['WRONG ANSWER!',
                              'WRONG ANSWER! BETTER LUCK NEXT TIME!',
                              'WRONG ANSWER! ARE YOU WELL TODAY?'];
      const wrongAnswerReplyIndex = Math.floor(Math.random() * wrongAnswerReply.length);
      const wrongAnswerReplyRandom = wrongAnswerReply[wrongAnswerReplyIndex];
      selectedChoice.parentElement.classList.add(classToApply);
    
      if (selectedAnswer == currentQuestion.correctAnswer ) {
          incrementScore(CORRECT_QUESTION);
  
            if (questionCounter <= 2){
  
                question.innerHTML = rightAnswerReply[1];
                
             } else if (questionCounter ==  MAX_NUMBER_QUESTIONS){
  
               question.innerHTML = rightAnswerReply[0];
  
             } else {
  
                question.innerHTML = rightAnswerReplyRondom;
             }
                question.classList.add('correct-text');
                sfx.right.play();
  
      } else {
  
             if(questionCounter ==  MAX_NUMBER_QUESTIONS  || questionCounter <= 2) {
  
                question.innerHTML = wrongAnswerReply[0];
  
             } else {
  
                 question.innerHTML = wrongAnswerReplyRandom;
             }
  
             question.classList.add('incorrect-text');
             sfx.wrong.play();
     }  
  
     // Set the time out that user will see the reply message back after answered a question
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        question.classList.remove('correct-text');
        question.classList.remove('incorrect-text');
        getNewQuestion();
      }, time);
    });
  });

  // Update and shows the user the score
function incrementScore(num){
    score += num;
    scoreText.innerText = score;
  }
  
  
  // Select the right category choose by the user and start new game
   document.addEventListener("DOMContentLoaded", () => {
    const quizCategory = document.getElementById('category').dataset.category;
    newGame(quizCategory);
  });
  
  console.log(currentQuestion.correctAnswer );