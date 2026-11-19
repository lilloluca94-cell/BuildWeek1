const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//consenso per procedere alla scenda paggina
const checkbox = document.getElementById("boxPromise");
const proceedBtn = document.querySelector("#proceed button");

if (checkbox && proceedBtn) {
  proceedBtn.disabled = true;
  checkbox.addEventListener("change", function () {
    proceedBtn.disabled = !checkbox.checked;
  });
  proceedBtn.addEventListener("click", function () {
    if (checkbox.checked) {
      window.location.href = "./secondapagina.html";
    }
  });
}
// timer e domande 
let timeLeft = 30;
let timerInterval;
const circleLength = 339.29;
let currentQuestion = 0;
const questionContainer = document.getElementById("question");
const countEl = document.getElementById("countquestion");
const nextBtn = document.getElementById("next-btn");
const numberEl = document.getElementById("timer-number");
const circleEl = document.getElementById("timer-circle");
// funzione timer
function startTimer(onTimeUp) {
  clearInterval(timerInterval);
  timeLeft = 30;
  if (numberEl) numberEl.textContent = timeLeft;
  if (circleEl) circleEl.style.strokeDashoffset = 0;
  timerInterval = setInterval(function () {
    timeLeft--;
    if (numberEl) numberEl.textContent = timeLeft;
    if (circleEl) {
      const offset = circleLength * (1 - timeLeft / 30);
      circleEl.style.strokeDashoffset = offset;
    }
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (onTimeUp) onTimeUp();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
}
if (numberEl) {
  startTimer(function () {
    console.log("Tempo scaduto!");
  });
}
// domande 
function createQuestion() {
  const currentQ = questions[currentQuestion];
  if (questionContainer) {
    questionContainer.innerHTML = `<h2>${currentQ.question}</h2>`;
  }

  if (countEl) {
    countEl.innerHTML = `QUESTION ${currentQuestion + 1} <span>/ ${questions.length}</span>`;
  }
}
//function prossima domanda 
function incrementCurrentQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    createQuestion();
    startTimer(incrementCurrentQuestion);
  } else {
    stopTimer(); // Ferma il timer all'ultima domanda
    if (questionContainer) {
      questionContainer.innerHTML = `<h2>Quiz completato!</h2>`;
    }
    if (nextBtn) {
      nextBtn.classList.add("hidden");
    }
  }
}
if (questionContainer) {
  createQuestion();
  startTimer(incrementCurrentQuestion);
  if (nextBtn) {
    nextBtn.addEventListener("click", incrementCurrentQuestion);
  }
}




//CREAZIONE RANDOMICA DEI PULSANTE - LUIGI
//
//

//array test per risposte DA SOSTITUIRE CON QUELLO CORRETTO
let arrQuestion = ["risposta1", "risposta2", "risposta3", "risposta4"]


//selezione form input
const inputClick = document.getElementsByClassName("inputClick")



//randomizzare arrQuestion
function randomIndex() {
  const shuflleArray = (array) => {
    array.sort(() => Math.random() - 0.5)
  }
  return shuflleArray(arrQuestion)
}

//selezione del contenitore delle domande
const answerContainer = document.getElementById("answer")

//creazione form e inserimento
const form = document.createElement("form")
answerContainer.appendChild(form)

//richiamo funzione per generare domande
questionCreate()

//funzione per generazione domande
function questionCreate() {
  randomIndex()
  form.innerHTML = ""
  for (i = 0; i < arrQuestion.length; i++) {
    //creazione e valorizzazione pulsanti
    const input = document.createElement("input")
    input.type = "radio"
    input.value = arrQuestion[i]
    input.id = arrQuestion[i]
    input.name = "question"
    input.classList.add("inputClick")
    //creazione label
    const label = document.createElement("label")
    label.innerText = arrQuestion[i]
    label.id = arrQuestion[i]

    //aggiunta evento click
    input.addEventListener("click", questionCreate)

    form.appendChild(input)
    form.appendChild(label)

  }
}


