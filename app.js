"use strict";

// ── STATE ──────────────────────────────────────────────────────
const state = {
  category: null,
  difficulty: "normal",
  questions: [],
  current: 0,
  score: 0,
  answered: false,
  timerInterval: null,
  timeLeft: 0,
  history: [],
  totalTime: 0,
};

const TIMER = { facile: 20, normal: 15, difficile: 10 };
const POINTS = { facile: 5, normal: 10, difficile: 20 };
const LETTERS = ["A", "B", "C", "D"];

// ── SELECTORS ──────────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const screens = {
  welcome: $("#welcome-screen"),
  quiz: $("#quiz-screen"),
  results: $("#results-screen"),
  review: $("#review-screen"),
};

// ── SCREEN MANAGEMENT ──────────────────────────────────────────
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

// ── WELCOME SETUP ──────────────────────────────────────────────
function initWelcome() {
  const grid = $("#categories-grid");
  grid.innerHTML = "";
  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.dataset.cat = key;
    card.innerHTML = `<span class="cat-icon">${cat.icon}</span><span class="cat-label">${cat.label}</span>`;
    card.addEventListener("click", () => selectCategory(key));
    grid.appendChild(card);
  });

  document.querySelectorAll(".diff-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".diff-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      state.difficulty = btn.dataset.diff;
    });
  });

  document.querySelectorAll(".diff-btn[data-diff='normal']").forEach((b) =>
    b.classList.add("selected")
  );

  $("#start-btn").addEventListener("click", startQuiz);
}

function selectCategory(key) {
  state.category = key;
  document.querySelectorAll(".category-card").forEach((c) =>
    c.classList.toggle("selected", c.dataset.cat === key)
  );
  $("#start-btn").disabled = false;
}

// ── QUIZ ───────────────────────────────────────────────────────
function startQuiz() {
  state.questions = getQuestions(state.category);
  state.current = 0;
  state.score = 0;
  state.history = [];
  state.totalTime = 0;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = state.questions[state.current];
  state.answered = false;

  // Header
  const cat = CATEGORIES[state.category];
  $("#cat-badge").innerHTML = `${cat.icon} ${cat.label}`;
  $("#q-counter").textContent = `${state.current + 1} / ${state.questions.length}`;
  $("#score-live").textContent = `Score : ${state.score}`;

  // Progress
  const pct = (state.current / state.questions.length) * 100;
  $("#progress-fill").style.width = pct + "%";

  // Question
  $("#question-text").textContent = q.question;

  // Choices
  const choicesEl = $("#choices");
  choicesEl.innerHTML = "";
  q.choices.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerHTML = `<span class="choice-letter">${LETTERS[i]}</span><span>${text}</span>`;
    btn.addEventListener("click", () => handleAnswer(i));
    choicesEl.appendChild(btn);
  });

  // Feedback
  const fb = $("#feedback");
  fb.textContent = "";
  fb.className = "feedback";

  // Timer
  startTimer();
}

function startTimer() {
  clearInterval(state.timerInterval);
  const max = TIMER[state.difficulty];
  state.timeLeft = max;

  const valueEl = $("#timer-value");
  const fgEl = $("#timer-fg");
  const circumference = 201;

  function tick() {
    valueEl.textContent = state.timeLeft;
    const offset = circumference * (1 - state.timeLeft / max);
    fgEl.style.strokeDashoffset = offset;

    if (state.timeLeft <= 5) {
      fgEl.style.stroke = "#dc2626";
      valueEl.style.color = "#f87171";
    } else if (state.timeLeft <= 8) {
      fgEl.style.stroke = "#d97706";
      valueEl.style.color = "#fbbf24";
    } else {
      fgEl.style.stroke = "#4f46e5";
      valueEl.style.color = "";
    }

    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      handleTimeout();
      return;
    }
    state.timeLeft--;
  }

  tick();
  state.timerInterval = setInterval(tick, 1000);
}

function handleAnswer(index) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);

  const timeUsed = TIMER[state.difficulty] - state.timeLeft;
  state.totalTime += timeUsed;

  const q = state.questions[state.current];
  const correct = index === q.answer;
  const choices = document.querySelectorAll(".choice-btn");

  choices.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    else if (i === index && !correct) btn.classList.add("wrong");
  });

  const fb = $("#feedback");
  if (correct) {
    const pts = POINTS[state.difficulty];
    state.score += pts;
    fb.textContent = `Correct ! +${pts} points`;
    fb.className = "feedback correct";
  } else {
    fb.textContent = `Mauvaise réponse ! C'était : ${q.choices[q.answer]}`;
    fb.className = "feedback wrong";
  }

  state.history.push({
    question: q.question,
    choices: q.choices,
    answer: q.answer,
    selected: index,
    correct,
    timeout: false,
  });

  $("#score-live").textContent = `Score : ${state.score}`;
  setTimeout(nextQuestion, 1600);
}

