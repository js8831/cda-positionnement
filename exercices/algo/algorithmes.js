function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Attention à mettre en premier car pour 15 par exemple,
    // il va vérifier si c'est un multiple de 3 ou de 5 (selon l'ordre de la condition)
    // et si c'est le cas, il n'ira pas à la condition double qui sera en dernier (multiple de 3 et de 5)
    // Il faut donc mettre la condition la plus restrictive en premier !
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(15);

function isPalindrome(str) {
  const cleanStr = str
    // Mettre en minuscule
    .toLowerCase()
    // Séparer les accents des lettres é > e + '
    .normalize("NFD")
    // On supprime les accents séparés
    .replace(/[\u0300-\u036f]/g, "")
    // Garde uniquement les chiffres et les lettres
    .replace(/[^a-z0-9]/g, "");

  //.split('') : Découpe la chaîne de caractères en une liste (ou tableau) de lettres individuelles.
  // Avec des guillemets vides (.split('')) : Cela indique qu'on veut découper la chaîne de caractères entre chaque lettre,
  // c'est-à-dire à chaque intervalle vide (zéro caractère).
  //.reverse() : Inverse l'ordre des lettres dans ce tableau.
  //.join('') : Recolle toutes les lettres ensemble pour former une nouvelle chaîne de caractères inversée.

  const reversedStr = cleanStr.split("").reverse().join("");
  // on compare et renvoie AUTOMATIQUEMENT true si c'est le mot inversé et égale au mot normal
  return cleanStr === reversedStr;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