// restanti da fare metter le risposte sotto la domanda
// stilizzare tramite il css la seconda pagina quindi la parte del quiz
//mostrare tutte le domande a fine ed evidenziare quelle sbagliate mostrando la risposta giust

let score = 0;
let userAnswers = []; // Salva la risposta data per ogni indice di domanda

function questionCreate() {
  const currentQ = questions[currentQuestion];

  // Unisce risposta corretta e sbagliate e le mescola
  const answers = [currentQ.correct_answer, ...currentQ.incorrect_answers];
  answers.sort(() => Math.random() - 0.5);

  // Svuota il contenitore delle risposte e crea un form interno
  answerContainer.innerHTML = "";
  const form = document.createElement("form");
  answerContainer.appendChild(form);

  answers.forEach((answer, index) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = answer;
    input.id = 'answer-${index}';
    input.classList.add("inputClick");

    // Se l'utente era già tornato o ha già selezionato qualcosa, mantiene la spunta
    if (userAnswers[currentQuestion] === answer) {
      input.checked = true;
    }

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.innerHTML = answer;

    // Salva la risposta scelta per la domanda corrente
    input.addEventListener("change", function () {
      userAnswers[currentQuestion] = this.value;
    });

    form.appendChild(input);
    form.appendChild(label);
  });
}

function createQuestion() {
  const currentQ = questions[currentQuestion];

  if (questionContainer) {
    questionContainer.innerHTML = '<h2>${currentQ.question}</h2>';
  }

  if (countEl) {
    countEl.innerHTML = 'QUESTION ${currentQuestion + 1} <span>/ ${questions.length}</span>';
  }

  // Mostra le risposte subito sotto la domanda
  questionCreate();
}

function calculateScore() {
  let total = 0;
  questions.forEach((q, idx) => {
    if (userAnswers[idx] === q.correct_answer) {
      total++;
    }
  });
  return total;
}

function showResults() {
  stopTimer();
  score = calculateScore();

  if (answerContainer) answerContainer.innerHTML = "";
  if (countEl) countEl.classList.add("hidden");
  if (nextBtn) nextBtn.classList.add("hidden");

  // Costruisce l'elenco di tutte le domande con esito e risposta giusta
  const reviewItemsHtml = questions
    .map((q, idx) => {
      const givenAnswer = userAnswers[idx]; // undefined se non ha risposto
      const isCorrect = givenAnswer === q.correct_answer;

      return `
        <div class="review-item ${isCorrect ? "correct" : "wrong"}">
          <p class="review-question"><strong>${idx + 1}.</strong> ${q.question}</p>
          <p class="review-user">
            Tua risposta: <strong>${givenAnswer ? givenAnswer : "Nessuna risposta (tempo scaduto)"}</strong>
            ${isCorrect ? "✅" : "❌"}
          </p>
          ${
            !isCorrect
              ? `<p class="review-correct">Risposta corretta: <strong>${q.correct_answer}</strong></p>`
              : ""
          }
        </div>
      `;
    })
    .join("");

  if (questionContainer) {
    questionContainer.innerHTML = `
      <div class="results-summary">
        <h2>Quiz completato!</h2>
        <p class="score-text">Punteggio: <strong>${score}</strong> su <strong>${questions.length}</strong></p>
        <div class="review-list">
          ${reviewItemsHtml}
        </div>
        <button type="button" id="restart-btn">Ricomincia quiz</button>
      </div>
    `;

    const restartBtn = document.getElementById("restart-btn");
    if (restartBtn) {
      restartBtn.addEventListener("click", function () {
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        if (countEl) countEl.classList.remove("hidden");
        if (nextBtn) nextBtn.classList.remove("hidden");
        createQuestion();
        startTimer(incrementCurrentQuestion);
      });
    }
  }
}

function incrementCurrentQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    createQuestion();
    startTimer(incrementCurrentQuestion);
  } else {
    showResults();
  }
}