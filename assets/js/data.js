/* =========================================================
   CATALOGUE DES COURS
   Structure : { "2eme": [...], "3eme": [...], "4eme": [...] }
   Chaque cours contient les métadonnées + chemins vers les fichiers.
   ========================================================= */

const CATALOGUE = {
  "2eme": [
    {
      id: "2eme-ch01",
      annee: "2eme",
      chapitre: 1,
      titre: "Notion de problème et d'algorithme",
      duree: "45 min",
      cours: "cours/2eme/ch01-probleme-algorithme.html",
      slides: "slides/2eme/ch01-slides.html",
      print: "print/2eme/ch01-print.html",
      objectifs: [
        "Identifier les étapes de résolution d'un problème",
        "Dégager les entrées, sorties et traitements",
        "Écrire un algorithme simple selon la convention"
      ]
    },
    {
      id: "2eme-ch02",
      annee: "2eme",
      chapitre: 2,
      titre: "Les objets : constantes et variables",
      duree: "50 min",
      cours: "cours/2eme/ch02-objets.html",
      slides: "slides/2eme/ch02-slides.html",
      print: "print/2eme/ch02-print.html",
      objectifs: [
        "Distinguer constante et variable",
        "Déclarer un objet selon la convention",
        "Affecter une valeur à une variable"
      ]
    },
    {
      id: "2eme-ch03",
      annee: "2eme",
      chapitre: 3,
      titre: "Les types de données simples",
      duree: "55 min",
      cours: "cours/2eme/ch03-types-donnees.html",
      slides: "slides/2eme/ch03-slides.html",
      print: "print/2eme/ch03-print.html",
      objectifs: [
        "Identifier les types : entier, réel, caractère, booléen, chaîne",
        "Choisir le type adéquat pour un objet",
        "Implémenter les types en Python"
      ]
    },
    {
      id: "2eme-ch04",
      annee: "2eme",
      chapitre: 4,
      titre: "Les opérations élémentaires",
      duree: "45 min",
      cours: "cours/2eme/ch04-operations-elementaires.html",
      slides: "slides/2eme/ch04-slides.html",
      print: "print/2eme/ch04-print.html",
      objectifs: [
        "Utiliser Lire, Écrire, Écrire_nl",
        "Maîtriser l'affectation",
        "Implémenter en Python (input, print, =)"
      ]
    },
    {
      id: "2eme-ch05",
      annee: "2eme",
      chapitre: 5,
      titre: "La structure conditionnelle",
      duree: "60 min",
      cours: "cours/2eme/ch05-conditionnelles.html",
      slides: "slides/2eme/ch05-slides.html",
      print: "print/2eme/ch05-print.html",
      objectifs: [
        "Écrire Si...Alors et Si...Sinon",
        "Implémenter if / if...else en Python",
        "Résoudre des problèmes simples"
      ]
    },
    {
      id: "2eme-ch06",
      annee: "2eme",
      chapitre: 6,
      titre: "La structure répétitive Pour",
      duree: "50 min",
      cours: "cours/2eme/ch06-iteratives-pour.html",
      slides: "slides/2eme/ch06-slides.html",
      print: "print/2eme/ch06-print.html",
      objectifs: [
        "Écrire une boucle Pour",
        "Utiliser un compteur",
        "Implémenter for...in range() en Python"
      ]
    },
    {
      id: "2eme-ch07",
      annee: "2eme",
      chapitre: 7,
      titre: "Initiation à la robotique",
      duree: "55 min",
      cours: "cours/2eme/ch07-robotique.html",
      slides: "slides/2eme/ch07-slides.html",
      print: "print/2eme/ch07-print.html",
      objectifs: [
        "Définir la robotique et ses domaines",
        "Connecter un objet à l'ordinateur",
        "Programmer une LED et un feu de carrefour"
      ]
    },
    {
      id: "2eme-ch08",
      annee: "2eme",
      chapitre: 8,
      titre: "Implémentation en Python — Bases",
      duree: "60 min",
      cours: "cours/2eme/ch08-python-bases.html",
      slides: "slides/2eme/ch08-slides.html",
      print: "print/2eme/ch08-print.html",
      objectifs: [
        "Utiliser l'environnement Python",
        "Respecter la syntaxe de base",
        "Tester et valider un programme simple"
      ]
    }
  ],

  "3eme": [
    {
      id: "3eme-ch01",
      annee: "3eme",
      chapitre: 1,
      titre: "Rappels : objets, types et opérations",
      duree: "40 min",
      cours: "cours/3eme/ch01-rappels.html",
      slides: "slides/3eme/ch01-slides.html",
      print: "print/3eme/ch01-print.html",
      objectifs: [
        "Consolider les acquis de 2ème",
        "Réviser les types et opérations",
        "Préparer les structures avancées"
      ]
    },
    {
      id: "3eme-ch02",
      annee: "3eme",
      chapitre: 2,
      titre: "Les structures conditionnelles : Si et Selon",
      duree: "55 min",
      cours: "cours/3eme/ch02-conditionnelles.html",
      slides: "slides/3eme/ch02-slides.html",
      print: "print/3eme/ch02-print.html",
      objectifs: [
        "Maîtriser Si, Si...Sinon, Selon",
        "Choisir la structure adéquate",
        "Implémenter en Python"
      ]
    },
    {
      id: "3eme-ch03",
      annee: "3eme",
      chapitre: 3,
      titre: "Les structures itératives : Pour, Tant Que, Répéter",
      duree: "60 min",
      cours: "cours/3eme/ch03-iteratives.html",
      slides: "slides/3eme/ch03-slides.html",
      print: "print/3eme/ch03-print.html",
      objectifs: [
        "Distinguer les trois structures",
        "Choisir selon le problème",
        "Implémenter en Python"
      ]
    },
    {
      id: "3eme-ch04",
      annee: "3eme",
      chapitre: 4,
      titre: "Les tableaux à une dimension",
      duree: "60 min",
      cours: "cours/3eme/ch04-tableaux-1d.html",
      slides: "slides/3eme/ch04-slides.html",
      print: "print/3eme/ch04-print.html",
      objectifs: [
        "Déclarer et remplir un tableau",
        "Parcourir et afficher un tableau",
        "Implémenter avec numpy"
      ]
    },
    {
      id: "3eme-ch05",
      annee: "3eme",
      chapitre: 5,
      titre: "Les modules : fonctions et procédures",
      duree: "65 min",
      cours: "cours/3eme/ch05-modules.html",
      slides: "slides/3eme/ch05-slides.html",
      print: "print/3eme/ch05-print.html",
      objectifs: [
        "Décomposer un problème en modules",
        "Écrire fonctions et procédures",
        "Gérer paramètres et résultats"
      ]
    },
    {
      id: "3eme-ch06",
      annee: "3eme",
      chapitre: 6,
      titre: "Traitements sur tableaux : recherche et tri à bulles",
      duree: "60 min",
      cours: "cours/3eme/ch06-traitements-tableaux.html",
      slides: "slides/3eme/ch06-slides.html",
      print: "print/3eme/ch06-print.html",
      objectifs: [
        "Rechercher un élément",
        "Trier par la méthode à bulles",
        "Implémenter en Python"
      ]
    },
    {
      id: "3eme-ch07",
      annee: "3eme",
      chapitre: 7,
      titre: "Algorithmes numériques : PGCD, PPCM, nombres premiers",
      duree: "55 min",
      cours: "cours/3eme/ch07-algos-numeriques.html",
      slides: "slides/3eme/ch07-slides.html",
      print: "print/3eme/ch07-print.html",
      objectifs: [
        "Calculer PGCD et PPCM",
        "Tester la primalité",
        "Décomposer en facteurs premiers"
      ]
    },
    {
      id: "3eme-ch08",
      annee: "3eme",
      chapitre: 8,
      titre: "Robotique — Consolidation",
      duree: "50 min",
      cours: "cours/3eme/ch08-robotique.html",
      slides: "slides/3eme/ch08-slides.html",
      print: "print/3eme/ch08-print.html",
      objectifs: [
        "Approfondir les domaines de la robotique",
        "Programmer des objets connectés",
        "Réaliser un feu de carrefour"
      ]
    }
  ],

  "4eme": [
    {
      id: "4eme-ch01",
      annee: "4eme",
      chapitre: 1,
      titre: "Rappels et consolidation",
      duree: "40 min",
      cours: "cours/4eme/ch01-rappels.html",
      slides: "slides/4eme/ch01-slides.html",
      print: "print/4eme/ch01-print.html",
      objectifs: [
        "Consolider les acquis de 3ème",
        "Préparer les structures avancées",
        "Adopter les bonnes pratiques"
      ]
    },
    {
      id: "4eme-ch02",
      annee: "4eme",
      chapitre: 2,
      titre: "Structures conditionnelles avancées",
      duree: "55 min",
      cours: "cours/4eme/ch02-conditionnelles-avancees.html",
      slides: "slides/4eme/ch02-slides.html",
      print: "print/4eme/ch02-print.html",
      objectifs: [
        "Maîtriser la forme généralisée",
        "Utiliser Selon et match...case",
        "Argumenter le choix"
      ]
    },
    {
      id: "4eme-ch03",
      annee: "4eme",
      chapitre: 3,
      titre: "Structures itératives avancées",
      duree: "55 min",
      cours: "cours/4eme/ch03-iteratives-avancees.html",
      slides: "slides/4eme/ch03-slides.html",
      print: "print/4eme/ch03-print.html",
      objectifs: [
        "Choisir entre Pour, Tant Que, Répéter",
        "Éviter break",
        "Optimiser les boucles"
      ]
    },
    {
      id: "4eme-ch04",
      annee: "4eme",
      chapitre: 4,
      titre: "Tri des tableaux : sélection et insertion",
      duree: "65 min",
      cours: "cours/4eme/ch04-tri-tableaux.html",
      slides: "slides/4eme/ch04-slides.html",
      print: "print/4eme/ch04-print.html",
      objectifs: [
        "Implémenter le tri par sélection",
        "Implémenter le tri par insertion",
        "Comparer les deux méthodes"
      ]
    },
    {
      id: "4eme-ch05",
      annee: "4eme",
      chapitre: 5,
      titre: "Modules et décomposition en sous-problèmes",
      duree: "65 min",
      cours: "cours/4eme/ch05-modules-avances.html",
      slides: "slides/4eme/ch05-slides.html",
      print: "print/4eme/ch05-print.html",
      objectifs: [
        "Décomposer en sous-problèmes",
        "Maîtriser entête, paramètres, portée",
        "Tester chaque module"
      ]
    },
    {
      id: "4eme-ch06",
      annee: "4eme",
      chapitre: 6,
      titre: "Les fichiers (données et textes)",
      duree: "60 min",
      cours: "cours/4eme/ch06-fichiers.html",
      slides: "slides/4eme/ch06-slides.html",
      print: "print/4eme/ch06-print.html",
      objectifs: [
        "Ouvrir, lire, écrire, fermer un fichier",
        "Distinguer fichier texte et fichier de données",
        "Implémenter avec open et pickle"
      ]
    },
    {
      id: "4eme-ch07",
      annee: "4eme",
      chapitre: 7,
      titre: "Interface graphique avec Qt Designer",
      duree: "70 min",
      cours: "cours/4eme/ch07-gui-qt.html",
      slides: "slides/4eme/ch07-slides.html",
      print: "print/4eme/ch07-print.html",
      objectifs: [
        "Concevoir une interface avec Qt Designer",
        "Utiliser .text, .setText, .clear, .show, .clicked",
        "Glisser-déposer"
      ]
    },
    {
      id: "4eme-ch08",
      annee: "4eme",
      chapitre: 8,
      titre: "Programmation événementielle",
      duree: "55 min",
      cours: "cours/4eme/ch08-evenementielle.html",
      slides: "slides/4eme/ch08-slides.html",
      print: "print/4eme/ch08-print.html",
      objectifs: [
        "Comprendre le principe des événements",
        "Connecter un bouton à une action",
        "Améliorer l'ergonomie d'un programme"
      ]
    }
  ]
};

/* Exposer le catalogue globalement */
window.CATALOGUE = CATALOGUE;