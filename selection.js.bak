<script>
  // Sélectionner la section "selection"
  let selection = document.querySelector(".selection");

  // Envoyer une requête au fichier books.json
  fetch("books.json")
    // Convertir la réponse en objet JavaScript
    .then(response => response.json())
    // Accéder au tableau des livres
    .then(books => {
      // Définir un tableau vide pour stocker les livres sélectionnés
      let selectedBooks = [];
      // Répéter trois fois
      for (let i = 0; i < 3; i++) {
        // Générer un index aléatoire entre 0 et la longueur du tableau des livres
        let index = Math.floor(Math.random() * books.length);
        // Ajouter le livre correspondant au tableau des livres sélectionnés
        selectedBooks.push(books[index]);
        // Supprimer le livre du tableau des livres pour éviter les doublons
        books.splice(index, 1);
      }
      // Pour chaque livre sélectionné
      for (let book of selectedBooks) {
        // Créer un élément HTML avec la classe "book"
        let bookElement = `<div class="book">
          <img src="${book.cover}" alt="${book.title}">
          <div class="info">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.genre}</p>
            <a href="${book.file}">En savoir plus</a>
          </div>
        </div>`;
        // Insérer le code HTML de l'élément "book" dans la section "selection"
        selection.innerHTML += bookElement;
      }
    })
    // Gérer les erreurs
    .catch(error => {
      // Afficher un message d'erreur dans la section "selection"
      selection.innerHTML = `<p>Une erreur est survenue : ${error.message}</p>`;
    });
</script>