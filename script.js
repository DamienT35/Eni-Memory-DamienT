// Déclarer les variable : déclaration d'un objet legumes

const legumes = {
  1: "ressources/memory-legume/1.svg",
  2: "ressources/memory-legume/2.svg",
  3: "ressources/memory-legume/3.svg",
  4: "ressources/memory-legume/4.svg",
  5: "ressources/memory-legume/5.svg",
  6: "ressources/memory-legume/6.svg",
};

//déclaration de l'objet itemPoint qui associe un identifiant à une ressource d'image.
const itemPoint = { 1: "ressources/question.svg" };

// constante pour recuperer toutes les cases du tableau

const cases = document.querySelectorAll("td");

// fonction shuffle: qui prend un tableau et le mélange de manière aléatoire
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// Convertit les clés de l'objet en tableau de nombres [1, 2, 3, 4, 5, 6]
const LegumeConvert = Object.keys(legumes).map(Number);

// 2. On double les numéros pour avoir les 6 paires (12 cartes) et on mélange
const tableauMelange = shuffle([...LegumeConvert, ...LegumeConvert]);

//function iniTableau: qui initialise le plateau de jeu en parcourant chaque case du tableau.
function iniTableau() {
  for (let i = 0; i < cases.length; i++) {
    //  On récupère la case actuelle
    const casePlateau1 = cases[i];

    //  cible la balise <img> dans la case et on lui donne sa source
    const baliseImg = casePlateau1.querySelector("img");
    baliseImg.src = itemPoint[1]; // image poitn d'interrogation
  }
}

iniTableau();

// function revelerImage: qui prend une case et un index en paramètre, et qui révèle l'image correspondante à la case cliquée.
function revelerImage(uneCase, index) {
  const indexLegume = tableauMelange[index];
  uneCase.querySelector("img").src = legumes[indexLegume];
}

// Définition des points par légume
const pointsParLegume = {
  1: 1,
  2: 10,
  3: 100,
  4: 1000,
  5: 10000,
  6: 100000,
};

// Définition des sommes gagnantes
const NB_CARTES_TOUR = 2; // La constante qui déclenche la vérification à 2 clics
const sommesGagnantes = [2, 20, 200, 2000, 20000, 200000];
let compteurClics = 0;
let verrouillage = false;

// Ajout d'un écouteur d'événement pour chaque case du tableau
cases.forEach((uneCase, index) => {
  uneCase.addEventListener("click", () => {
    const img = uneCase.querySelector("img");

    // Sécurités : on ignore si verrouillé, si déjà retournée ce tour-ci, ou si paire déjà validée
    if (verrouillage || img.getAttribute("src") !== itemPoint[1]) {
      return;
    }

    //  On retourne la carte cliquée et on incrémente le compteur
    revelerImage(uneCase, index);
    compteurClics++;

    //  Dès que le compteur atteint la constante (2), on lance la vérification
    if (compteurClics === NB_CARTES_TOUR) {
      let totalPoints = 0;
      const cartesEnCours = [];

      // Boucle pour vérifier les cartes actuellement retournées et calculer le total des points
      for (let i = 0; i < cases.length; i++) {
        const imageCase = cases[i].querySelector("img");
        const Retournée = imageCase.getAttribute("src") !== itemPoint[1];
        const dejaValidee = cases[i].classList.contains("trouvee");

        //  Si la carte est retournée et pas encore validée, on ajoute ses points au total
        if (Retournée && !dejaValidee) {
          const numeroLegume = tableauMelange[i];
          totalPoints = totalPoints + pointsParLegume[numeroLegume];
          cartesEnCours.push(cases[i]);
        }
      }

      // On vérifie le total des points calculé par la boucle
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
          // Réinitialisation du compteur et du verrouillage après le délai
          compteurClics = 0;
          verrouillage = false;
        }, 1000);
      }
    }
  });
});

// Ajout d'un écouteur d'événement pour la touche Espace afin de réinitialiser le plateau de jeu
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    // Réinitialiser le plateau de jeu refresh la page
    location.reload();
  }
});
