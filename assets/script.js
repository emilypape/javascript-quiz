var startQuizBtnEL = document.querySelector('#startBtn');
var clearWelcomePgEl = document.querySelector('#startPage');
var questionContainer = document.querySelector('#question-container');


function startQuiz() {
   questionContainer.removeChild(clearWelcomePgEl);
   question1();
}

function question1() {
    console.log('Question 1')
    // ask question - put all the html where it needs to be

    // check if right when user clicks answer

    //if right, call question2()

    //if wrong, show that it is wrong, let them answer again
}

//start button event listener 
startQuizBtnEL.addEventListener("click", startQuiz);