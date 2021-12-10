/* jshint esversion: 8 */

const beginButton = document.getElementById('start-btn');
const questionBoxItem = document.getElementById('question-box');
const questionItem = document.getElementById('question');
const answerItems = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
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
    resetState();
    getQuestion(mixQuestions[currentQuestionNumber]);
}

/** 
 * function for displaying questions
*/
function getQuestion(question) {
    questionItem.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.option;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', chooseAnswer);
        answerItems.appendChild(button);
    })
}

/**
 * function to reset question-box and game-body to its default state everytime a new question is set
 */
function resetState() {
    nextButton.classList.add('vanish');
    while (answerItems.firstChild) {
        answerItems.removeChild(answerItems.firstChild);
    }
}

/**
 * function for initiating what happens when a user selects an answer
 */
function chooseAnswer(e) {
    const choosenButton = e.target;
    const right = choosenButton.dataset.correct;
    bodyStatus(document.body, right)
    Array.from(answerItems.children).forEach(button => {
        bodyStatus(button, button.dataset.correct)
        button.disabled = true
    });
}

function gameOver() {

}

/** 
 * function to set status based on whether user answer is right or wrong
*/
function bodyStatus(entity, right) {
    bodyStatusRemove(entity)
    if (right) {
        entity.classList.add('correct');
    } else {
        entity.classList.add('wrong');
    }
}

function bodyStatusRemove(entity) {
    entity.classList.remove('correct')
    entity.classList.remove('wrong')
}
