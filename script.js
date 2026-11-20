

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




//function iniTableau: qui initialise le plateau de jeu en parcourant chaque case du tableau et en définissant l'image de chaque case sur une image de point d'interrogation. Cela prépare le plateau pour le jeu de mémoire.
function iniTableau() {


  
  for (let i = 0; i < cases.length; i++) {
    
    //  On récupère la case actuelle
    const casePlateau1 = cases[i];

  
  
    //  On cible la balise <img> dans la case et on lui donne sa source
    const baliseImg = casePlateau1.querySelector("img");
    baliseImg.src = itemPoint[1]; // image poitn d'interrogation

  
  }
}


iniTableau();



// initialisation de l'event listener sur chaque case du tableau pour afficher l'image du légume correspondant lorsqu'une case est cliquée. L'image affichée est déterminée par l'index de la case dans le tableau des cases et le tableau mélangé des légumes.
// On parcourt chaque case en récupérant l'élément (uneCase) et sa position (index)



function revelerImage(uneCase, index) {
  const indexLegume = tableauMelange[index];
  uneCase.querySelector("img").src = legumes[indexLegume];
}

const pointsParLegume = {
  1: 1,
  2: 10,
  3: 100,
  4: 1000,
  5: 10000,
  6: 100000,
};

const NB_CARTES_TOUR = 2; // La constante qui déclenche la vérification à 2 clics
const sommesGagnantes = [2, 20, 200, 2000, 20000, 200000];
let compteurClics = 0;
let verrouillage = false;

cases.forEach((uneCase, index) => {
  uneCase.addEventListener("click", () => {
    const img = uneCase.querySelector("img");

    // Sécurités : on ignore si verrouillé, si déjà retournée ce tour-ci, ou si paire déjà validée
    if (verrouillage || img.getAttribute("src") !== itemPoint[1]) {
      return;
    }

    // 1. On retourne la carte cliquée et on incrémente le compteur
    revelerImage(uneCase, index);
    compteurClics++;

    // 2. Dès que le compteur atteint la constante (2), on lance la vérification
    if (compteurClics === NB_CARTES_TOUR) {
      let totalPoints = 0;
      const cartesEnCours = [];

      // Boucle qui parcourt toutes les cases pour trouver les 2 cartes ouvertes de ce tour
      for (let i = 0; i < cases.length; i++) {
        const imageCase = cases[i].querySelector("img");
        const estRetournée = imageCase.getAttribute("src") !== itemPoint[1];
        const estDejaValidee = cases[i].classList.contains("trouvee");

        if (estRetournée && !estDejaValidee) {
          const numeroLegume = tableauMelange[i];
          totalPoints += pointsParLegume[numeroLegume];
          cartesEnCours.push(cases[i]);
        }
      }

      // 3. On vérifie le total des points calculé par la boucle
      if (sommesGagnantes.includes(totalPoints)) {
        for (let i = 0; i < cartesEnCours.length; i++) {
          cartesEnCours[i].classList.add("trouvee");
        }
        compteurClics = 0;
      } else {
        verrouillage = true;
        setTimeout(() => {
          for (let i = 0; i < cartesEnCours.length; i++) {
            cartesEnCours[i].querySelector("img").src = itemPoint[1];
          }
          compteurClics = 0;
          verrouillage = false;
        }, 1000);
      }
    }
  });
});

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    // Réinitialiser le plateau de jeu refresh la page
    location.reload();
  }
});
























