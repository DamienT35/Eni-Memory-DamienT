//faire une fonction qui clique et affiche une image

function init() {
  for (const caseJeu of document.querySelectorAll("td")) {
    caseJeu.addEventListener("click", (event) => {
      event.currentTarget.querySelector("img").src = "ressources/question.svg";
    });
  }
}
// Cette instruction attache une fonction nommée init à l'événement de chargement de la fenêtre, garantissant qu'elle s'exécute une fois que toute la page  est entièrement chargée.
window.addEventListener("load", init);

//déclaration de constante qui recupère les id  du tableaux
const itemPoint = { 1: "ressources/question.svg" };
const point = itemPoint;
const itemLegumes = {
  1: "ressources/memory-legume/1.svg",
  2: "ressources/memory-legume/2.svg",
  3: "ressources/memory-legume/3.svg",
  4: "ressources/memory-legume/4.svg",
  5: "ressources/memory-legume/5.svg",
  6: "ressources/memory-legume/6.svg",
};
const legumes = itemLegumes;

// function shuffle: fonction qui melange des valeurs aléatoire
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//  constante convert: qui change une valeur string en int
const convert = legumes.map((item) => ({
  ...item,
  valeur: Number(item.valeur),
}));
const tableauConvertir = convert;

//
const tableauMelange = shuffle.tableauConvertir;
