/* =========================================================
   MOTEUR DE QUIZ
   Charge un JSON depuis data/quiz/{id}-quiz.json
   ========================================================= */

async function loadQuiz(quizId, container) {
  if (!container) return;
  try {
    const quiz = await fetchJSON(`../../data/quiz/${quizId}-quiz.json`);
    renderQuiz(quiz, container);
  } catch (err) {
    console.error("Impossible de charger le quiz :", err);
    container.innerHTML = `<p class="erreur">Quiz indisponible pour le moment.</p>`;
  }
}

function renderQuiz(quiz, container) {
  let html = `<h3>${escapeHTML(quiz.titre)}</h3>`;

  quiz.questions.forEach((q, i) => {
    html += `
      <div class="quiz-question" data-index="${i}">
        <p class="question">${i + 1}. ${escapeHTML(q.enonce)}</p>
        <div class="options">
          ${q.options.map((opt, j) => `
            <label>
              <input type="radio" name="q${i}" value="${j}">
              ${escapeHTML(opt)}
            </label>
          `).join("")}
        </div>
        <div class="feedback hidden"></div>
      </div>
    `;
  });

  html += `<button id="btn-valider-quiz">Valider mes réponses</button>`;
  html += `<div id="quiz-resultat" class="hidden"></div>`;

  container.innerHTML = html;

  container.querySelector("#btn-valider-quiz").addEventListener("click", () => {
    validerQuiz(quiz, container);
  });
}

function validerQuiz(quiz, container) {
  let score = 0;

  quiz.questions.forEach((q, i) => {
    const selected = container.querySelector(`input[name="q${i}"]:checked`);
    const feedback = container.querySelector(`.quiz-question[data-index="${i}"] .feedback`);

    if (selected && parseInt(selected.value, 10) === q.reponse) {
      score++;
      feedback.textContent = "✅ Correct";
      feedback.className = "feedback correct";
    } else {
      feedback.textContent = `❌ Incorrect. Réponse attendue : ${q.options[q.reponse]}`;
      feedback.className = "feedback incorrect";
    }
  });

  const resultat = container.querySelector("#quiz-resultat");
  resultat.textContent = `Score : ${score} / ${quiz.questions.length}`;
  resultat.classList.remove("hidden");

  // Sauvegarde du score dans localStorage
  if (typeof setProgress === "function") {
    setProgress(quiz.id, {
      termine: true,
      score: score,
      date: new Date().toISOString()
    });
  }
}

window.loadQuiz = loadQuiz;