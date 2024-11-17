const A1 = {
    grammar: [
        {
            question: "Quel mot est synonyme de 'content'?",
            answers: [
                { text: "Heureux", correct: true },
                { text: "Triste", correct: false },
                { text: "Fatigué", correct: false },
                { text: "Colérique", correct: false },
                { text: "Affamé", correct: false },
                { text: "Sombre", correct: false },
                { text: "Ennuyeux", correct: false },
                { text: "Pauvre", correct: false },
                { text: "Déçu", correct: false },
                { text: "Désespéré", correct: false },
                { text: "Perdu", correct: false },
                { text: "Mécontent", correct: false }
            ]
        },
        {

            question: "Quel est l'antonyme de 'rapide'?",
            answers: [
                { text: "Lent", correct: true },
                { text: "Court", correct: false },
                { text: "Simple", correct: false },
                { text: "Facile", correct: false },
                { text: "Grand", correct: false },
                { text: "Long", correct: false },
                { text: "Lourd", correct: false },
                { text: "Dur", correct: false },
                { text: "Profond", correct: false },
                { text: "Étroit", correct: false },
                { text: "Vieux", correct: false },
                { text: "Petit", correct: false }
            ]
        },
        {

            question: "Quel mot est le contraire de 'haut'?",
            answers: [
                { text: "Bas", correct: true },
                { text: "Petit", correct: false },
                { text: "Large", correct: false },
                { text: "Épais", correct: false },
                { text: "Court", correct: false },
                { text: "Grand", correct: false },
                { text: "Fin", correct: false },
                { text: "Durable", correct: false },
                { text: "Étonnant", correct: false },
                { text: "Long", correct: false },
                { text: "Profond", correct: false },
                { text: "Brillant", correct: false }
            ]
        },
        {

            question: "Quel est l'antonyme de 'difficile'?",
            answers: [
                { text: "Facile", correct: true },
                { text: "Dur", correct: false },
                { text: "Long", correct: false },
                { text: "Simple", correct: false },
                { text: "Lourd", correct: false },
                { text: "Grand", correct: false },
                { text: "Lent", correct: false },
                { text: "Rapide", correct: false },
                { text: "Petit", correct: false },
                { text: "Sombre", correct: false },
                { text: "Durable", correct: false },
                { text: "Épais", correct: false }
            ]
        },
        {

            question: "Quel est le synonyme de 'bon'?",
            answers: [
                { text: "Bien", correct: true },
                { text: "Mauvais", correct: false },
                { text: "Horrible", correct: false },
                { text: "Difficile", correct: false },
                { text: "Simple", correct: false },
                { text: "Nul", correct: false },
                { text: "Médiocre", correct: false },
                { text: "Insupportable", correct: false },
                { text: "Sombre", correct: false },
                { text: "Petit", correct: false },
                { text: "Dur", correct: false },
                { text: "Fin", correct: false }
            ]
        },
        {

            question: "Quelle préposition complète cette phrase : 'Je vais __ Paris.'",
            answers: [
                { text: "à", correct: true },
                { text: "dans", correct: false },
                { text: "de", correct: false },
                { text: "chez", correct: false },
                { text: "par", correct: false },
                { text: "sur", correct: false },
                { text: "sous", correct: false },
                { text: "pour", correct: false },
                { text: "vers", correct: false },
                { text: "au", correct: false },
                { text: "avec", correct: false },
                { text: "en", correct: false }
            ]
        },
        {

            question: "Quelle est la bonne conjugaison : 'Tu ___ un bon étudiant.'",
            answers: [
                { text: "es", correct: true },
                { text: "est", correct: false },
                { text: "sont", correct: false },
                { text: "sommes", correct: false },
                { text: "étais", correct: false },
                { text: "fut", correct: false },
                { text: "sera", correct: false },
                { text: "sois", correct: false },
                { text: "serais", correct: false },
                { text: "avais", correct: false },
                { text: "était", correct: false },
                { text: "avez", correct: false }
            ]
        },
        {

            question: "Quelle est la terminaison correcte pour 'ils chant__' au présent?",
            answers: [
                { text: "ent", correct: true },
                { text: "ez", correct: false },
                { text: "ons", correct: false },
                { text: "ais", correct: false },
                { text: "ait", correct: false },
                { text: "é", correct: false },
                { text: "e", correct: false },
                { text: "ir", correct: false },
                { text: "it", correct: false },
                { text: "er", correct: false },
                { text: "ai", correct: false },
                { text: "âmes", correct: false }
            ]
        },
        {

            question: "Quelle est la bonne conjugaison : 'Nous ___ une maison.'",
            answers: [
                { text: "avons", correct: true },
                { text: "ont", correct: false },
                { text: "avais", correct: false },
                { text: "avez", correct: false },
                { text: "étais", correct: false },
                { text: "sommes", correct: false },
                { text: "sont", correct: false },
                { text: "fut", correct: false },
                { text: "fûmes", correct: false },
                { text: "aurons", correct: false },
                { text: "avait", correct: false },
                { text: "être", correct: false }
            ]
        },
        {

            question: "Quelle est la bonne question : '___ allez-vous?'",
            answers: [
                { text: "Comment", correct: true },
                { text: "Où", correct: false },
                { text: "Pourquoi", correct: false },
                { text: "Qui", correct: false },
                { text: "Quand", correct: false },
                { text: "Que", correct: false },
                { text: "Quoi", correct: false },
                { text: "À quel", correct: false },
                { text: "De quoi", correct: false },
                { text: "Lequel", correct: false },
                { text: "Quel", correct: false },
                { text: "Lesquels", correct: false }
            ]
        }
    ],
    conjugation: [
        {
            question: "Quelle est la conjugaison correcte : 'Je ___ (être) fatigué.'",
            answers: [
                { text: "suis", correct: true },
                { text: "es", correct: false },
                { text: "est", correct: false },
                { text: "sommes", correct: false },
                { text: "sont", correct: false },
                { text: "étais", correct: false },
                { text: "était", correct: false },
                { text: "sois", correct: false },
                { text: "étions", correct: false },
                { text: "avez", correct: false },
                { text: "avons", correct: false },
                { text: "êtes", correct: false }
            ]
        },
        {

            question: "Complétez : 'Tu ___ (avoir) un livre.'",
            answers: [
                { text: "as", correct: true },
                { text: "a", correct: false },
                { text: "ont", correct: false },
                { text: "avais", correct: false },
                { text: "avons", correct: false },
                { text: "étais", correct: false },
                { text: "seras", correct: false },
                { text: "es", correct: false },
                { text: "sont", correct: false },
                { text: "fut", correct: false },
                { text: "auras", correct: false },
                { text: "êtes", correct: false }
            ]
        },
        {
            question: "Quelle est la terminaison correcte pour 'il parl___' au présent?",
            answers: [
                { text: "e", correct: true },
                { text: "ent", correct: false },
                { text: "ons", correct: false },
                { text: "ez", correct: false },
                { text: "ais", correct: false },
                { text: "ait", correct: false },
                { text: "ions", correct: false },
                { text: "iez", correct: false },
                { text: "ant", correct: false },
                { text: "âmes", correct: false },
                { text: "era", correct: false },
                { text: "âtes", correct: false }
            ]
        },
        {
            question: "Complétez : 'Nous ___ (aller) au marché.'",
            answers: [
                { text: "allons", correct: true },
                { text: "allez", correct: false },
                { text: "vont", correct: false },
                { text: "alliez", correct: false },
                { text: "étais", correct: false },
                { text: "irons", correct: false },
                { text: "partons", correct: false },
                { text: "avez", correct: false },
                { text: "avons", correct: false },
                { text: "êtes", correct: false },
                { text: "sommes", correct: false },
                { text: "étions", correct: false }
            ]
        },
        {
            question: "Quelle est la conjugaison correcte : 'Ils ___ (finir) leurs devoirs.'",
            answers: [
                { text: "finissent", correct: true },
                { text: "finis", correct: false },
                { text: "finit", correct: false },
                { text: "finissons", correct: false },
                { text: "finit", correct: false },
                { text: "étaient", correct: false },
                { text: "finiraient", correct: false },
                { text: "auront", correct: false },
                { text: "sont", correct: false },
                { text: "finiront", correct: false },
                { text: "finissaient", correct: false },
                { text: "étions", correct: false }
            ]
        },
        {
            question: "Complétez : 'Vous ___ (faire) un gâteau.'",
            answers: [
                { text: "faites", correct: true },
                { text: "fais", correct: false },
                { text: "faisons", correct: false },
                { text: "fait", correct: false },
                { text: "fut", correct: false },
                { text: "faisiez", correct: false },
                { text: "fera", correct: false },
                { text: "ferons", correct: false },
                { text: "étaient", correct: false },
                { text: "êtes", correct: false },
                { text: "sommes", correct: false },
                { text: "ont", correct: false }
            ]
        },
        {
            question: "Quelle est la conjugaison correcte : 'Elle ___ (venir) au cinéma.'",
            answers: [
                { text: "vient", correct: true },
                { text: "viens", correct: false },
                { text: "venons", correct: false },
                { text: "venez", correct: false },
                { text: "étais", correct: false },
                { text: "viendra", correct: false },
                { text: "viendrait", correct: false },
                { text: "sont", correct: false },
                { text: "est", correct: false },
                { text: "avons", correct: false },
                { text: "allez", correct: false },
                { text: "auront", correct: false }
            ]
        },
        {
            question: "Quelle est la bonne conjugaison : 'Je ___ (manger) une pomme.'",
            answers: [
                { text: "mange", correct: true },
                { text: "manges", correct: false },
                { text: "mangent", correct: false },
                { text: "mangons", correct: false },
                { text: "mangez", correct: false },
                { text: "étais", correct: false },
                { text: "avait", correct: false },
                { text: "aurons", correct: false },
                { text: "étaient", correct: false },
                { text: "avons", correct: false },
                { text: "fut", correct: false },
                { text: "aurait", correct: false }
            ]
        },
        {
            question: "Complétez : 'Nous ___ (prendre) le bus.'",
            answers: [
                { text: "prenons", correct: true },
                { text: "prends", correct: false },
                { text: "prenez", correct: false },
                { text: "prend", correct: false },
                { text: "preniez", correct: false },
                { text: "étaient", correct: false },
                { text: "avez", correct: false },
                { text: "sommes", correct: false },
                { text: "étais", correct: false },
                { text: "avons", correct: false },
                { text: "étaient", correct: false },
                { text: "aurons", correct: false }
            ]
        },
        {
            question: "Quelle est la terminaison correcte pour 'tu vend___' au présent?",
            answers: [
                { text: "s", correct: true },
                { text: "ez", correct: false },
                { text: "ons", correct: false },
                { text: "ent", correct: false },
                { text: "e", correct: false },
                { text: "ais", correct: false },
                { text: "ait", correct: false },
                { text: "iez", correct: false },
                { text: "ant", correct: false },
                { text: "âmes", correct: false },
                { text: "âtes", correct: false },
                { text: "er", correct: false }
            ]
        }
    ],

    vocabulary: [
        {
            question: "Quel mot désigne un animal domestique ?",
            answers: [
                { text: "Chat", correct: true },
                { text: "Chaise", correct: false },
                { text: "Chapeau", correct: false },
                { text: "Chemin", correct: false },
                { text: "Château", correct: false },
                { text: "Table", correct: false },
                { text: "Voiture", correct: false },
                { text: "Jardin", correct: false },
                { text: "Fleur", correct: false },
                { text: "Chien", correct: false },
                { text: "Montagne", correct: false },
                { text: "Livre", correct: false }
            ]
        },
        {
            question: "Quel mot désigne une pièce de la maison ?",
            answers: [
                { text: "Cuisine", correct: true },
                { text: "École", correct: false },
                { text: "Voiture", correct: false },
                { text: "Bureau", correct: false },
                { text: "Gare", correct: false },
                { text: "Forêt", correct: false },
                { text: "Jardin", correct: false },
                { text: "Plage", correct: false },
                { text: "Chambre", correct: false },
                { text: "Église", correct: false },
                { text: "Cheminée", correct: false },
                { text: "Balcon", correct: false }
            ]
        },
        {
            question: "Quel mot est un fruit ?",
            answers: [
                { text: "Pomme", correct: true },
                { text: "Voiture", correct: false },
                { text: "Livre", correct: false },
                { text: "Chaise", correct: false },
                { text: "Château", correct: false },
                { text: "Montagne", correct: false },
                { text: "Cahier", correct: false },
                { text: "Banane", correct: false },
                { text: "Fleur", correct: false },
                { text: "Jardin", correct: false },
                { text: "Soleil", correct: false },
                { text: "École", correct: false }
            ]
        },
        {
            question: "Quel mot signifie le contraire de 'triste' ?",
            answers: [
                { text: "Heureux", correct: true },
                { text: "Fatigué", correct: false },
                { text: "Fâché", correct: false },
                { text: "Petit", correct: false },
                { text: "Sombre", correct: false },
                { text: "Mécontent", correct: false },
                { text: "Étonné", correct: false },
                { text: "Lent", correct: false },
                { text: "Perdu", correct: false },
                { text: "Vieux", correct: false },
                { text: "Propre", correct: false },
                { text: "Sale", correct: false }
            ]
        },
        {
            question: "Quel mot décrit une couleur ?",
            answers: [
                { text: "Bleu", correct: true },
                { text: "Table", correct: false },
                { text: "Chaise", correct: false },
                { text: "Maison", correct: false },
                { text: "Arbre", correct: false },
                { text: "Neige", correct: false },
                { text: "Fleur", correct: false },
                { text: "Chien", correct: false },
                { text: "Soleil", correct: false },
                { text: "Nuage", correct: false },
                { text: "Livre", correct: false },
                { text: "Plage", correct: false }
            ]
        },
        {
            question: "Quel mot désigne un objet pour écrire ?",
            answers: [
                { text: "Stylo", correct: true },
                { text: "Table", correct: false },
                { text: "Chaise", correct: false },
                { text: "Livre", correct: false },
                { text: "Soleil", correct: false },
                { text: "Cahier", correct: false },
                { text: "Pomme", correct: false },
                { text: "Chien", correct: false },
                { text: "École", correct: false },
                { text: "Maison", correct: false },
                { text: "Arbre", correct: false },
                { text: "Plage", correct: false }
            ]
        },
        {
            question: "Quel mot signifie 'rapide' ?",
            answers: [
                { text: "Vite", correct: true },
                { text: "Lent", correct: false },
                { text: "Petit", correct: false },
                { text: "Grand", correct: false },
                { text: "Lourd", correct: false },
                { text: "Épais", correct: false },
                { text: "Sombre", correct: false },
                { text: "Vieux", correct: false },
                { text: "Jeune", correct: false },
                { text: "Dur", correct: false },
                { text: "Facile", correct: false },
                { text: "Propre", correct: false }
            ]
        },
        {
            question: "Quel mot est un transport ?",
            answers: [
                { text: "Voiture", correct: true },
                { text: "Table", correct: false },
                { text: "Chaise", correct: false },
                { text: "Livre", correct: false },
                { text: "Jardin", correct: false },
                { text: "Montagne", correct: false },
                { text: "Arbre", correct: false },
                { text: "Plage", correct: false },
                { text: "Chien", correct: false },
                { text: "Chat", correct: false },
                { text: "Fleur", correct: false },
                { text: "Soleil", correct: false }
            ]
        },
        {
            question: "Quel mot est un lieu pour apprendre ?",
            answers: [
                { text: "École", correct: true },
                { text: "Maison", correct: false },
                { text: "Jardin", correct: false },
                { text: "Plage", correct: false },
                { text: "Bureau", correct: false },
                { text: "Forêt", correct: false },
                { text: "Gare", correct: false },
                { text: "Hôpital", correct: false },
                { text: "Restaurant", correct: false },
                { text: "Balcon", correct: false },
                { text: "Chambre", correct: false },
                { text: "Café", correct: false }
            ]
        },
        {
            question: "Quel mot est synonyme de 'beau' ?",
            answers: [
                { text: "Joli", correct: true },
                { text: "Triste", correct: false },
                { text: "Vieux", correct: false },
                { text: "Sale", correct: false },
                { text: "Petit", correct: false },
                { text: "Méchant", correct: false },
                { text: "Fatigué", correct: false },
                { text: "Épais", correct: false },
                { text: "Propre", correct: false },
                { text: "Grand", correct: false },
                { text: "Riche", correct: false },
                { text: "Perdu", correct: false }
            ]
        }
    ]
};

const catKeys = Object.keys(A1);
for (let j = 0; j < 3; j++) {
    A1[catKeys[j]].forEach((q) => {
        q.id = `q-${Math.round(Math.random() * 1000000)}`;
    });
}

const questions = {
    level: {
        A1: A1,
        A2: A1,
        B1: A1,
        B2: A1,
        C1: A1,
        C2: A1
    }
}

let firstLoad = true;
if (localStorage.getItem('questions')) {
    firstLoad = false;
}
if (firstLoad) {
    localStorage.setItem('questions', JSON.stringify(questions));
}
