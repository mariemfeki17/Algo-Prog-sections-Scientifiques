/* =========================================================
   GESTION DE LA PROGRESSION (localStorage)
   ========================================================= */

const STORAGE_KEY = "progression-info-lycee";

/**
 * Récupère l'objet progression complet.
 * @returns {Object} - { "2eme-ch01": { termine: true, score: 3, date: "..." }, ... }
 */
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (e) {
    console.warn("Progression illisible, réinitialisation.", e);
    return {};
  }
}

/**
 * Enregistre la progression d'un cours.
 */
function setProgress(courseId, value) {
  const progress = getProgress();
  progress[courseId] = { ...progress[courseId], ...value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

/**
 * Vérifie si un cours est terminé.
 */
function isCompleted(courseId) {
  return getProgress()[courseId]?.termine === true;
}

/**
 * Récupère le score d'un quiz pour un cours.
 */
function getCourseScore(courseId) {
  const p = getProgress()[courseId];
  return p && typeof p.score === "number" ? p.score : null;
}

/**
 * Calcule la progression globale pour une année donnée (ou toutes).
 * @param {string} [annee] - "2eme" | "3eme" | "4eme" | undefined
 * @returns {{ total: number, completed: number, percentage: number }}
 */
function getGlobalProgress(annee) {
  const progress = getProgress();
  let ids = [];

  if (annee && window.CATALOGUE && window.CATALOGUE[annee]) {
    ids = window.CATALOGUE[annee].map(c => c.id);
  } else if (window.CATALOGUE) {
    ids = Object.values(window.CATALOGUE).flat().map(c => c.id);
  }

  const total = ids.length;
  const completed = ids.filter(id => progress[id]?.termine).length;
  const percentage = total ? Math.round((completed / total) * 100) : 0;
  return { total, completed, percentage };
}

/**
 * Réinitialise toute la progression (utile pour tests / prof).
 */
function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

/* Exposer globalement */
window.getProgress = getProgress;
window.setProgress = setProgress;
window.isCompleted = isCompleted;
window.getCourseScore = getCourseScore;
window.getGlobalProgress = getGlobalProgress;
window.resetProgress = resetProgress;