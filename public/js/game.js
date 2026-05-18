// ===== QUIZHERO — LOGIQUE PRINCIPALE =====

class QuizGame {
  constructor() {
    this.state = {
      playerName: '',
      category: null,
      difficulty: null,
      questions: [],
      currentIndex: 0,
      score: 0,
      lives: 3,
      hints: 3,
      streak: 0,
      maxStreak: 0,
      correctCount: 0,
      wrongCount: 0,
      answered: false,
      timerValue: 30,
      timerInterval: null,
      timerMax: 30,
      questionStartTime: 0,
      totalTimeMs: 0
    };

    this.audio = this._buildAudio();
    this._initParticles();
    this._bindEvents();
    this._showScreen('home');
  }

  // ─────────────────────────────────────────
  // AUDIO (Web Audio API — sons synthétiques)
  // ─────────────────────────────────────────
  _buildAudio() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      return {
        ctx,
        play: (type) => {
          if (ctx.state === 'suspended') ctx.resume();
          const t = ctx.currentTime;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);

          switch (type) {
            case 'correct':
              osc.type = 'sine';
              osc.frequency.setValueAtTime(440, t);
              osc.frequency.setValueAtTime(660, t + 0.1);
              gain.gain.setValueAtTime(0.3, t);
              gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
              osc.start(t); osc.stop(t + 0.4);
              break;
            case 'wrong':
              osc.type = 'sawtooth';
              osc.frequency.setValueAtTime(200, t);
              osc.frequency.setValueAtTime(150, t + 0.15);
              gain.gain.setValueAtTime(0.2, t);
              gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
              osc.start(t); osc.stop(t + 0.3);
              break;
            case 'tick':
              osc.type = 'square';
              osc.frequency.setValueAtTime(800, t);
              gain.gain.setValueAtTime(0.08, t);
              gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
              osc.start(t); osc.stop(t + 0.05);
              break;
            case 'gameover':
              osc.type = 'sawtooth';
              osc.frequency.setValueAtTime(300, t);
              osc.frequency.linearRampToValueAtTime(100, t + 0.8);
              gain.gain.setValueAtTime(0.3, t);
              gain.gain.exponentialRampToValueAtTime(0.001, t + 0.8);
              osc.start(t); osc.stop(t + 0.8);
              break;
            case 'win':
              [523, 659, 784, 1047].forEach((freq, i) => {
                const o = ctx.createOscillator();
                const g = ctx.createGain();
                o.connect(g); g.connect(ctx.destination);
                o.type = 'sine';
                o.frequency.setValueAtTime(freq, t + i * 0.12);
                g.gain.setValueAtTime(0.25, t + i * 0.12);
                g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.12 + 0.3);
                o.start(t + i * 0.12); o.stop(t + i * 0.12 + 0.3);
              });
              break;
          }
        }
      };
    } catch (e) {
      return { play: () => {} };
    }
  }

  // ─────────────────────────────────────────
  // PARTICULES (canvas background)
  // ─────────────────────────────────────────
  _initParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.6 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 170, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    };
    animate();
  }

  // ─────────────────────────────────────────
  // NAVIGATION ÉCRANS
  // ─────────────────────────────────────────
  _showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active', 'exit-left');
    });
    const target = document.getElementById(`screen-${name}`);
    if (target) {
      target.classList.add('active');
    }
  }

  // ─────────────────────────────────────────
  // BINDING DES ÉVÉNEMENTS
  // ─────────────────────────────────────────
  _bindEvents() {
    // Home
    document.getElementById('btn-start').addEventListener('click', () => this._goToCategories());
    document.getElementById('player-name').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this._goToCategories();
    });
    document.getElementById('btn-leaderboard-home').addEventListener('click', () => {
      this._renderLeaderboard('all');
      this._showScreen('leaderboard');
    });

    // Categories
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        this.state.category = card.dataset.category;
        const meta = CATEGORIES[this.state.category];
        document.getElementById('selected-category-label').textContent =
          `${meta.icon} ${meta.label} — Choisissez votre niveau`;
        this._showScreen('difficulty');
      });
    });

    // Difficulty
    document.querySelectorAll('.difficulty-card').forEach(card => {
      card.addEventListener('click', () => {
        this.state.difficulty = card.dataset.difficulty;
        this._startGame();
      });
    });

    // Back buttons
    document.querySelectorAll('.btn-back').forEach(btn => {
      btn.addEventListener('click', () => {
        this._showScreen(btn.dataset.back || 'home');
      });
    });

    // Quiz — réponses
    document.querySelectorAll('.answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!this.state.answered) this._submitAnswer(parseInt(btn.dataset.index));
      });
    });

    // Quiz — hint
    document.getElementById('btn-hint').addEventListener('click', () => this._useHint());

    // Explication — bouton Suivant
    document.getElementById('btn-next').addEventListener('click', () => this._nextQuestion());

    // Résultats
    document.getElementById('btn-play-again').addEventListener('click', () => this._startGame());
    document.getElementById('btn-change-category').addEventListener('click', () => this._showScreen('categories'));
    document.getElementById('btn-home-results').addEventListener('click', () => this._showScreen('home'));
    document.getElementById('btn-leaderboard-results').addEventListener('click', () => {
      this._renderLeaderboard('all');
      this._showScreen('leaderboard');
    });

    // Leaderboard — filtres
    document.querySelectorAll('.lb-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.lb-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this._renderLeaderboard(btn.dataset.filter);
      });
    });

    // Leaderboard — effacer
    document.getElementById('btn-clear-lb').addEventListener('click', () => {
      if (confirm('Effacer tous les scores ?')) {
        localStorage.removeItem('quizhero_scores');
        this._renderLeaderboard('all');
      }
    });

    // Game Over modal
    document.getElementById('btn-gameover-retry').addEventListener('click', () => {
      this._hideModal();
      this._startGame();
    });
    document.getElementById('btn-gameover-home').addEventListener('click', () => {
      this._hideModal();
      this._showScreen('home');
    });
  }

  // ─────────────────────────────────────────
  // NAVIGATION : Home → Categories
  // ─────────────────────────────────────────
  _goToCategories() {
    const name = document.getElementById('player-name').value.trim();
    if (!name) {
      document.getElementById('player-name').focus();
      document.getElementById('player-name').style.borderColor = '#ff416c';
      setTimeout(() => document.getElementById('player-name').style.borderColor = '', 1500);
      return;
    }
    this.state.playerName = name;
    this._showScreen('categories');
  }

  // ─────────────────────────────────────────
  // DÉMARRAGE DU JEU
  // ─────────────────────────────────────────
  _startGame() {
    const { category, difficulty } = this.state;
    const pool = [...QUESTIONS[category][difficulty]];
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 10);

    // Mélanger les réponses de chaque question
    this.state.questions = shuffled.map(q => {
      const answers = [...q.answers];
      const correctText = answers[q.correct];
      answers.sort(() => Math.random() - 0.5);
      return {
        ...q,
        answers,
        shuffledCorrectIndex: answers.indexOf(correctText)
      };
    });

    // Reset état
    Object.assign(this.state, {
      currentIndex: 0,
      score: 0,
      lives: 3,
      hints: 3,
      streak: 0,
      maxStreak: 0,
      correctCount: 0,
      wrongCount: 0,
      answered: false,
      totalTimeMs: 0
    });

    this._showScreen('quiz');
    this._resetLivesUI();
    this._updateScoreUI();
    this._loadQuestion();
  }

  // ─────────────────────────────────────────
  // CHARGEMENT D'UNE QUESTION
  // ─────────────────────────────────────────
  _loadQuestion() {
    const { questions, currentIndex, difficulty, category, hints } = this.state;
    const q = questions[currentIndex];
    const config = DIFFICULTY_CONFIG[difficulty];
    const catMeta = CATEGORIES[category];

    this.state.answered = false;
    this.state.timerMax = config.time;
    this.state.timerValue = config.time;
    this.state.questionStartTime = Date.now();

    // Masquer overlay explication
    document.getElementById('explanation-overlay').classList.add('hidden');

    // Mettre à jour les meta
    document.getElementById('q-category').textContent = `${catMeta.icon} ${catMeta.label}`;
    document.getElementById('q-difficulty').textContent = config.label;
    document.getElementById('q-number').textContent = `Q${currentIndex + 1}`;

    // Texte de la question
    document.getElementById('question-text').textContent = q.question;

    // Remplir les boutons de réponses
    const btns = document.querySelectorAll('.answer-btn');
    const letters = ['A', 'B', 'C', 'D'];
    btns.forEach((btn, i) => {
      btn.className = 'answer-btn';
      btn.disabled = false;
      btn.querySelector('.answer-letter').textContent = letters[i];
      btn.querySelector('.answer-text').textContent = q.answers[i];
    });

    // Progression
    const pct = ((currentIndex) / 10) * 100;
    document.getElementById('progress-fill').style.width = `${pct}%`;
    document.getElementById('progress-text').textContent = `${currentIndex + 1} / 10`;

    // Hint button
    const hintBtn = document.getElementById('btn-hint');
    hintBtn.disabled = hints <= 0;
    document.getElementById('hints-left').textContent = hints;

    // Streak badge
    if (this.state.streak >= 2) {
      document.getElementById('streak-count').textContent = this.state.streak;
      const badge = document.getElementById('streak-badge');
      badge.classList.add('show');
    } else {
      document.getElementById('streak-badge').classList.remove('show');
    }

    // Démarrer le timer
    this._startTimer();
  }

  // ─────────────────────────────────────────
  // TIMER
  // ─────────────────────────────────────────
  _startTimer() {
    clearInterval(this.state.timerInterval);
    this._updateTimerUI(this.state.timerMax);

    this.state.timerInterval = setInterval(() => {
      this.state.timerValue--;
      this._updateTimerUI(this.state.timerValue);

      if (this.state.timerValue <= 5) this.audio.play('tick');

      if (this.state.timerValue <= 0) {
        clearInterval(this.state.timerInterval);
        this._onTimeUp();
      }
    }, 1000);
  }

  _updateTimerUI(value) {
    const max = this.state.timerMax;
    const circumference = 2 * Math.PI * 52; // r=52
    const offset = circumference * (1 - value / max);

    const arc = document.getElementById('timer-arc');
    arc.style.strokeDashoffset = offset;

    const ratio = value / max;
    if (ratio > 0.5) {
      arc.className = 'timer-arc';
    } else if (ratio > 0.25) {
      arc.className = 'timer-arc warning';
    } else {
      arc.className = 'timer-arc danger';
    }

    document.getElementById('timer-number').textContent = value;
  }

  _onTimeUp() {
    if (this.state.answered) return;
    this.state.answered = true;
    this._loseLife();

    const q = this.state.questions[this.state.currentIndex];
    this._highlightAnswer(q.shuffledCorrectIndex, -1);
    this._showExplanation(false, q.explanation, 0, 'Temps écoulé !');

    this.state.streak = 0;
    this.state.wrongCount++;
  }

  // ─────────────────────────────────────────
  // RÉPONDRE
  // ─────────────────────────────────────────
  _submitAnswer(clickedIndex) {
    if (this.state.answered) return;
    clearInterval(this.state.timerInterval);
    this.state.answered = true;

    const q = this.state.questions[this.state.currentIndex];
    const isCorrect = clickedIndex === q.shuffledCorrectIndex;
    const timeSpent = (Date.now() - this.state.questionStartTime) / 1000;
    this.state.totalTimeMs += Date.now() - this.state.questionStartTime;

    this._highlightAnswer(q.shuffledCorrectIndex, clickedIndex);

    if (isCorrect) {
      this.audio.play('correct');
      this.state.streak++;
      if (this.state.streak > this.state.maxStreak) this.state.maxStreak = this.state.streak;
      this.state.correctCount++;

      const gained = this._calcScore(timeSpent);
      this.state.score += gained;
      this._updateScoreUI(true);
      this._showExplanation(true, q.explanation, gained, '✅ Bonne réponse !');
    } else {
      this.audio.play('wrong');
      this.state.streak = 0;
      this.state.wrongCount++;
      this._loseLife();
      this._showExplanation(false, q.explanation, 0, '❌ Mauvaise réponse !');
    }
  }

  _calcScore(timeSpent) {
    const config = DIFFICULTY_CONFIG[this.state.difficulty];
    const timeMax = this.state.timerMax;
    const timeBonus = Math.round(config.baseScore * Math.max(0, (timeMax - timeSpent) / timeMax));
    const streakBonus = Math.round(config.baseScore * 0.1 * Math.max(0, this.state.streak - 1));
    return config.baseScore + timeBonus + streakBonus;
  }

  _highlightAnswer(correctIndex, clickedIndex) {
    const btns = document.querySelectorAll('.answer-btn');
    btns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === correctIndex) {
        btn.classList.add('correct');
      } else if (i === clickedIndex && clickedIndex !== correctIndex) {
        btn.classList.add('wrong');
      }
    });
  }

  _showExplanation(isCorrect, text, gained, title) {
    document.getElementById('answer-result-icon').textContent = isCorrect ? '🎉' : '💡';
    document.getElementById('answer-result-title').textContent = title;
    document.getElementById('explanation-text').textContent = text;
    const gainEl = document.getElementById('score-gained');
    gainEl.textContent = isCorrect ? `+${gained} pts` : '';
    gainEl.style.display = isCorrect ? 'block' : 'none';
    document.getElementById('explanation-overlay').classList.remove('hidden');
  }

  // ─────────────────────────────────────────
  // VIES
  // ─────────────────────────────────────────
  _loseLife() {
    if (this.state.lives <= 0) return;
    const lifeEl = document.getElementById(`life-${this.state.lives}`);
    if (lifeEl) {
      lifeEl.classList.add('lost', 'shake');
      setTimeout(() => lifeEl.classList.remove('shake'), 400);
    }
    this.state.lives--;
  }

  _resetLivesUI() {
    for (let i = 1; i <= 3; i++) {
      const el = document.getElementById(`life-${i}`);
      if (el) el.className = 'life';
    }
  }

  // ─────────────────────────────────────────
  // QUESTION SUIVANTE
  // ─────────────────────────────────────────
  _nextQuestion() {
    document.getElementById('explanation-overlay').classList.add('hidden');

    if (this.state.lives <= 0) {
      this._showGameOver();
      return;
    }

    this.state.currentIndex++;

    if (this.state.currentIndex >= this.state.questions.length) {
      this._endGame();
    } else {
      this._loadQuestion();
    }
  }

  // ─────────────────────────────────────────
  // INDICE (50/50)
  // ─────────────────────────────────────────
  _useHint() {
    if (this.state.hints <= 0 || this.state.answered) return;
    this.state.hints--;
    document.getElementById('hints-left').textContent = this.state.hints;
    if (this.state.hints <= 0) document.getElementById('btn-hint').disabled = true;

    const q = this.state.questions[this.state.currentIndex];
    const btns = document.querySelectorAll('.answer-btn');
    let removed = 0;

    const indices = [0, 1, 2, 3].filter(i => i !== q.shuffledCorrectIndex);
    indices.sort(() => Math.random() - 0.5);

    for (const i of indices) {
      if (removed >= 2) break;
      btns[i].classList.add('hidden-hint');
      btns[i].disabled = true;
      removed++;
    }
  }

  // ─────────────────────────────────────────
  // FIN DE JEU (succès)
  // ─────────────────────────────────────────
  _endGame() {
    clearInterval(this.state.timerInterval);

    const { score, correctCount, wrongCount, maxStreak, totalTimeMs, questions } = this.state;
    const accuracy = Math.round((correctCount / questions.length) * 100);
    const avgTime = questions.length > 0 ? Math.round(totalTimeMs / questions.length / 1000) : 0;

    // Grade
    let grade, trophy, title;
    if (accuracy === 100) { grade = 'S'; trophy = '🏆'; title = 'Parfait !'; }
    else if (accuracy >= 80) { grade = 'A'; trophy = '🥇'; title = 'Excellent !'; }
    else if (accuracy >= 60) { grade = 'B'; trophy = '🥈'; title = 'Très bien !'; }
    else if (accuracy >= 40) { grade = 'C'; trophy = '🥉'; title = 'Pas mal !'; }
    else { grade = 'D'; trophy = '💪'; title = 'Continuez !'; }

    // UI résultats
    document.getElementById('result-trophy').textContent = trophy;
    document.getElementById('result-title').textContent = title;

    const gradeBadge = document.getElementById('grade-badge');
    gradeBadge.textContent = grade;
    gradeBadge.className = `grade-badge ${grade}`;

    document.getElementById('final-score-value').textContent = score.toLocaleString();
    document.getElementById('stat-correct').textContent = correctCount;
    document.getElementById('stat-wrong').textContent = wrongCount;
    document.getElementById('stat-accuracy').textContent = `${accuracy}%`;
    document.getElementById('stat-streak').textContent = maxStreak;

    // Sauvegarde leaderboard
    this._saveScore();

    // Confettis si bon score
    if (accuracy >= 60) {
      this.audio.play('win');
      this._launchConfetti();
    } else {
      this.audio.play('gameover');
    }

    this._showScreen('results');
  }

  // ─────────────────────────────────────────
  // GAME OVER (plus de vies)
  // ─────────────────────────────────────────
  _showGameOver() {
    clearInterval(this.state.timerInterval);
    this.audio.play('gameover');
    document.getElementById('gameover-score').textContent = this.state.score.toLocaleString();
    document.getElementById('gameover-modal').classList.remove('hidden');
    document.getElementById('modal-backdrop').classList.remove('hidden');
    this._saveScore();
  }

  _hideModal() {
    document.getElementById('gameover-modal').classList.add('hidden');
    document.getElementById('modal-backdrop').classList.add('hidden');
  }

  // ─────────────────────────────────────────
  // SCORE UI
  // ─────────────────────────────────────────
  _updateScoreUI(bump = false) {
    const el = document.getElementById('score-display');
    el.textContent = this.state.score.toLocaleString();
    if (bump) {
      el.classList.remove('bump');
      void el.offsetWidth;
      el.classList.add('bump');
    }
  }

  // ─────────────────────────────────────────
  // LEADERBOARD
  // ─────────────────────────────────────────
  _saveScore() {
    const scores = this._loadScores();
    const entry = {
      name: this.state.playerName,
      score: this.state.score,
      category: this.state.category,
      difficulty: this.state.difficulty,
      accuracy: Math.round((this.state.correctCount / this.state.questions.length) * 100),
      date: new Date().toLocaleDateString('fr-FR')
    };
    scores.push(entry);
    scores.sort((a, b) => b.score - a.score);
    const top = scores.slice(0, 50);
    localStorage.setItem('quizhero_scores', JSON.stringify(top));
  }

  _loadScores() {
    try {
      return JSON.parse(localStorage.getItem('quizhero_scores') || '[]');
    } catch {
      return [];
    }
  }

  _renderLeaderboard(filter) {
    let scores = this._loadScores();
    if (filter !== 'all') scores = scores.filter(s => s.category === filter);

    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';

    if (scores.length === 0) {
      list.innerHTML = '<p class="lb-empty">Aucun score pour cette catégorie. Soyez le premier !</p>';
      return;
    }

    const medals = ['🥇', '🥈', '🥉'];
    scores.slice(0, 20).forEach((entry, i) => {
      const catMeta = CATEGORIES[entry.category] || { icon: '?', label: entry.category };
      const diffConf = DIFFICULTY_CONFIG[entry.difficulty] || { label: entry.difficulty };
      const div = document.createElement('div');
      div.className = 'lb-entry';
      div.style.animationDelay = `${i * 0.05}s`;
      div.innerHTML = `
        <span class="lb-rank">${medals[i] || `#${i + 1}`}</span>
        <div class="lb-info">
          <div class="lb-name">${this._escapeHtml(entry.name)}</div>
          <div class="lb-meta">${catMeta.icon} ${catMeta.label} · ${diffConf.label} · ${entry.accuracy}% · ${entry.date}</div>
        </div>
        <span class="lb-score">${entry.score.toLocaleString()}</span>
      `;
      list.appendChild(div);
    });
  }

  _escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ─────────────────────────────────────────
  // CONFETTIS
  // ─────────────────────────────────────────
  _launchConfetti() {
    const area = document.getElementById('confetti-area');
    area.innerHTML = '';
    const colors = ['#6c63ff','#ff6584','#ffd700','#00d9a0','#ff9f43','#54a0ff','#ff6b81','#a29bfe'];

    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const delay = Math.random() * 1.5;
      const duration = 2.5 + Math.random() * 2;
      const size = 6 + Math.random() * 8;
      const isCircle = Math.random() > 0.5;

      piece.style.cssText = `
        left: ${left}vw;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: ${isCircle ? '50%' : '2px'};
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `;
      area.appendChild(piece);
    }

    setTimeout(() => { area.innerHTML = ''; }, 5000);
  }
}

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  window.game = new QuizGame();
});
