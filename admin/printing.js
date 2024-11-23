document.addEventListener("DOMContentLoaded", () => {
  const clickedUser = JSON.parse(localStorage.getItem("clickedUser"));

  if (clickedUser) {
    const nameTitle = document.getElementById("NAMETITLE");
    nameTitle.innerText = clickedUser.name;

    const totalScore = clickedUser.games.reduce(
      (total, game) => total + game.score,
      0
    );
    document.getElementById("final-score").textContent = totalScore;

    const levelElement = document.getElementById("language-level");
    const level = calculateLevel(totalScore);
    levelElement.textContent = level;

    displayResults(clickedUser.games);
  } else {
    console.error("No current user data found in local storage.");
  }
});

function filterQuestions(games) {
  const showAll = document.getElementById("check-all").checked;
  const showCorrect = document.getElementById("show-correct").checked;
  const showWrong = document.getElementById("show-wrong").checked;
  const summaryContainer = document.getElementById("questions-summary");
  summaryContainer.innerHTML = "";

  games.forEach((game) => {
    if (game.questions && Array.isArray(game.questions)) {
      game.questions.forEach((question) => {
        const isCorrect = question.ending === "correct";
        const isWrong = question.ending === "wrong";

        if (showAll || (showCorrect && isCorrect) || (showWrong && isWrong)) {
          const questionCard = displayQuestionCard(question);
          summaryContainer.innerHTML += questionCard;
        }
      });
    } else {
      console.warn("Game does not have valid questions.");
    }
  });
}

function displayResults(games) {
  filterQuestions(games);
}

document.getElementById("show-correct").addEventListener("change", () => {
  const clickedUser = JSON.parse(localStorage.getItem("clickedUser"));
  if (clickedUser) {
    filterQuestions(clickedUser.games);
  }
});

document.getElementById("show-wrong").addEventListener("change", () => {
  const clickedUser = JSON.parse(localStorage.getItem("clickedUser"));
  if (clickedUser) {
    filterQuestions(clickedUser.games);
  }
});

document.getElementById("check-all").addEventListener("change", () => {
  const clickedUser = JSON.parse(localStorage.getItem("clickedUser"));
  if (clickedUser) {
    filterQuestions(clickedUser.games);
  }
});
function printResults() {
  const originalContent = document.body.innerHTML;
  const classesToRemove = ["header"];
  const idsToRemove = ["q-a-page", "starting-page", "download-btn"];

  // Remove elements by class name
  classesToRemove.forEach((className) => {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((element) => {
      element.remove();
    });
  });

  // Remove elements by ID
  document.body.querySelectorAll("*").forEach((element) => {
    if (idsToRemove.includes(element.id)) {
      element.remove();
    }
    if (element.classList.contains("download-btn")) {
      element.remove();
    }
  });

  // Remove the checkbox container
  const checkboxContainer = document.querySelector(".space-x-16");
  if (checkboxContainer) {
    checkboxContainer.remove();
  }

  // Adjust the results page styles
  document.body
    .querySelector("#results-page")
    .classList.remove("h-screen", "fixed", "-translate-y-full");
  console.log(document.body);

  // Print the results
  window.print();
  document.body.innerHTML = originalContent;
  exit();
}

function displayQuestionCard(historyItem) {
  // Support both type and ending properties
  const { type, ending, question, answers, choice, time } = historyItem;
  const status = type || ending; // Use type if available, otherwise use ending

  console.log("Status:", status); // For debugging

  const cardHTML = `
      <div class="z-10 mb-4">
          <div class="relative w-full h-full rounded-xl z-10 border-2 p-6 border-[${
            status === "correct"
              ? "#0D4F09"
              : status === "wrong"
              ? "#EF4444"
              : status === "timeout"
              ? "#F59E0B"
              : "#F59E0B"
          }] bg-gradient-to-b from-[${
    status === "correct"
      ? "#DCFFDA"
      : status === "wrong"
      ? "#FF8A8A"
      : status === "timeout"
      ? "#FFD6A5"
      : "#FFD6A5"
  }] to-white">
              <h3 class="font-medium text-xl mb-4">${question}</h3>
              <div class="grid grid-cols-2 gap-4">
                  ${answers
                    .map(
                      (answer, index) => `
                      <div class="relative p-4 rounded-xl ${getAnswerStyle(
                        status,
                        index,
                        choice,
                        answer.correct
                      )}">
                          ${answer.text}
                      </div>
                  `
                    )
                    .join("")}
              </div>
              ${time ? `<div class="mt-4 text-right">Time: ${time}s</div>` : ""}
          </div>
      </div>
  `;
  return cardHTML;
}

function getAnswerStyle(status, index, choice, isCorrect) {
  if (status === "correct" && index === parseInt(choice)) {
    return "bg-[#8FCA8A] border-2 border-[#0D4F09]";
  } else if (status === "wrong" && index === parseInt(choice)) {
    return "bg-[#FF8A8A] border-2 border-[#0D4F09]";
  } else if (isCorrect) {
    return "bg-[#8FCA8A] border-2 border-[#0D4F09]";
  } else {
    return "bg-gray-200 border-2 border-[#0D4F09]";
  }
}

function getAnswerBackgroundStyle(status, index, choice, isCorrect) {
  if (status === "correct" && index === parseInt(choice)) {
    return "bg-[#2A9023]";
  } else if (status === "wrong" && index === parseInt(choice)) {
    return "bg-[#B22222]";
  } else if (isCorrect) {
    return "bg-[#2A9023]";
  } else {
    return "bg-gray-500";
  }
}

function calculateLevel(score) {
  if (score >= 9) return "C1";
  if (score >= 7) return "B2";
  if (score >= 5) return "B1";
  if (score >= 3) return "A2";
  return "A1";
}

function exit() {
  window.location.href = "PDFGeneration.html";
}

const nameTitle = document.getElementById("NAMETITLE");
nameTitle.innerText = clickedUser[0].name;

function toggleAll(source) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox !== source) {
      checkbox.checked = false;
    }
  });
}

function toggleCheckbox(checkbox) {
  const allCheckbox = document.getElementById("check-all");
  if (checkbox.checked) {
    allCheckbox.checked = false;
  }
}
