// Sélectionner l'élément slider
let slider = document.querySelector(".slider");

// Sélectionner les éléments slide
let slides = document.querySelectorAll(".slide");

// Définir un index pour le slide courant
let index = 0;

// Définir une fonction pour changer le slide
function changeSlide() {
  // Cacher tous les slides
  for (let slide of slides) {
    slide.style.display = "none";
  }
  // Augmenter l'index de 1
  index++;
  // Si l'index dépasse le nombre de slides, le remettre à 0
  if (index > slides.length) {
    index = 0;
  }
  // Afficher le slide correspondant à l'index
  slides[index - 1].style.display = "flex";
}

// Appeler la fonction changeSlide toutes les 3 secondes
setInterval(changeSlide, 3000);