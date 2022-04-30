var startButton = document.getElementById("start-button")
var quizSection = document.getElementById("quiz-section")
var questionDiv = document.createElement("div")
var answerDiv = document.createElement("div")
var questionIndex = 0
var questionBank = [
    {
        question: "Commonly used data types do not include __________.",
        answers: [
            "booleans",
            "numbers & strings",
            "arrays",
            "loop",
        ] , 
        correctAnswer: "loops"
    },
    {
        question: "The condition of an if else statement is enclosed with_________.",
        answers: [
            "()",
            "{}",
            "[]",
            "//",
        ] , 
        correctAnswer: "()"
    },
    {
        question: "Arrays in javascript can be used to store __________.",
        answers: [
            "booleans",
            "numbers & strings",
            "other arrays",
            "all of the above",
        ] , 
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables",
        answers: [
            ",,",
            "{}",
            "[]",
            "()",
        ] , 
        correctAnswer: "{}"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log",
        ] , 
        correctAnswer: "console.log"
    }
]


//runs on click event listener, remove start button, append question with answer buttons, start timer
var cdtime;
var seconds = 75; 

function countdown(element) {
    cdtime = setInterval(function() {
        var timer = document.getElementById(element);
        if(seconds == 0) {
            alert(timer.innerHTML = "END OF QUIZ!");                    
            clearInterval(cdtime);
            return;
        }
        var secondstxt;
            if(seconds > 1)
            {
            secondstxt = 'seconds'; 
            }
            else
            { 
            secondstxt = 'second';
            }


        timer.innerHTML =seconds + ' ' + secondstxt;
        seconds--;
    }, 1000); 
}



var renderQuestion = function() {
    questionDiv.innerHTML = questionBank[0].question

    quizSection.appendChild(questionDiv)

    renderChoices()
}

var renderChoices = function() {

    for (let i = 0; i <questionBank[0].answers.length; i++) {
        var answerButton = document.createElement("button")

        answerButton.setAttribute("class", "answer-button")

        answerButton.setAttribute("data-answer", questionBank[questionIndex].answers[i])

        answerButton.textContent = questionBank[questionIndex].answers[i]

        answerDiv.appendChild(answerButton)
    }


    quizSection.appendChild(answerDiv)

}

var checkAnswer = function(event) {

    var nextQuestionHelper = function(){
        questionIndex++

        questionDiv.remove()
        answerDiv.innerHTML = " "

        renderQuestion()
    }    

    
if (questionIndex === questionBank.length-1){
    //end game sequence
    console.log("end")
    }

    else if (event.target.dataset.answer === questionBank[questionIndex].correctAnswer){
        nextQuestionHelper()
    }
   //pull the next question with answers display positive message

   else if (event.target.dataset.answer != questionBank[questionIndex].correctAnswer){
    //display negative message subtract from timer move to next question
    nextQuestionHelper()
    }



}
var startQuiz = function(quizSection){
    startButton.remove();

    renderQuestion();

    countdown();

}

//correct answer button click shows next question and displays positive message
//incorrect answer button click shows next question and displays negative message



startButton.addEventListener("click", startQuiz)
answerDiv.addEventListener("click", checkAnswer)
