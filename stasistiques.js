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
];



function populatePerformanceTable(usersData) {
  const tableBody = document.getElementById("performanceTableBody");

  if (!Array.isArray(usersData)) {
    console.error("Invalid usersData: Expected an array.");
    return;
  }

  const levelCounts = usersData.reduce((counts, user) => {
    if (!user.levels) return counts;

    for (const levelKey in user.levels) {
      const categories = user.levels[levelKey]?.categories;

      counts[levelKey] = counts[levelKey] || { total: 0, validated: 0 };
      counts[levelKey].total += 1;

      if (categories) {
        const allCategoriesValidated = Object.values(categories).every(
          (category) => category.validation
        );
        if (allCategoriesValidated) counts[levelKey].validated += 1;
      }
    }
    return counts;
  }, {});

  Object.entries(levelCounts).forEach(([level, { total, validated }]) => {
    const successRate =
      total > 0 ? ((validated / total) * 100).toFixed(2) + "%" : "N/A";
    const row = document.createElement("tr");
    row.appendChild(createCell(level));
    row.appendChild(createCell(successRate));
    tableBody.appendChild(row);
  });
}

function createCell(text) {
  const cell = document.createElement("td");
  cell.className = "py-3 px-4";
  cell.textContent = text;
  return cell;
}

window.onload = () => {
  if (typeof usersData !== "undefined") {
    populatePerformanceTable(usersData);
  } else {
    console.error("usersData is not defined.");
  }
};
