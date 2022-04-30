var startButton = document.getElementById("start-button")
var quizSection = document.getElementById("quiz-section")
var questionDiv = document.createElement("div")
var answerDiv = document.createElement("div")
var questionIndex = 0

//timer running

//start button click and displays first question

//generate question text and four answer buttons

var questionBank = [
    {
        question: "Commonly used data types do not include",
        answers: [
            "boolean",
            "numbers & strings",
            "arrays",
            "loop",
        ] , 
        correctAnswer: "loops"
    },
    {
        question: "The condition of an if else statement is enclosed with",
        answers: [
            "()",
            "{}",
            "[]",
            "//",
        ] , 
        correctAnswer: "()"
    }
]


//runs on click event listener, remove start button, append question with answer buttons, start timer
var startQuiz = function(){
    startButton.remove();

    renderQuestion()

}

var renderQuestion = function() {
    var questionDiv = document.createElement("div")


    questionDiv.innerHTML = questionBank[0].question

    quizSection.appenChild(questionDiv)

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


//correct answer button click shows next question and displays positive message
//incorrect answer button click shows next question and displays negative message



startButton.addEventListener("click", startQuiz)
answerDiv.addEventListener("click", checkAnswer)
