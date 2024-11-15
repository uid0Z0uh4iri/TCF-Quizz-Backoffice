document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUserData"));

  if (currentUser) {
    // Set the name in the NAMETITLE element
    const nameTitle = document.getElementById("NAMETITLE");
    nameTitle.innerText = currentUser.name; // Assuming currentUser  is an object, not an array

    const totalScore = currentUser.games.reduce(
      (total, game) => total + game.score,
      0
    );
    document.getElementById("final-score").textContent = totalScore;

    const levelElement = document.getElementById("language-level");
    const level = calculateLevel(totalScore);
    levelElement.textContent = level;

    const summaryContainer = document.getElementById("questions-summary");
    summaryContainer.innerHTML = "";

    currentUser.games.forEach((game) => {
      if (game.questions && Array.isArray(game.questions)) {
        game.questions.forEach((question) => {
          const questionCard = displayQuestionCard(question);
          summaryContainer.innerHTML += questionCard;
        });
      } else {
        console.warn("Game does not have valid questions.");
      }
    });
  } else {
    console.error("No current user data found in local storage.");
  }
});

function printResults() {
  const originalContent = document.body.innerHTML;
  const classesToRemove = ["header"];
  const idsToRemove = ["q-a-page", "starting-page", "download-btn"];
  classesToRemove.forEach((className) => {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((element) => {
      element.remove();
    });
  });
  document.body.querySelectorAll("*").forEach((element) => {
    if (idsToRemove.includes(element.id)) {
      element.remove();
    }
    if (element.classList.contains("download-btn")) {
      element.remove();
    }
  });

  document.body
    .querySelector("#results-page")
    .classList.remove("h-screen", "fixed", "-translate-y-full");
  console.log(document.body);

  window.print();
  document.body.innerHTML = originalContent;
}

function displayQuestionCard(question) {
  const { question: questionText, answers, choice, ending, time } = question;

  const cardHTML = `
    <div class="z-10 mb-4">
      <div class="relative w-full h-full rounded-xl z-10 border-2 p-6 border-[
        ${ending === "correct" ? "#0D4F09" : "#EF4444"}
      ] bg-gradient-to-b from-[
        ${ending === "correct" ? "#DCFFDA" : "#FF8A8A"}
      ] to-white">
        <h3 class="font-medium text-xl mb-4">${questionText}</h3>
        <div class="grid grid-cols-2 gap-4">
          ${answers
            .map(
              (answer, index) => `
            <div class="relative p-4 rounded-xl ${getAnswerStyle(
              ending,
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

function getAnswerStyle(ending, index, choice, isCorrect) {
  if (ending === "correct" && index === parseInt(choice)) {
    return "bg-[#8FCA8A] border-2 border-[#0D4F09]";
  } else if (ending === "wrong" && index === parseInt(choice)) {
    return "bg-[#FF8A8A] border-2 border-[#0D4F09]";
  } else if (isCorrect) {
    return "bg-[#8FCA8A] border-2 border-[#0D4F09]";
  } else {
    return "bg-gray-200 border-2 border-[#0D4F09]";
  }
}

function getAnswerBackgroundStyle(type, index, choice, isCorrect) {
  if (type === "correct" && index === parseInt(choice)) {
    return "bg-[#2A9023]";
  } else if (type === "wrong" && index === parseInt(choice)) {
    return "bg-[#B22222]";
  } else if (isCorrect) {
    return "bg-[#2A9023]";
  } else {
    return "bg-gray-500";
  }
}

function displayResults() {
  const summaryContainer = document.getElementById("questions-summary");
  summaryContainer.innerHTML = "";

  currentUser.forEach((game) => {
    summaryContainer.innerHTML += displayQuestionCard(game);
  });
}

function calculateLevel(score) {
  if (score >= 9) return "C1";
  if (score >= 7) return "B2";
  if (score >= 5) return "B1";
  if (score >= 3) return "A2";
  return "A1";
}

function exit() {
  window.location.href = "PDFGenerationg.html";
}

const nameTitle = document.getElementById("NAMETITLE");
nameTitle.innerText = currentUser[0].name;
