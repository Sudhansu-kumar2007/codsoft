const questions =[
    {
        question:"what is height of mount everest",
        answers :[
            {text:"8848m",correct:true},
            {text:"8848.48m",correct:true},
            {text:"8848km",correct:false},
            {text:"8850km",corect:false},
        ]
    },


    {
        question:"say my name",
        answers:[
            {text:"heisenberg",correct:true},
            {text:"walter white",correct:false},
            {text:"anne",correct:false},
            {text:"Lord Kendrick",correct:false},
        ]






    }
];
const questionElement =document.getElementById("question");
const answerButton =document.getElementById(".ans-butt");
const nextButton =document.getElementById("next-btn");

let curquei=0;
let score =0;
function startQuiz(){
    curquei =0;
    score =0;
    nextButton.innerHTML ="Next";
    showQues();
}

function showQues(){
    resetState();

    let curque =questions[curquei];
    let questionno =curque+1;//cut this line
    questionElement.innerHTML =questionno+". "+curque;
    curque.answers.forEach(answer => {

        const button = document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        //answerButton.appendChild(button);
        
    });
}

function resetState(){
    nextButton.style.display ="none";
    while(ansbutt.firstChild){
        ansbutt.removeChild(ansbutt.firstchild)//answerButton.firstChild
    }
    
}

function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect =selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorect");
    }
    Array.from(ansbutt.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display ="block";
}

function handlenextbutt(){
    curquei++;
    if(curquei<questions.length){
        showQues();
    }
    else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionElement.innerHTML =`you scored ${score} out of ${question.lenth} !`;
    nextButton.innerHTML="play Again";
    nextButton.style.display ="block";
}
nextButton.addEventListener("click",()=>{
    if(curquei< questions.length){
        handlenextbutt();
    }
    else{
        startQuiz();
    }
})

startQuiz();








