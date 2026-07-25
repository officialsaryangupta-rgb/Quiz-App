const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");
const questionCount = document.getElementById("question-count");
// questionElement.innerHTML = "what is HTML";
const questions = [
    {
        question: "What does HTML stand for?",
      answers:[
             {text:"Hyper Text Markup Language",
                 correct:true},
             {text:"Hyper Tool Markup Language",
                correct:false},
             {text:" Hyper Tool Makeup Language",
                correct:false},
                {text:"Hyper Test Makeup Language",
                    correct:false}



      ]
    },
    {
    question: "Which language makes a webpage interactive?",
    answers:[
        {text:"HTML",correct:false},
        {text:"CSS",correct:false},
        {text:"JavaScript",correct:true},
        {text:"SQL",correct:false}
    ]
},
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the text color?",
        answers: [
            { text: "background-color", correct: false },
            { text: "font-color", correct: false },
            { text: "color", correct: true },
            { text: "text-color", correct: false }
        ]
    },
    {
        question: "Which method is used to select an element by its ID in JavaScript?",
        answers: [
            { text: "getElementById()", correct: true },
            { text: "queryElement()", correct: false },
            { text: "getElementsByClass()", correct: false },
            { text: "selectById()", correct: false }
        ]

    }
];
let currentQuestionIndex = 0;
let score = 0;
function resetState(){

    nextButton.style.display = "none";

    while(answerButtons.firstChild){

        answerButtons.removeChild(answerButtons.firstChild);

    }

}
function showQuestion(){
    questionCount.innerHTML =
`Question ${currentQuestionIndex+1} of ${questions.length}`;
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    // currentQuestion.question;
    // questionElement.innerHTML;
    currentQuestion.answers.forEach(function(answer){
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = answer.text;
        button.dataset.correct = answer.correct;
        button.addEventListener("click",selectAnswer);
        answerButtons.appendChild(button);
        

});
    


}
 function handleNextButton(){
          currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){

        showQuestion();

    }
    else{
         resetState();
       questionElement.innerHTML = `
🎉 Quiz Completed! <br><br>
Your Score : ${score}/${questions.length}
`;

        answerButtons.innerHTML = "";

        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";

    }

}

function startQuiz(){

    currentQuestionIndex = 0;
    score = 0;

    nextButton.innerHTML = "Next";

    showQuestion();

}
startQuiz();
// nextButton.addEventListener("click", handleNextButton);
nextButton.addEventListener("click", function(){

    if(nextButton.innerHTML === "Play Again"){

        startQuiz();

    }
    else{

        handleNextButton();

    }

});
function selectAnswer(event){
   
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct; 
    if(isCorrect == "true"){
        score++;
        selectedButton.style.backgroundColor = 'green';

    }
    else{
         selectedButton.style.backgroundColor = 'red';
    }
    // console.log(isCorrect);
    Array.from(answerButtons.children).forEach(function(button){
        if(button.dataset.correct === "true"){
            button.style.backgroundColor = "green";
            
        }
        button.disabled = true;
       

    });
     nextButton.style.display = "block";
}
