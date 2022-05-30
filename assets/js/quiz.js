var score = "Score " + 0;
var startBtnEl = document.querySelector("#start");
var timerBtnEl = document.querySelector("#timer");
var answerBtnsEl = document.querySelector(".answer-text");
var timerSeconds = 30;
var remainingTime = 0;
var score = 0;
var initialBtnEl = document.querySelector("#initials-btn");
var quizTimer = undefined;
var currentIndex = 0;
var hideHeader = document.querySelector("#hideHeader")
var hideUl = document.querySelector("#hideUl")
var hideUl2 = document.querySelector("#hideUl2")
var headerChic = document.querySelector("#hideHeaderChic")
var gameScore1 = document.querySelector("#gameScore1")

var questionEl = document.querySelector("#questions-to-ask");
var answerOneButtonEl = document.querySelector("#answer-one");
var answerTwoButtonEl = document.querySelector("#answer-two");
var answerThreeButtonEl = document.querySelector("#answer-three");
var answerFourButtonEl = document.querySelector("#answer-four");
var alert = document.querySelector("#alert");
var localStorage = document.querySelector("#localStorage")
//var evenRow = document.querrySelector("#evenRow")
gameScore1.textContent ="Score " + 0; 
var score = "Score " + 0;

var questionAnswersObj = [{
    question: "What is not a JavaScript Primitive Data Type?",
    answer: ["Array", "String", "Boolean", "Number"],
    correctAnswer: "Array",}, 
    { question: "A JavaScript file has an extension of",
        answer: ["HTML", "JS", "JPG", "JSQ"],
        correctAnswer: "JS",
    },
    { question: "Which of the following type of variables is visible everywhere in your JavaScript code?",
        answer:["Local Variable", "Script Variable", "Function Variable", "Global Variable"],
        correctAnswer: "Global Variable"
    }];

localStorage.textContent = 100;

function loadPage(){
    
    currentIndex = 0;
    score = 0;
    remainingTime = timerSeconds;
    document.getElementById("score-section").style.display="none";
    document.getElementById("question-section").style.display="block";
    document.getElementById("answer-section").style.display="block";
    document.getElementById("timer").style.display="block";
    document.getElementById("initials-input").value = "";
    document.querySelector("#timer").innerHTML = remainingTime;
    quizTimer = setInterval(timerHandler, 1000);
    hideHeader.hidden = false;
    hideUl.hidden = true;
    hideUl2.hidden = true;
    startBtnEl.hidden = false;
    evenRow.hidden = true;
   
   
   
};

var hideUl2 = document.querySelector("#hideUl2")

startBtnEl.addEventListener("click", function() {
   if(startBtnEl){
    hideHeader.hidden = true;
    

    setQandA();
     }
  });
 
function startQuiz(){
    
    
    currentIndex = 0;
    score = 0;
    remainingTime = timerSeconds;
    document.getElementById("score-section").style.display="none";
    document.getElementById("question-section").style.display="block";
    document.getElementById("answer-section").style.display="block";
    document.getElementById("timer").style.display="block";
    document.getElementById("initials-input").value = "";
    document.querySelector("#timer").innerHTML = remainingTime;
    quizTimer = setInterval(timerHandler, 1000);
    headerChic.textContent = "I'm a Crazy Chicken!";
    hideHeader.hidden = true;
    hideUl.hidden = false;
    hideUl2.hidden = false;
    startBtnEl.hidden = true;
    evenRow.hidden = false;
    
    setQandA()
    
};

loadPage()

function setQandA(){
    answerOneButtonEl.textContent= questionAnswersObj[currentIndex].answer[0];
    answerTwoButtonEl.textContent= questionAnswersObj[currentIndex]. answer [1];
    answerThreeButtonEl.textContent= questionAnswersObj[currentIndex].answer [2];
    answerFourButtonEl.textContent= questionAnswersObj[currentIndex].answer [3];
    questionEl.textContent= questionAnswersObj[currentIndex].question;
    
};


function checkAnswer(selectedAnswer){
    var correctAnswer = questionAnswersObj[currentIndex].correctAnswer;

    //check answer and increment score
    if(selectedAnswer === correctAnswer){
        alert.textContent= "That's correct! You have earned 10 points!";
        score += 10;
        gameScore1.textContent = "Score " + score; 
    } else {
        alert.textContent= "That's wrong! You have earned 0 points!";
        remainingTime -= 5;
    };

    //Increment question or finish
    if(currentIndex === questionAnswersObj.length-1){
        alert.textContent = "Your final score is " + score;
        finishQuiz();
    } else {
        currentIndex++;
        setQandA();
    };
};

function finishQuiz(){
    clearInterval(quizTimer);
    document.getElementById("score-section").style.display="block";
    document.getElementById("question-section").style.display="none";
    document.getElementById("answer-section").style.display="none";
    document.getElementById("timer").style.display="none";
};

function saveScore(){
    var initials = document.getElementById("initials-input").value;
    localStorage.setItem(score, initials);
    localStorage.textContent = 100;
    clearInterval(quizTimer);

    loadPage();
};

var timerHandler = function() {
    if (remainingTime > 0) {
        remainingTime -= 1;
        document.querySelector("#timer").innerHTML = remainingTime;
    } else {
        clearInterval(quizTimer);
        alert("You've ran out of time!");
        finishQuiz();
    }
};

//Event Listeners
startBtnEl.addEventListener("click", startQuiz);
answerOneButtonEl.addEventListener("click", function(){
checkAnswer(answerOneButtonEl.textContent);
});
answerTwoButtonEl.addEventListener("click", function(){
    checkAnswer(answerTwoButtonEl.textContent);
    });
answerThreeButtonEl.addEventListener("click", function(){
    checkAnswer(answerThreeButtonEl.textContent);
    });
answerFourButtonEl.addEventListener("click", function(){
    checkAnswer(answerFourButtonEl.textContent);
    });
initialBtnEl.addEventListener("click", saveScore);