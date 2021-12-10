/* jshint esversion: 8 */

const beginButton = document.getElementById('start-btn');
const questionBoxItem = document.getElementById('question-box');
const questionItem = document.getElementById('question');
const answerItems = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
let mixQuestions, currentQuestionNumber;
let correctAnswers = 0;
let wrongAnswers = 0;

beginButton.addEventListener('click', beginGame);
nextButton.addEventListener('click', nextQuestion);

/**
 * function for initiating the game when user clicks on the 'Let's Go' button,
 * function for selecting questions at random
 */
function beginGame() {
    beginButton.classList.add('vanish');
    mixQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionNumber = 0;
    questionBoxItem.classList.remove('vanish');
    nextQuestion();
}

/**
 * function for initiating what happens when user clicks on the 'next' button
 */
function nextQuestion() {
    resetState();
    if (currentQuestionNumber <= 9) {
        currentQuestionNumber++;
    getQuestion(mixQuestions[currentQuestionNumber]);
    } else {
        gameOver();
    }
    console.log('correct answers = ' + correctAnswers);
    console.log('wrong answers = ' + wrongAnswers);
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
    });
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
    bodyStatus(document.body, right);
    Array.from(answerItems.children).forEach(button => {
        bodyStatus(button, button.dataset.correct);
        button.disabled = true;
    });
    if (right) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }

    if (mixQuestions.length > currentQuestionNumber + 1) {
    nextButton.classList.remove('vanish');
    }  else {
        beginButton.innerText = 'Restart';
        beginButton.classList.remove('vanish');
    }
}

/**
 * function to display user score and restar button
 */
function gameOver() {
    questionItem.innerHTML = `<h2>GAME OVER: CORRECT = ${correctAnswers}, WRONG = ${wrongAnswers}</h2> <br><br><br><br><br> 
    <button id="restart-btn" onclick="location.reload()">RESTART</button><br><br>
    <a href="index.html" id="home-btn">HOME</a>`;  
}

/** 
 * function to set status based on whether user answer is right or wrong
*/
function bodyStatus(entity, right) {
    bodyStatusRemove(entity);
    if (right) {
        entity.classList.add('correct');
    } else {
        entity.classList.add('wrong');
    }
}

/**
 * function to remove the status set from the above function
 */
function bodyStatusRemove(entity) {
    entity.classList.remove('correct');
    entity.classList.remove('wrong');
}