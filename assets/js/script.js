/* jshint esversion: 8 */

const beginButton = document.getElementById('start-btn');
const questionBoxItem = document.getElementById('question-box');
const questionItem = document.getElementById('question');
const answerItems = document.getElementById('answer-buttons');
let mixQuestions, currentQuestionNumber;

beginButton.addEventListener('click', beginGame);

/**
 * function for initiating the game when user clicks on the 'Let's Go' button,
 * function for selecting questions at random
 */
function beginGame() {
    beginButton.classList.add('vanish');
    mixQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionNumber = 0;
    questionBoxItem.classList.remove('vanish');
    nextQuestion();
}

/**
 * function for initiating what happens when user clicks on the 'next' button
 */
function nextQuestion() {
    getQuestion(mixQuestions[currentQuestionNumber]);
}

/** 
 * function for displaying questions
*/
function getQuestion(question) {
    questionItem.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.option
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerItems.appendChild(button)
    })
}

function resetState() {

}

/**
 * function for initiating what happens when a user selects an answer
 */
function chooseAnswer() {

}

function gameOver() {

}

function bodyStatus() {

}

function bodyStatusRemove() {

}
