/* =========================================================
   FONCTIONS UTILITAIRES
   ========================================================= */

/**
 * Échappe le HTML pour éviter les injections.
 */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Formate un numéro de chapitre : 1 → "01".
 */
function formatChapitre(n) {
  return String(n).padStart(2, "0");
}

/**
 * Retourne la classe CSS du badge d'année.
 */
function badgeAnneeClass(annee) {
  return `badge-annee-${annee}`;
}

/**
 * Retourne le libellé d'année : "2eme" → "2ème année".
 */
function libelleAnnee(annee) {
  const map = {
    "2eme": "2ème année",
    "3eme": "3ème année",
    "4eme": "4ème année"
  };
  return map[annee] || annee;
}

/**
 * Débounce simple (pour recherche, resize...).
 */
function debounce(fn, delay = 200) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Charge un JSON via fetch (pour quiz / exercices).
 */
async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Erreur de chargement : ${url}`);
  return res.json();
}

/**
 * Crée un élément HTML à partir d'une chaîne.
 */
function createElementFromHTML(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

window.escapeHTML = escapeHTML;
window.formatChapitre = formatChapitre;
window.badgeAnneeClass = badgeAnneeClass;
window.libelleAnnee = libelleAnnee;
window.debounce = debounce;
window.fetchJSON = fetchJSON;
window.createElementFromHTML = createElementFromHTML;