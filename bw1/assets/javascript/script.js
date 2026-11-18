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
 checkbox.addEventListener("change",function(){
  proceedBtn.disabled = !checkbox.checked;
 });
 proceedBtn.addEventListener("click", function(){
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
},1000);
}
function stopTimer() {
  clearInterval(timerInterval);
}
if (numberEl) {
  startTimer(function() {
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
    nextBtn.addEventListener("click",incrementCurrentQuestion);
  }
}

// restanti da fare metter le risposte sotto la domanda 
//randomizzare l ordine delle risposte
// stilizzare tramite il css la seconda pagina quindi la parte del quiz
//mostrare tutte le domande a fine ed evidenziare quelle sbagliate mostrando la risposta giust


