const startBtn = document.getElementById("start-btn");
const questionWrap = document.getElementById("question-container");
const answerList = document.getElementById("answer-buttons");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");
const scoreText = document.getElementById("score-text");
const progressBar = document.getElementById("progress-bar");
const restartBtn = document.getElementById("restart-btn");

const questions = [
  {
    q: "Where is the ancient university of Nalanda located?",
    options: ["Patna", "Rajgir", "Nalanda District", "Gaya"],
    answer: 2,
  },
  {
    q: "Chhath Puja primarily worships which deity?",
    options: ["Surya (Sun)", "Ganga", "Shiva", "Lakshmi"],
    answer: 0,
  },
  {
    q: "The Madhubani painting style originated in which region of Bihar?",
    options: ["Champaran", "Mithila", "Magadh", "Anga"],
    answer: 1,
  },
  {
    q: "Which river flows beside the city of Patna?",
    options: ["Ganga", "Kosi", "Son", "Gandak"],
    answer: 0,
  },
  {
    q: "The Barabar Caves were built during the reign of which emperor?",
    options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
    answer: 0,
  },
];

let current = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  document.querySelector(".hero").classList.add("hidden");
  quizSection.classList.remove("hidden");
  current = score = 0;
  loadQuestion();
});

restartBtn.addEventListener("click", () => {
  resultSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  current = score = 0;
  loadQuestion();
});

function loadQuestion() {
  resetAnswers();
  const { q, options } = questions[current];
  questionWrap.querySelector("#question").textContent = q;
  options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.dataset.idx = idx;
    btn.addEventListener("click", selectAnswer);
    const li = document.createElement("li");
    li.appendChild(btn);
    answerList.appendChild(li);
  });
  updateProgress();
}

function resetAnswers() {
  answerList.innerHTML = "";
}

function selectAnswer(e) {
  const chosen = +e.target.dataset.idx;
  if (chosen === questions[current].answer) score++;
  current++;
  current < questions.length ? loadQuestion() : finishQuiz();
}

function updateProgress() {
  progressBar.style.width = `${(current / questions.length) * 100}%`;
}

function finishQuiz() {
  progressBar.style.width = "100%";
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  scoreText.textContent = `You scored ${score} / ${questions.length}!`;
}
