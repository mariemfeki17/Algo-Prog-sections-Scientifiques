/* =========================================================
   APPLICATION — PAGE D'ACCUEIL
   ========================================================= */

let anneeActive = "2eme";

document.addEventListener("DOMContentLoaded", () => {
  initFiltres();
  renderCours(anneeActive);
  renderSlides();
  updateGlobalProgress();
});

/* ---------- Filtres par année ---------- */
function initFiltres() {
  const boutons = document.querySelectorAll(".filtre");
  boutons.forEach(btn => {
    btn.addEventListener("click", () => {
      anneeActive = btn.dataset.annee;
      boutons.forEach(b => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
      });
      renderCours(anneeActive);
      updateGlobalProgress();
    });
  });
}

/* ---------- Rendu des cartes de cours ---------- */
function renderCours(annee) {
  const grid = document.getElementById("cours-grid");
  if (!grid) return;

  const cours = window.CATALOGUE[annee] || [];
  grid.innerHTML = "";

  if (cours.length === 0) {
    grid.innerHTML = `<p class="empty">Aucun cours disponible pour cette année.</p>`;
    return;
  }

  cours.forEach(c => {
    const done = isCompleted(c.id);
    const score = getCourseScore(c.id);
    const card = document.createElement("article");
    card.className = "cours-card";
    card.innerHTML = `
      <div class="badges">
        <span class="badge ${badgeAnneeClass(c.annee)}">${libelleAnnee(c.annee)}</span>
        <span class="badge badge-chapitre">Chapitre ${formatChapitre(c.chapitre)}</span>
      </div>
      <h3>${escapeHTML(c.titre)}</h3>
      <p class="duree">⏱️ Durée estimée : ${escapeHTML(c.duree)}</p>
      <div class="objectifs">
        <strong>Objectifs :</strong>
        <ul>${c.objectifs.map(o => `<li>${escapeHTML(o)}</li>`).join("")}</ul>
      </div>
      <div class="card-progress">
        <div class="progress-bar">
          <div class="progress-fill" style="width:${done ? 100 : 0}%"></div>
        </div>
        ${done
          ? `<span class="termine">✅ Terminé${score !== null ? ` (${score}/…)` : ""}</span>`
          : `<span>Non commencé</span>`}
      </div>
      <div class="card-actions">
        <a href="${c.cours}" class="btn btn-cours">Ouvrir le cours</a>
        <a href="${c.print}" class="btn btn-print" target="_blank" rel="noopener">🖨️ Imprimer</a>
        <a href="${c.slides}" class="btn btn-slides">📽️ Slides</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ---------- Rendu des slides (mode prof) ---------- */
function renderSlides() {
  const grid = document.getElementById("slides-grid");
  if (!grid) return;

  grid.innerHTML = "";
  Object.values(window.CATALOGUE).flat().forEach(c => {
    const card = document.createElement("div");
    card.className = "slide-card";
    card.innerHTML = `
      <span class="badge ${badgeAnneeClass(c.annee)}">${libelleAnnee(c.annee)}</span>
      <h4>Ch. ${formatChapitre(c.chapitre)} — ${escapeHTML(c.titre)}</h4>
      <a href="${c.slides}">▶ Lancer les slides</a>
    `;
    grid.appendChild(card);
  });
}

/* ---------- Progression globale ---------- */
function updateGlobalProgress() {
  const { total, completed, percentage } = getGlobalProgress(anneeActive);
  const label = document.getElementById("progress-label");
  const percent = document.getElementById("progress-percent");
  const fill = document.getElementById("progress-fill");

  if (!label || !percent || !fill) return;

  label.textContent = `Progression (${libelleAnnee(anneeActive)}) : ${completed} / ${total} chapitres terminés`;
  percent.textContent = `${percentage} %`;
  fill.style.width = `${percentage}%`;
}