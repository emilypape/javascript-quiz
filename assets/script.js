var titleScreen = document.querySelector('#title-screen');
var titlePage = document.querySelector('#startPage');
var wrongAnswerReaction = document.querySelector('#answer-validity');
var questionContainer = document.querySelector('#question-container');
var questionPromptContainer = document.querySelector('#question-prompt-container');
var answerButtonContainerOne = document.querySelector('#answer-button-container1');
var answerButtonContainerTwo = document.querySelector('#answer-button-container2');
var answerButtonContainerThree = document.querySelector('#answer-button-container3');
var answerButtonContainerFour = document.querySelector('#answer-button-container4');

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

function startGame () {
    //change title page display to none (add hidden class to title page)
    titleScreen.classList.add('hidden');
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

}

function checkAnswer() {
    //check which answer is right 
    var currentQuestion = questions[count];
    var selectedAnswer = this.textContent
    //check which answers are wrong
    if(selectedAnswer === question.correctAnswers){
        //add hidden to wrong

        score = (score + 10);
        //add points for correctness
        //move on to next question
        //fire next question function
    }
    else{
        //lose points 
        //display wrong
    }
    //right answers = 10pts
    //wrong answers = -5pts
    //right answers move to the next question
    //wrong answers guess again
}

titleScreen.addEventListener('click', startGame);
answerButtonContainerOne.addEventListener('click', checkAnswer);
answerButtonContainerTwo.addEventListener('click', checkAnswer);
answerButtonContainerThree.addEventListener('click', checkAnswer);
answerButtonContainerFour.addEventListener('click', checkAnswer);
