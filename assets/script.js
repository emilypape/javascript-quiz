var startQuizBtnEL = document.querySelector('#startBtn');
var clearWelcomePgEl = document.querySelector('#startPage');
var questionContainer = document.querySelector('#question-container');
var bodyEl = document.querySelector('#bodyEL');
var answerReactions = document.querySelector('#answer-validity');

function wrongAnswer() {
    answerReactions.className = "wrongAnswerStyles";
    var wrongAnswers = document.createElement('div');
    wrongAnswers.className = "wrongAnswerStylesDiv";
    wrongAnswers.textContent = "Wrong!";
    answerReactions.appendChild(wrongAnswers);
    
}

function startQuiz() {
   questionContainer.removeChild(clearWelcomePgEl);
   question1();
}

function question1() {
    // ask question - put all the html where it needs to be
    var questionBox1 = document.createElement('div');
    questionBox1.className = "questionStyles";
    questionBox1.id = "#question-box-1"
    questionBox1.textContent = "How do you write an ID in Javascript?";
    questionContainer.appendChild(questionBox1);

    var answerBoxObj = {
        answer1: '1. .idName',
        answer2: '2. -idName',
        answer3: '3. #idName',
        answer4: '4. idName'
    }

    var answerBox1 = document.createElement('button');
    answerBox1.className = "purpleAnswerBtn";
    answerBox1.textContent = answerBoxObj.answer1;
    questionBox1.appendChild(answerBox1);

    var answerBox2 = document.createElement('button');
    answerBox2.className = "purpleAnswerBtn";
    answerBox2.textContent = answerBoxObj.answer2;
    questionBox1.appendChild(answerBox2);

    var answerBox3 = document.createElement('button');
    answerBox3.className = "purpleAnswerBtn";
    answerBox3.textContent = answerBoxObj.answer3;
    questionBox1.appendChild(answerBox3);

    var answerBox4 = document.createElement('button');
    answerBox4.className = "purpleAnswerBtn";
    answerBox4.textContent = answerBoxObj.answer4;
    questionBox1.appendChild(answerBox4);

    answerBox1.addEventListener('click', wrongAnswer);
    answerBox2.addEventListener('click', wrongAnswer);
    answerBox4.addEventListener('click', wrongAnswer);


    // check if right when user clicks answer

    //if right, call question2()

    //if wrong, show that it is wrong, let them answer again
}

//start button event listener 
startQuizBtnEL.addEventListener("click", startQuiz);



