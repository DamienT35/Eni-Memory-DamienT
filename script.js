//faire une fonction qui clique et affiche une image

function init() {
  for (const caseJeu of document.querySelectorAll("td")) {
    caseJeu.addEventListener("click", (event) => {
      event.currentTarget.querySelector("img").src = "ressources/question.svg";
    });
  }
}
window.addEventListener("load", init);

const point = { 1: "ressources/question.svg" };
const legumes = {
  1: "ressources/memory-legume/1.svg",
  2: "ressources/memory-legume/2.svg",
  3: "ressources/memory-legume/3.svg",
  4: "ressources/memory-legume/4.svg",
  5: "ressources/memory-legume/5.svg",
  6: "ressources/memory-legume/6.svg",
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const tableauConvertir = legumes.map((item) => ({
  ...item,
  valeur: Number(item.valeur),
}));

const tableauMelange = shuffle.tableauConvertir;
