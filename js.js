// script.js
const questions = [
    {
        question: "Qu'est-ce que HTML?",
        choices: [
            "Hyper Text Markup Language",
            "Hypertext Transfer Protocol",
            "Hyper Text Preprocessor"
        ],
        correctAnswer: 0
    },
    {
        question: "À quoi sert le langage CSS ?",
        choices: [
            "À réaliser des pages dynamiques",
            "À simuler une application en mode avion durant les trajets dans un bus",
            "À ajouter du style aux documents web"
        ],
        correctAnswer: 2
    },
    {
        question: "Quel élément sépare la propriété de sa valeur ?",
        choices: [
            "Le signe point-virgule (;)",
            "Le signe deux points (:)",
            "Le signe espace ( )"
        ],
        correctAnswer: 1
    },
    {
        question: "What is Git ?",
        choices: [
            "A remote reposidtory platform",
            "Aversion control system",
            "Aprogramming language"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: [
            " var colors = [red, green, blue,[color,yellow]]",
            "var colors = (1:red, 2:green, 3:blue)",
            "autre Reponse ......"
        ],
        correctAnswer: 0
    },

    // Ajoutez plus de questions ici
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const currentQuestionData = questions[currentQuestion];

    questionElement.textContent = currentQuestionData.question;
    choicesElement.innerHTML = "";

    currentQuestionData.choices.forEach((choice, index) => {
        const li = document.createElement("li");
        const label = document.createElement("label");
        const input = document.createElement("input");

        input.type = "radio";
        input.name = "choice";
        //index=0 =>+
        input.value = index;
          //li >label 
          li.appendChild(label);
        //input choice
        //lable>input
        label.appendChild(input);
        //reponse text 
        label.appendChild(document.createTextNode(choice));
      //createTextNode ajuter texte sur appendChild
        choicesElement.appendChild(li);
    });
}

function submitAnswer() {
    const selectedChoice = document.querySelector("input[name=choice]:checked");

    if (selectedChoice) {
        const selectedAnswer = parseInt(selectedChoice.value);
        // correctAnswer indice sur Arry 
        const cotAnswer = questions[currentQuestion].correctAnswer;

        if (selectedAnswer === cotAnswer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
}

function displayResult() {
    const resultSection = document.querySelector(".result-section");
    const resultElement = document.getElementById("result");

    document.querySelector(".question-section").style.display = "none";
    resultSection.style.display = "block";

    resultElement.textContent = `Vous avez obtenu ${score} sur ${questions.length} questions correctes!`;
}

displayQuestion();
