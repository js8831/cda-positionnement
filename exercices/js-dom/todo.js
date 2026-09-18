const button = document.getElementById("add-btn");
const input = document.querySelector("input");
const listeTaches = document.getElementById("listeTaches");

button.addEventListener("click", function () {
  // recupere la valeur de l'input et supprime les espace avant et apres
  // avec la methode trim() de l'objet string (Car cela renvoie une chaine de caractère)
  const texteTache = input.value.trim();

  // creation d'un element d'une liste et d'un bouton
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");

  // On initialise (1ere affectation) la propriete textContent de
  // l'objet li (HTML Object / HTML Element) avec la valeur de la const texteTache + un espace pour coller le bouton
  li.textContent = texteTache + " ";
  deleteBtn.textContent = "Supprimer";

  // integration de li dans ul et du btn dans li à la suite
  listeTaches.appendChild(li);
  li.appendChild(deleteBtn);

  // je creé un callback avec la méthode addEventListener() qui prend 2 paramètres
  // elle réagit à l'evenement "click" (1er paramètre) sur le btn
  // et appelle une fct anonyme (2e paramètre - ne pas confondre avec argument) qui supprime les balises.
  // REVOIR LE MECANISME DE CLOSURE QUI FAIT LE LIEN AVEC LE BON ELEMENT LI A SUPPR
  deleteBtn.addEventListener("click", function () {
    li.remove();

    // reinitialisation du champs de l'input à la suppression
    input.value = "";
  });
});
