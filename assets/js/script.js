/* jshint esversion: 8 */

const beginButton = document.getElementById('start-btn');
const questionBox = document.getElementById('question-box');
let mixQuestions, currentQuestionNumber;

beginButton.addEventListener('click', beginGame);

/**
 * function for initiating the game when user clicks on the 'Let's Go' button,
 * function for selecting questions at random
 */
function beginGame() {
    beginButton.classList.add('vanish');
    mixQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionNumber = 0
    questionBox.classList.remove('vanish');
    nextQuestion();
}

function nextQuestion() {

}

function getQuesiton() {

}

function resetState() {

}

function chooseAnswer() {

}

function gameOver() {

}

function bodyStatus() {

}

function bodyStatusRemove() {

}