function handleTimeout() {
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.current];
  const choices = document.querySelectorAll(".choice-btn");
  choices.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
  });

  const fb = $("#feedback");
  fb.textContent = `Temps écoulé ! La réponse était : ${q.choices[q.answer]}`;
  fb.className = "feedback timeout";

  state.totalTime += TIMER[state.difficulty];
  state.history.push({
    question: q.question,
    choices: q.choices,
    answer: q.answer,
    selected: -1,
    correct: false,
    timeout: true,
  });

  setTimeout(nextQuestion, 1800);
}

function nextQuestion() {
  state.current++;
  if (state.current >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ── RESULTS ────────────────────────────────────────────────────
function showResults() {
  showScreen("results");

  const total = state.questions.length;
  const correct = state.history.filter((h) => h.correct).length;
  const wrong = state.history.filter((h) => !h.correct && !h.timeout).length;
  const timeouts = state.history.filter((h) => h.timeout).length;
  const maxScore = total * POINTS[state.difficulty];
  const pct = Math.round((correct / total) * 100);

  // Emoji & message
  let emoji, msg;
  if (pct === 100) { emoji = "🏆"; msg = "Score parfait ! Bravo champion !"; }
  else if (pct >= 80) { emoji = "🎉"; msg = "Excellent travail !"; }
  else if (pct >= 60) { emoji = "👍"; msg = "Bien joué !"; }
  else if (pct >= 40) { emoji = "🤔"; msg = "Peut mieux faire..."; }
  else { emoji = "😅"; msg = "Il faut réviser !"; }

  $("#result-emoji").textContent = emoji;
  $("#result-msg").textContent = msg;
  $("#result-sub").textContent = `${pct}% de bonnes réponses`;
  $("#score-number").textContent = state.score;
  $("#score-max").textContent = `/ ${maxScore} points`;

  $("#stat-correct").textContent = correct;
  $("#stat-wrong").textContent = wrong;
  $("#stat-timeout").textContent = timeouts;
  const avgTime = state.totalTime > 0 ? (state.totalTime / total).toFixed(1) : 0;
  $("#stat-time").textContent = avgTime + "s";

  if (pct >= 80) launchConfetti();

  $("#retry-btn").onclick = () => startQuiz();
  $("#menu-btn").onclick = () => { stopConfetti(); showScreen("welcome"); };
  $("#review-btn").onclick = showReview;
}

function showReview() {
  showScreen("review");
  const list = $("#review-list");
  list.innerHTML = "";

  state.history.forEach((item, idx) => {
    const div = document.createElement("div");
    let cls = item.correct ? "correct-item" : item.timeout ? "timeout-item" : "wrong-item";
    div.className = `review-item ${cls}`;

    const answersHtml = item.choices
      .map((c, i) => {
        let tag = "";
        if (i === item.answer) tag = `<span class="tag tag-correct">Correct</span>`;
        else if (i === item.selected && !item.correct)
          tag = `<span class="tag tag-wrong">Votre choix</span>`;
        return `<div class="review-ans">${tag || '<span style="min-width:64px"></span>'}<span>${c}</span></div>`;
      })
      .join("");

    let statusIcon = item.correct ? "✅" : item.timeout ? "⏰" : "❌";
    div.innerHTML = `
      <div class="review-q">${statusIcon} ${idx + 1}. ${item.question}</div>
      <div class="review-answers">${answersHtml}</div>
      ${item.timeout ? '<div class="review-ans" style="margin-top:8px"><span class="tag tag-timeout">Temps écoulé</span></div>' : ""}
    `;
    list.appendChild(div);
  });

  $("#back-results-btn").onclick = () => showScreen("results");
}

// ── CONFETTI ───────────────────────────────────────────────────
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let animFrame;

function launchConfetti() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = [];
  const colors = ["#818cf8", "#c4b5fd", "#34d399", "#fbbf24", "#f87171", "#60a5fa"];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 6,
      h: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: Math.random() * 3 + 2,
      vx: (Math.random() - 0.5) * 2,
      angle: Math.random() * 360,
      spin: (Math.random() - 0.5) * 4,
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    ctx.save();
    ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
    ctx.rotate((p.angle * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
    p.x += p.vx;
    p.y += p.vy;
    p.angle += p.spin;
    if (p.y > canvas.height) {
      p.y = -p.h;
      p.x = Math.random() * canvas.width;
    }
  });
  animFrame = requestAnimationFrame(animateConfetti);
}

function stopConfetti() {
  cancelAnimationFrame(animFrame);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = [];
}

// ── INIT ───────────────────────────────────────────────────────
initWelcome();
