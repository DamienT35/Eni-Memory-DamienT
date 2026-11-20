# ENI Memory

Jeu de Memory réalisé dans le cadre d’un projet de formation à l’ENI. Retournez les cartes deux par deux et retrouvez toutes les paires.

## Fonctionnalités

- Plateau de 12 cartes, soit 6 paires sur le thème des légumes.
- Mélange des cartes au démarrage.
- Vérification des paires et masquage des cartes en cas d’erreur.
- Relance d’une partie avec la touche **Espace**.
- Pages d’accueil, d’inscription, de connexion et de profil.

> Les pages d’inscription, de connexion et de profil sont des interfaces statiques : aucune création de compte, authentification ou sauvegarde de données n’est implémentée. Les scores ne sont pas enregistrés.

## Lancer le jeu

Aucune installation n’est nécessaire. Ouvrez `index.html` dans un navigateur, puis sélectionnez **Jouer** dans la navigation.

Bootstrap est chargé depuis un CDN : une connexion Internet est nécessaire pour afficher ses styles.

## Structure du projet

- `index.html` : accueil et règles du jeu.
- `Jouer.html` : plateau de jeu.
- `Inscription.html`, `Connexion.html`, `Profil.html` : formulaires d’interface.
- `script.js` : mélange des cartes, déroulement d’une partie et relance.
- `style.css` : styles personnalisés.
- `ressources/` : images et icônes du jeu, réparties par thème.
- `doc_projet/` : documents et captures liés au projet.

## Technologies

- HTML
- CSS
- JavaScript
- Bootstrap 5.3.9
