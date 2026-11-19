

// initaliser le plateau de jeux 
// Déclarer les variable : déclaration d'un objet legumes 

const legumes = {
  1: "ressources/memory-legume/1.svg",
  2: "ressources/memory-legume/2.svg",
  3: "ressources/memory-legume/3.svg",
  4: "ressources/memory-legume/4.svg",
  5: "ressources/memory-legume/5.svg",
  6: "ressources/memory-legume/6.svg",
};

//déclaration d'un objet itemPoint qui associe un identifiant à une ressource d'image. Cet objet est ensuite assigné à la constante point.
const itemPoint = { 1: "ressources/question.svg" };

// pour chaque case du tableau, on ajoute un écouteur d'événement qui déclenche la fonction handleClick lorsque la case est cliquée.

const cases = document.querySelectorAll("td");


// fonction shuffle: qui prend un tableau en entrée et le mélange de manière aléatoire en utilisant l'algorithme de Fisher-Yates. Elle retourne le tableau mélangé.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// 1. On convertit les clés de l'objet en tableau de nombres [1, 2, 3, 4, 5, 6]
const LegumeConvert = Object.keys(legumes).map(Number);

// 2. On double les numéros pour avoir les 6 paires (12 cartes) et on mélange
const tableauMelange = shuffle([...LegumeConvert, ...LegumeConvert]);




// pour chaque case du tableau je vais lui assigner une image de legume aleatoire avec la fonction for et la methode querySelector pour selectionner l'image de chaque case et lui assigner une image de legume aleatoire à partir du tableau melange.
// L'image est affichée en utilisant la source définie dans l'objet legumes.

function iniTableau() {


  // On initialise un compteur 
  let indexLegume = 0;
  for (let i = 0; i < cases.length; i++) {
    
    //  On récupère la case actuelle
    const casePlateau1 = cases[i];

    // On pioche le légume grâce à notre compteur manuel
  
    //  On cible la balise <img> dans la case et on lui donne sa source
    const baliseImg = casePlateau1.querySelector("img");
    baliseImg.src = itemPoint[1]; // image poitn d'interrogation

  
  }
}

iniTableau();

// initialisation de l'event listener sur chaque case du tableau pour afficher l'image du légume correspondant lorsqu'une case est cliquée. L'image affichée est déterminée par l'index de la case dans le tableau des cases et le tableau mélangé des légumes.
function init() {
  for (const caseJeu of document.querySelectorAll("td")) {
    caseJeu.addEventListener("click", (event) => {
      event.currentTarget.querySelector("img").src = legumes[tableauMelange[Array.from(cases).indexOf(event.currentTarget)]];
    });
  }
}



/* Déclaration d'un tableau pour stocker les images cliquées
const imagesCliquees = [];

//fonction handleClick: qui   gère le clic sur une case du tableau. Elle vérifie si la case est déjà retournée, et si ce n'est pas le cas, elle retourne l'image correspondante et l'ajoute au tableau des images cliquées.
//function handleClick(event) {
   

   if (cases.classList.contains("retournée")) {
     return;
   }   


//ajout d'un écouteur d'événement à chaque case du tableau pour gérer le clic et appeler la fonction handleClick.
//cases.forEach((casePlateau) => {
  casePlateau.addEventListener("click", handleClick);
;
// metttre l'image "ressources/question.svg"  pour toutes les cases du tableau au chargement de la page.
window.addEventListener("load", () => { "ressources/question.svg" });






















init();
iniTableau();




