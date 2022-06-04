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
//var retrievedObject = localStorage.getItem(score, initials)
var questionEl = document.querySelector("#questions-to-ask");
var answerOneButtonEl = document.querySelector("#answer-one");
var answerTwoButtonEl = document.querySelector("#answer-two");
var answerThreeButtonEl = document.querySelector("#answer-three");
var answerFourButtonEl = document.querySelector("#answer-four");
var alert = document.querySelector("#alert");
var highscore = document.querySelector("#highscore")
//var evenRow = document.querrySelector("#evenRow")
gameScore1.textContent ="Score " + 0; 
var score = "Score " + 0;
var initialsInput = document.querySelector(".score-section")
var gameScore = document.querySelector(".game-score")

//var highscoreList=[
   //{score:"score", initials:'initials'},

//var showScore = localStorage.getItem('score', 'initials');
//highscore.textContent = showScore;
// for (var i = 0; i < localStorage.length; i++){
//     localStorage.getItem(localStorage.key(i));
// }

//hightscore.textContent = showScore;

//var thisScore = highscore;



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
   
    clearInterval(quizTimer)
   
};

var hideUl2 = document.querySelector("#hideUl2")

startBtnEl.addEventListener("click", function() {
   if(startBtnEl){
    hideHeader.hidden = true;
    clearInterval(quizTimer)

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
    clearInterval(quizTimer)
    setQandA()
    
};
function highScore(){
    gameScore.hidden = true
    score.hidden = true;
    document.getElementById("timer").style.display="none";
    initialsInput.Hidden = true;
    hideHeader.hidden = true;
    hideUl.hidden = true;
    hideUl2.hidden = true;
    startBtnEl.hidden = true;
    evenRow.hidden = false;
    document.getElementById("answer-section").style.display="none";
    headerChic.textContent = "Winner, Winner Chicken Dinner!";
    startBtnEl.hidden = false;
    startBtnEl.textContent = "Restart the Quiz!";
    highscore.textContent =  "High Score':'" + "|" + localStorage.getItem(score, initials) + " " + score;
    //score =  highscore.textContent =  "High Score" + ":" + localStorage.getItem(score, initials) + " " + score;
    saveScore()
    //score =  highscore.textContent =  "High Score:" + "|" + localStorage.getItem(score, initials) + " " + score;
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
    localStorage.getItem(score, initials);
};

function saveScore(){
    highscore.textContent =  "High Score " + localStorage.getItem(score, initials) + " " + score;
    var initials = document.getElementById("initials-input").value;
    //let userScore = { username: score, userScore: initials };
    localStorage.setItem(score, initials);
    
   
   // localStorage.setItem('score', 'initials', JSON.stringify(highscore))
    console.log('saveScore()')
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
highscore.addEventListener("click", highScore)