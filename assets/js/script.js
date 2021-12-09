/* jshint esversion: 8 */

const beginButton = document.getElementById('start-btn');
const questionBox = document.getElementById('question-box');

beginButton.addEventListener('click', beginGame);

/**
 * function for initiating the game when user clicks on the 'Let's Go' button
 */
function beginGame() {
    beginButton.classList.add('vanish');
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