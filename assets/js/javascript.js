var startButton = document.getElementById("start-button")
var quizSection = document.getElementById("quiz-section")
var questionDiv = document.createElement("div")
var answerDiv = document.createElement("div")
var questionIndex = 0
var TimeDisplay = document.querySelector(".TimeDisplay")
var TimeLeft = 75

// question bank
var questionBank = [
    {
        question: "Commonly used data types do not include __________.",
        answers: [
            "booleans",
            "numbers & strings",
            "arrays",
            "loops",
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

//timer function
function DisplayTimeLeft (){
    var timer = setInterval(() => {
        TimeDisplay.textContent = "Time remaining:" + TimeLeft--

        if (TimeLeft < 0){
            window.prompt("Quiz complete. Your score is 0" , "Please enter your initials")
            clearInterval(timer)
            setTimeout(() => {
            }, 1000);
        }
        if (questionIndex === questionBank.length-1){
            return;
        }    
    },1000);
    return;

}

// quiz functions
var renderQuestion = function() {
    questionDiv.innerHTML = questionBank[questionIndex].question

    renderChoices()
    quizSection.appendChild(questionDiv)

}


var renderChoices = function() {

    for (let i = 0; i <questionBank[questionIndex].answers.length; i++) {
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
        //end quiz sequence

        window.prompt("Quiz complete. Your score is " + TimeLeft, "Please enter your initials")
        localStorage.setItem(window.prompt,+ TimeLeft, )
        location.reload();
        }
        else if (event.target.dataset.answer === questionBank[questionIndex].correctAnswer){
            nextQuestionHelper()
        }
        else if (event.target.dataset.answer != questionBank[questionIndex].correctAnswer){        
            nextQuestionHelper()
            TimeLeft = TimeLeft -10      
    }
}

// start quiz function
var startQuiz = function(){
    startButton.remove();
    DisplayTimeLeft();
    renderQuestion();
}

startButton.addEventListener("click", startQuiz)
answerDiv.addEventListener("click", checkAnswer)
