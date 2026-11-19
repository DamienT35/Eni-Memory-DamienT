

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

// Procédé B : On crée notre propre compteur manuel pour remplacer le modulo
  let indexLegume = 0;

  // Procédé C : On parcourt chaque case du plateau
  for (let i = 0; i < cases.length; i++) {
    
    // Étape 1 : On récupère la case actuelle
    const casePlateau1 = cases[i];

    // Étape 2 : On pioche le légume grâce à notre compteur manuel
    const legumeRandom = tableauMelange[indexLegume];

    // Étape 3 : On cible la balise <img> dans la case et on lui donne sa source
    const baliseImg = casePlateau1.querySelector("img");
    baliseImg.src = legumes[legumeRandom];

    // Étape 4 : On avance le compteur de 1 pour le prochain tour
    indexLegume++;
    // Étape 5 (Le remplacement du %) : 
    // Si le compteur atteint la taille max du tableau, on le remet manuellement à 0
    if (indexLegume === tableauMelange.length) {
      indexLegume = 0;
    }

   
  }
}

iniTableau();