var startQuizBtnEL = document.querySelector('#startBtn');
var clearWelcomePgEl = document.querySelector('#startPage');
var questionContainer = document.querySelector('#question-container');
var bodyEl = document.querySelector('#bodyEL');
var answerReactions = document.querySelector('#answer-validity');
var highScoreEL = document.querySelector('#high-scores');
var userScore = 0;

function wrongAnswer() {
    //create a pop up when the answer is incorrect 
    answerReactions.className = "answerStyles";
    var wrongAnswers = document.createElement('div');
    wrongAnswers.className = "answerStylesDiv";
    wrongAnswers.textContent = "Wrong!";
    answerReactions.appendChild(wrongAnswers);

    //lose points when your answer is wrong
    if (wrongAnswers = true) {
        userScore = (userScore - 5);
        console.log(userScore);
    };

}

function rightAnswer() {
    //creat a pop up when your answer is correct
    answerReactions.className = "answerStyles";
    var rightAnswers = document.createElement('div');
    rightAnswers.id = "#right-answer-footer";
    rightAnswers.className = "answerStylesDiv";
    rightAnswers.textContent = "Correct!";
    answerReactions.appendChild(rightAnswers);

    //recieve points for the correct answer
    if (rightAnswer = true) {
        userScore =(userScore + 10)
        console.log(userScore);
    }
    setTimeout(question2, 1000);
}

function startQuiz() {
    //clear the initia start page when the start button is clicked
   questionContainer.removeChild(clearWelcomePgEl);
   //load first question after start button is clicked
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
    answerBox3.id = "right-answer-1";
    answerBox3.textContent = answerBoxObj.answer3;
    questionBox1.appendChild(answerBox3);

    var answerBox4 = document.createElement('button');
    answerBox4.className = "purpleAnswerBtn";
    answerBox4.textContent = answerBoxObj.answer4;
    questionBox1.appendChild(answerBox4);

    // check if right when user clicks answer
    answerBox1.addEventListener('click', wrongAnswer);
    answerBox2.addEventListener('click', wrongAnswer);
    answerBox4.addEventListener('click', wrongAnswer);
    answerBox3.addEventListener('click', rightAnswer);
    
    
    //if right, call question2()
    // if(document.getElementById('right-answer-1').clicked == true) {
    //     questionContainer.removeChild(questionBox1)
    // }
    // else {
    //     console.log('wrong');
    // };
    
    //if wrong, show that it is wrong, let them answer again
}

function question2 () {
    var questionBox1 = document.getElementById('#question-box-1');
    var rightAnswers = document.getElementById('#right-answer-footer');
    questionContainer.removeChild(questionBox1);
    answerReactions.removeChild(rightAnswers);
    
}


//start button event listener 
startQuizBtnEL.addEventListener("click", startQuiz);



// function wrongAnswer() {
//     answerReactions.className = "answerStyles";
//     var wrongAnswers = document.createElement('div');
//     wrongAnswers.className = "answerStylesDiv";
//     wrongAnswers.textContent = "Wrong!";
//     answerReactions.appendChild(wrongAnswers);
// }