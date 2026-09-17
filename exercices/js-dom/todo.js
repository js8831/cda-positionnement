const button = document.getElementById("add-btn");
const input = document.querySelector("input");
const listeTaches = document.getElementById("listeTaches");

button.addEventListener("click", function () {
  // recupere la valeur de l'input
  const texteTache = input.value;
  // creation de la liste
  const li = document.createElement("li");
  // integration dans ul
  listeTaches.appendChild(li);
  li.textContent = texteTache;

  const btnSuppr = document.createElement("button");
});
