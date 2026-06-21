const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Van Gogh", "Picasso", "Michelangelo"],
    answer: "Leonardo da Vinci"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let correct = 0;
let incorrect = 0;
let startTime = Date.now();

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === currentQuestion.answer) {
      btn.style.background = "#00c851";
    }
    if (btn.textContent === selectedOption && selectedOption !== currentQuestion.answer) {
      btn.style.background = "#ff4444";
    }
  });

  if (selectedOption === currentQuestion.answer) {
    score += 10;
    correct++;
  } else {
    incorrect++;
  }

  nextBtn.style.display = "inline-block";
}

function showResult() {
  const endTime = Date.now();
  const timeTaken = Math.floor((endTime - startTime) / 1000);
  const percentage = (correct / questions.length) * 100;
  let feedback = "";

  if (percentage === 100) feedback = "Outstanding!";
  else if (percentage >= 75) feedback = "Well done!";
  else if (percentage >= 50) feedback = "Good try!";
  else feedback = "Better luck next time.";

  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");

  document.getElementById("total-score").textContent = `Score: ${score} / ${questions.length * 10}`;
  document.getElementById("correct-answers").textContent = `Correct Answers: ${correct}`;
  document.getElementById("incorrect-answers").textContent = `Incorrect Answers: ${incorrect}`;
  document.getElementById("time-taken").textContent = `Time Taken: ${timeTaken}s`;
  document.getElementById("percentage-score").textContent = `Percentage: ${percentage.toFixed(2)}%`;
  document.getElementById("performance-feedback").textContent = `Feedback: ${feedback}`;
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
};

function startTimer() {
  setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timerEl.textContent = `Time: ${elapsed}s`;
  }, 1000);
}

loadQuestion();
startTimer();
