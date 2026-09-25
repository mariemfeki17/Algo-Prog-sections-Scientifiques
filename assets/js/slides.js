/* =========================================================
   NAVIGATION SLIDES (Mode Présentation Prof)
   - Flèches gauche/droite
   - Échap pour quitter le plein écran
   - Bouton plein écran
   - Masquer/afficher les corrections
   ========================================================= */

let currentSlide = 0;
let slides = [];

function initSlides() {
  slides = Array.from(document.querySelectorAll(".slide"));
  if (slides.length === 0) return;

  showSlide(0);
  document.addEventListener("keydown", handleKeydown);
  updateCounter();
}

function showSlide(index) {
  if (index < 0 || index >= slides.length) return;

  slides.forEach((s, i) => {
    s.classList.toggle("active", i === index);
  });

  currentSlide = index;
  updateCounter();
  // Remonter en haut de la slide
  slides[index].scrollTop = 0;
}

function updateCounter() {
  const counter = document.getElementById("slide-counter");
  if (counter) {
    counter.textContent = `${currentSlide + 1} / ${slides.length}`;
  }
}

function handleKeydown(e) {
  switch (e.key) {
    case "ArrowRight":
    case " ":
      e.preventDefault();
      showSlide(currentSlide + 1);
      break;
    case "ArrowLeft":
      e.preventDefault();
      showSlide(currentSlide - 1);
      break;
    case "Escape":
      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      }
      break;
    case "f":
    case "F":
      toggleFullscreen();
      break;
    case "Home":
      showSlide(0);
      break;
    case "End":
      showSlide(slides.length - 1);
      break;
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(err => {
      console.warn("Plein écran non disponible :", err);
    });
  } else {
    document.exitFullscreen?.();
  }
}

function toggleCorrection(btn) {
  const correction = btn.nextElementSibling;
  if (!correction) return;
  correction.classList.toggle("hidden");
  const hidden = correction.classList.contains("hidden");
  btn.textContent = hidden ? "Afficher la correction" : "Masquer la correction";
}

/* Exposer globalement */
window.initSlides = initSlides;
window.showSlide = showSlide;
window.toggleFullscreen = toggleFullscreen;
window.toggleCorrection = toggleCorrection;