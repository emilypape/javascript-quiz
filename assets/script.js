var skipToHighScores = document.querySelector('#high-scores')
var titleScreen = document.querySelector('#title-screen');
var titlePage = document.querySelector('#startPage');
var wrongAnswerReaction = document.querySelector('#answer-validity');
var questionContainer = document.querySelector('#question-container');
var enterInitialsPage = document.querySelector('#user-info-input');
var enterInitialsInput = document.querySelector('#input-text-area')
var submitBtn = document.querySelector('#submit-btn');
var highScores = document.querySelector('#high-score-list');
var scoresList = document.querySelector('#scores-list');
var replay = document.querySelector('#replay-button');
var questionPromptContainer = document.querySelector('#question-prompt-container');
var answerButtonContainerOne = document.querySelector('#answer-button-container1');
var answerButtonContainerTwo = document.querySelector('#answer-button-container2');
var answerButtonContainerThree = document.querySelector('#answer-button-container3');
var answerButtonContainerFour = document.querySelector('#answer-button-container4');
var timerContainer = document.querySelector('#timer-container');

var questions = [
    {
        prompt: 'How do you send items to localStorage?',
        correctAnswers: 'setItem',
        wrongAnswers: ['getItem', 'localStorage.go', 'JSON.parse']
    },

    {
        prompt: 'How do you write an ID in Javascript?',
        correctAnswers: '#',
        wrongAnswers: ['.', '*', '@']
    },

    {
        prompt: 'Where in the HTML should you put the <script> tag for the .js file?',
        correctAnswers: 'Between the closing body and html tags',
        wrongAnswers: ['Before the opening body tag', 'In the head element', 'Anywhere in the file, it doesnt matter']
    },

    {
        prompt: 'What dom command gives buttons clickable actions?',
        correctAnswers: '.addEventListener',
        wrongAnswers: ['.setAttribute', '.appendChild', '.textContent']
    },

    {
        prompt: 'How do you call a function in JavaScript?',
        correctAnswers: 'function()',
        wrongAnswers: ['call function()', 'function call', 'var = callFunction']
    }
]

var count = 0
var score = 0
var intervalId
var seconds =  60

function timer() {
    if (seconds <= 0) {
        endGame()
    } else {
        timerContainer.textContent = seconds;
        seconds = seconds - 1
    }
}

function navBarScoreButton() {
    enterInitialsPage.classList.add('hidden');
    titleScreen.classList.add('hidden');
    questionContainer.classList.add('hidden');

    highScorePage();
}

function shuffleAnswers(answers) {
    // function that randomly generates a positive or negative number
    function randomNumber(){
        return Math.random() - .5;
    }
    // use sort to randomly move answers and then set new answers to shuffled answers
    var shuffledAnswers = answers.sort(randomNumber);
    //return shuffled answers for question use
    return shuffledAnswers;
}

function checkAnswer() {
    //check which answer is right 
    var currentQuestion = questions[count];
    var selectedAnswer = this.textContent
    //check which answers are wrong
    if (selectedAnswer === currentQuestion.correctAnswers) {
        //add hidden to wrong
        wrongAnswerReaction.classList.add('hidden');
        //add points for correctness
        score = (score + 10);
        //fire next question function
        nextQuestion();
    } else {
        //display wrong
        wrongAnswerReaction.classList.remove('hidden');
        //lose points 
        score = (score - 5);
        seconds = (seconds - 5);
    }
    //right answers = 10pts
    //wrong answers = -5pts
    //right answers move to the next question
    //wrong answers guess again
    
}

function startGame () {
    //change title page display to none (add hidden class to title page)
    highScores.classList.add('hidden');
    titleScreen.classList.add('hidden');
    seconds = 60
    //remove hidden from question container
    questionContainer.classList.remove('hidden');
    //grab first question at a time using count to index the array
    var firstQuestionObject = questions[count];
    //put all questions in an array and shuffle that array 
    var answersArray = [...firstQuestionObject.wrongAnswers, firstQuestionObject.correctAnswers]
    var shuffledAnswerArray = shuffleAnswers(answersArray)
    
    //put question data in question container
    questionPromptContainer.textContent = firstQuestionObject.prompt
    answerButtonContainerOne.textContent = shuffledAnswerArray[0]
    answerButtonContainerTwo.textContent = shuffledAnswerArray[1]
    answerButtonContainerThree.textContent = shuffledAnswerArray[2]
    answerButtonContainerFour.textContent = shuffledAnswerArray[3]

    intervalId = setInterval(timer, 1000);    
}

function nextQuestion() {
    count++;

    
    if (count >= questions.length) {
        // run end game
        endGame();
    } else {
        var questionsObject = questions[count];
        var answersArray = [...questionsObject.wrongAnswers, questionsObject.correctAnswers]
        var shuffledAnswerArray =shuffleAnswers(answersArray);
        //call shuffleAnswers
        questionPromptContainer.textContent = questionsObject.prompt
        answerButtonContainerOne.textContent = shuffledAnswerArray[0]
        answerButtonContainerTwo.textContent = shuffledAnswerArray[1]
        answerButtonContainerThree.textContent = shuffledAnswerArray[2]
        answerButtonContainerFour.textContent = shuffledAnswerArray[3]
        //display new object question from question array
    }
}

function endGame() {
    clearInterval(intervalId)
    questionContainer.classList.add('hidden');
    enterInitialsPage.classList.remove('hidden');
    
    function initialsRetrieval() {
        //pull all current scores from local storage 'initials' key
        var storedInitials = localStorage.getItem('initials')
        if (storedInitials === null) {
            storedInitials = {};
        } else {
            storedInitials = JSON.parse(storedInitials);
        }
        // turn into an array/object

        //get initials from current plyaer
        var inputInitials = document.querySelector('#input-text-area').value;
        //add new initials to list of old initials
        storedInitials[inputInitials] = score;

        var initialsJSON = JSON.stringify(storedInitials)
        //set the initials and new initials in local storage in JSON format
        localStorage.setItem('initials', initialsJSON);

        highScorePage()
    }

    submitBtn.addEventListener('click', initialsRetrieval);
}

function highScorePage() {
    enterInitialsPage.classList.add('hidden');
    highScores.classList.remove('hidden');

    if (intervalId) {
        clearInterval(intervalId)
    };

    var playerStatsRetrieval = localStorage.getItem('initials');
    playerStatsRetrieval = JSON.parse(playerStatsRetrieval);

    var scoresArray = Object.entries(playerStatsRetrieval);
    for (var i = 0; i < scoresArray.length; i++) {
        scoreBox = document.createElement('li');
        scoreBox.className = 'scoreItems';
        scoreBox.textContent = scoresArray[i][0] + ': ' + scoresArray[i][1];
        scoresList.appendChild(scoreBox);
    }
}

skipToHighScores.addEventListener('click', navBarScoreButton);
titleScreen.addEventListener('click', startGame);
answerButtonContainerOne.addEventListener('click', checkAnswer);
answerButtonContainerTwo.addEventListener('click', checkAnswer);
answerButtonContainerThree.addEventListener('click', checkAnswer);
answerButtonContainerFour.addEventListener('click', checkAnswer);
replay.addEventListener('click', startGame);

//view highscores clears interval if interval exists
// wrongAnswers takes away from seconds