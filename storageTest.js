// Sample user data with multiple users
const usersData = [
  {
    name: "Rizen RTX 4090",
    id: 1,
    levels: {
      A1: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      A2: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      B1: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 1,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      B2: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      C1: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      C2: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
    },
    games: [
      {
        date: {
          day: 0,
          hour: 0,
          minute: 0,
        },
        level: "A1",
        category: "grammar",
        score: 8,
        questions: [
          {
            question: "What is the capital of Italy?",
            answers: [
              { text: "Rome", correct: true },
              { text: " Milan", correct: false },
              { text: "Venice", correct: false },
              { text: "Florence", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 4,
          },
          {
            question: "What is the capital of Japan?",
            answers: [
              { text: "Tokyo", correct: true },
              { text: "Seoul", correct: false },
              { text: "Beijing", correct: false },
              { text: "Bangkok", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 5,
          },
        ],
      },
      {
        date: {
          day: 1,
          hour: 2,
          minute: 30,
        },
        level: "A1",
        category: "vocabulary",
        score: 7,
        questions: [
          {
            question: "What is the word for 'apple' in Spanish?",
            answers: [
              { text: "Manzana", correct: true },
              { text: "Naranja", correct: false },
              { text: "Plátano", correct: false },
              { text: "Uva", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 3,
          },
          {
            question: "What is the word for 'orange' in French?",
            answers: [
              { text: "Orange", correct: true },
              { text: "Pomme", correct: false },
              { text: "Banane", correct: false },
              { text: "Raisin", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Sento Corless",
    id: 2,
    levels: {
      A1: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      A2: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      B1: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      B2: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      C1: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      C2: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
    },
    games: [
      {
        date: {
          day: 0,
          hour: 0,
          minute: 0,
        },
        level: "A1",
        category: "grammar",
        score: 8,
        questions: [
          {
            question: "What is the capital of Italy?",
            answers: [
              { text: "Rome", correct: true },
              { text: " Milan", correct: false },
              { text: "Venice", correct: false },
              { text: "Florence", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 4,
          },
          {
            question: "What is the capital of Japan?",
            answers: [
              { text: "Tokyo", correct: true },
              { text: "Seoul", correct: false },
              { text: "Beijing", correct: false },
              { text: "Bangkok", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 5,
          },
        ],
      },
      {
        date: {
          day: 1,
          hour: 2,
          minute: 30,
        },
        level: "A1",
        category: "vocabulary",
        score: 7,
        questions: [
          {
            question: "What is the word for 'apple' in Spanish?",
            answers: [
              { text: "Manzana", correct: true },
              { text: "Naranja", correct: false },
              { text: "Plátano", correct: false },
              { text: "Uva", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 3,
          },
          {
            question: "What is the word for 'orange' in French?",
            answers: [
              { text: "Orange", correct: true },
              { text: "Pomme", correct: false },
              { text: "Banane", correct: false },
              { text: "Raisin", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Mohammed benzima",
    id: 3,
    levels: {
      A1: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      A2: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      B1: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      B2: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      C1: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      C2: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
    },
    games: [
      {
        date: {
          day: 0,
          hour: 0,
          minute: 0,
        },
        level: "A1",
        category: "grammar",
        score: 8,
        questions: [
          {
            question: "What is the capital of Italy?",
            answers: [
              { text: "Rome", correct: true },
              { text: " Milan", correct: false },
              { text: "Venice", correct: false },
              { text: "Florence", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 4,
          },
          {
            question: "What is the capital of Japan?",
            answers: [
              { text: "Tokyo", correct: true },
              { text: "Seoul", correct: false },
              { text: "Beijing", correct: false },
              { text: "Bangkok", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 5,
          },
        ],
      },
      {
        date: {
          day: 1,
          hour: 2,
          minute: 30,
        },
        level: "A1",
        category: "vocabulary",
        score: 7,
        questions: [
          {
            question: "What is the word for 'apple' in Spanish?",
            answers: [
              { text: "Manzana", correct: true },
              { text: "Naranja", correct: false },
              { text: "Plátano", correct: false },
              { text: "Uva", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 3,
          },
          {
            question: "What is the word for 'orange' in French?",
            answers: [
              { text: "Orange", correct: true },
              { text: "Pomme", correct: false },
              { text: "Banane", correct: false },
              { text: "Raisin", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Elon Mask",
    id: 4,
    levels: {
      A1: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      A2: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      B1: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 1,
          },
        },
      },
      B2: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 5,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 30,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 28,
          },
        },
      },
      C1: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      C2: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
    },
    games: [
      {
        date: {
          day: 1,
          hour: 12,
          minute: 23,
        },
        level: "A1",
        category: "grammar",
        score: 50,
        questions: [
          {
            question: "What is the capital of Italy?",
            answers: [
              { text: "Rome", correct: true },
              { text: " Milan", correct: false },
              { text: "Venice", correct: false },
              { text: "Florence", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 40,
          },
          {
            question: "What is the capital of Japan?",
            answers: [
              { text: "Tokyo", correct: true },
              { text: "Seoul", correct: false },
              { text: "Beijing", correct: false },
              { text: "Bangkok", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 25,
          },
        ],
      },
      {
        date: {
          day: 1,
          hour: 2,
          minute: 30,
        },
        level: "A1",
        category: "vocabulary",
        score: 7,
        questions: [
          {
            question: "What is the word for 'apple' in Spanish?",
            answers: [
              { text: "Manzana", correct: true },
              { text: "Naranja", correct: false },
              { text: "Plátano", correct: false },
              { text: "Uva", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 3,
          },
          {
            question: "What is the word for 'orange' in French?",
            answers: [
              { text: "Orange", correct: true },
              { text: "Pomme", correct: false },
              { text: "Banane", correct: false },
              { text: "Raisin", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 2,
          },
        ],
      },
      {
        date: {
          day: 1,
          hour: 2,
          minute: 30,
        },
        level: "A2",
        category: "vocabulary",
        score: 7,
        questions: [
          {
            question: "What is the word for 'apple' in Spanish?",
            answers: [
              { text: "Manzana", correct: true },
              { text: "Naranja", correct: false },
              { text: "Plátano", correct: false },
              { text: "Uva", correct: false },
            ],
            choice: 1,
            ending: "wrong",
            time: null,
          },
          {
            question: "What is the word for 'orange' in French?",
            answers: [
              { text: "Orange", correct: true },
              { text: "Pomme", correct: false },
              { text: "Banane", correct: false },
              { text: "Raisin", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Loius Hammilton",
    id: 5,
    levels: {
      A1: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      A2: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      B1: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      B2: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      C1: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      C2: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
    },
    games: [
      {
        date: {
          day: 0,
          hour: 0,
          minute: 0,
        },
        level: "A1",
        category: "grammar",
        score: 8,
        questions: [
          {
            question: "What is the capital of Italy?",
            answers: [
              { text: "Rome", correct: true },
              { text: " Milan", correct: false },
              { text: "Venice", correct: false },
              { text: "Florence", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 4,
          },
          {
            question: "What is the capital of Japan?",
            answers: [
              { text: "Tokyo", correct: true },
              { text: "Seoul", correct: false },
              { text: "Beijing", correct: false },
              { text: "Bangkok", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 5,
          },
        ],
      },
      {
        date: {
          day: 1,
          hour: 2,
          minute: 30,
        },
        level: "A1",
        category: "vocabulary",
        score: 7,
        questions: [
          {
            question: "What is the word for 'apple' in Spanish?",
            answers: [
              { text: "Manzana", correct: true },
              { text: "Naranja", correct: false },
              { text: "Plátano", correct: false },
              { text: "Uva", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 3,
          },
          {
            question: "What is the word for 'orange' in French?",
            answers: [
              { text: "Orange", correct: true },
              { text: "Pomme", correct: false },
              { text: "Banane", correct: false },
              { text: "Raisin", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Loren Zafer",
    id: 6,
    levels: {
      A1: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      A2: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 2,
            time: 0,
          },
        },
      },
      B1: {
        categories: {
          grammar: {
            validation: true,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: true,
            attempts: 3,
            time: 0,
          },
          conjugation: {
            validation: true,
            attempts: 0,
            time: 0,
          },
        },
      },
      B2: {
        categories: {
          grammar: {
            validation: false,
            attempts: 3,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 2,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 5,
            time: 0,
          },
        },
      },
      C1: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
      C2: {
        categories: {
          grammar: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          vocabulary: {
            validation: false,
            attempts: 0,
            time: 0,
          },
          conjugation: {
            validation: false,
            attempts: 0,
            time: 0,
          },
        },
      },
    },
    games: [
      {
        date: {
          day: 0,
          hour: 0,
          minute: 0,
        },
        level: "A1",
        category: "grammar",
        score: 8,
        questions: [
          {
            question: "What is the capital of Italy?",
            answers: [
              { text: "Rome", correct: true },
              { text: " Milan", correct: false },
              { text: "Venice", correct: false },
              { text: "Florence", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 4,
          },
          {
            question: "What is the capital of Japan?",
            answers: [
              { text: "Tokyo", correct: true },
              { text: "Seoul", correct: false },
              { text: "Beijing", correct: false },
              { text: "Bangkok", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 5,
          },
        ],
      },
      {
        date: {
          day: 1,
          hour: 2,
          minute: 30,
        },
        level: "A1",
        category: "vocabulary",
        score: 7,
        questions: [
          {
            question: "What is the word for 'apple' in Spanish?",
            answers: [
              { text: "Manzana", correct: true },
              { text: "Naranja", correct: false },
              { text: "Plátano", correct: false },
              { text: "Uva", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 3,
          },
          {
            question: "What is the word for 'orange' in French?",
            answers: [
              { text: "Orange", correct: true },
              { text: "Pomme", correct: false },
              { text: "Banane", correct: false },
              { text: "Raisin", correct: false },
            ],
            choice: 0,
            ending: "correct",
            time: 2,
          },
        ],
      },
    ],
  },
];

const usersDataString = JSON.stringify(usersData);

localStorage.setItem("usersData", usersDataString);
