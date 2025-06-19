const questions = [
    {
        question: "Secretion of less saliva in mouth will effect the conversion of :  ",
        answers: [
            { text: "proteins into amino acids   ", correct: false},
            { text: "fats into fatty acids and glycerol ", correct: false },
            { text: "starch into simple sugars  ", correct: true },
            { text: "sugars into alcohol ", correct: false },
        ]
    },
    {
        question: "The breakdown of glucose has taken the following pathway :  Glucose (a) ->Pyruvate + Energy (b) -> Lactic acid + Energy  The sites ‘a’ and ‘b’ respectively are :  ",
        answers: [
            { text: "Mitochondria and Oxygen deficient muscle cells     ", correct: false },
            { text: "Cytoplasm and Oxygen rich muscle cells ", correct: false },
            { text: "Cytoplasm and Yeast cells ", correct: false },
            { text: "Cytoplasm and Oxygen deficient muscle cells   ", correct: true },
        ]
    },
    {
        question: "Select the correct option from the following statements about the functioning of the human heart. ",
        answers: [
            { text: "Right atrium receives deoxygenated blood from different parts of the body and sends it to pulmonary veins.", correct: false },
            { text: "Left atrium sends oxygenated blood to right ventricle which pumps it to different parts of the body.", correct: false },
            { text: "Right atrium receives deoxygenated blood from the body and sends it to the right ventricle", correct: true },
            { text: "Left atrium receives oxygenated blood from the pulmonary arteries and sends it to the left ventricle.", correct: false },
        ]
    },
    {
        question: "Assertion (A) : Animals will not get energy if they eat (consume) coal as food.  Reason (R) : Specific enzymes are needed for the breakdown of a particular food.   ",
        answers: [
            { text: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).     ", correct: false },
            { text: "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).   ", correct: true },
            { text: "Assertion (A) is true, but Reason (R) is false.  ", correct: false },
            { text: "Assertion (A) is false, but Reason (R) is true.    ", correct: false },
        ]
    },
    {

        question: "Select TRUE statements about lymph from the following:",
        answers:[
        {text :"A. Lymph vessels carry lymph through the body and finally open into larger arteries."}, 
        {text :"B. Lymph contains some amount of plasma, proteins and blood cells.",correct :false},


{text :"C. Lymph contains some amount of plasma, proteins and red blood cells." ,correct:false},
{text :"D. Lymph vessels carry lymph through the body and finally open into larger veins.",correct:true},

        ]
    },


    {
        question: "Assertion (A) : In large animals,oxygen can reach different parts of the animal's body easily  Reason (R) : Respiratory pigments take up oxygen from the air and carry it to body tissues.   ",
        answers: [
            { text: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).     ", correct: false },
            { text: "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).   ", correct: true },
            { text: "Assertion (A) is true, but Reason (R) is false.  ", correct: false },
            { text: "Assertion (A) is false, but Reason (R) is true.    ", correct: false },
        ]
    },


    {
        question: "In aerobic respiration, the steps are breakdown of glucose to pyruvate and its further conversion to carbon dioxide. Both processes respectively occur in ",
        answers: [
            { text: "Vacuole and Cytoplasm", correct: false },
            { text: "Chloroplast and Mitochondria", correct: false },
            { text: "Mitochondria and Cytoplasm", correct: false },
            { text: "Cytoplasm and Mitochondria.", correct: true },
        ]
    },

     {
        question: "Which one of the following is not an excretory product in plants",
        answers: [
            { text: "CO2", correct: false },
            { text: "Starch", correct: true },
            { text: "Resins and gums", correct: false },
            { text: "Dead cells", correct: false},
        ]
    },


    {
        question: "In human alimentary canal,digestive juice secreted by the gastric glands are",
        answers: [
            { text: "Bile,Trypsin,Pepsin", correct: false },
            { text: "Hydrochloric acid,pepsin,Mucus", correct: true },
            { text: "Lipase,Bile,Mucus", correct: false },
            { text: "Salivary amylase,Pepsin,Bile", correct: false},
        ]
    },



    {
        question: "Assertion (A) : Xylem tissue moves water and minerals obtained from soil by roots.  Reason (R) : Xylem tissue is found only in the roots of a plant ",
        answers: [
            { text: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).     ", correct: false },
            { text: "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).   ", correct: false },
            { text: "Assertion (A) is true, but Reason (R) is false.  ", correct: true },
            { text: "Assertion (A) is false, but Reason (R) is true.    ", correct: false },
        ]
    },


    
];

const questionElement = document.getElementById("question");
const answerButton = document.querySelector(".ans-butt");
const nextButton = document.getElementById("next-btn");

let curquei = 0;
let score = 0;

function startQuiz() {
    curquei = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQues();
}

function showQues() {
    resetState();
    let curque = questions[curquei];
    questionElement.innerHTML = (curquei + 1) + ". " + curque.question;
    curque.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handlenextbutt() {
    curquei++;
    if (curquei < questions.length) {
        showQues();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (curquei < questions.length) {
        handlenextbutt();
    } else {
        startQuiz();
    }
});

startQuiz();