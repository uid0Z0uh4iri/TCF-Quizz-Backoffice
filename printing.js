document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser   Data")); // Correct key

  console.log("Current User Data:", currentUser); // Debugging line

  if (currentUser) {
    // Display user data on the results page
    document.getElementById("final-score").textContent =
      currentUser.games.reduce((total, game) => total + game.score, 0); // Summing up scores
    document.getElementById("language-level").textContent = currentUser.level; // Assuming level is part of user data

    // Populate games summary if necessary
    const games = currentUser.games || []; // Assuming games is part of user data
    const summaryContainer = document.getElementById("questions-summary");
    summaryContainer.innerHTML = ""; // Clear previous content

    games.forEach((game) => {
      summaryContainer.innerHTML += displayGameCard(game);
    });

    // Trigger the print function
    window.print();

    // Redirect back to the PDF generation page after printing
    window.onafterprint = () => {
      window.location.href = "PDFGenerationg.html"; // Adjust the path as necessary
    };
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

function displayQuestionCard(historyItem) {
  const { type, question, answers, choice, time } = historyItem;

  // correct bg = linear top to bottom DCFFDA FFFFFF border 0D4F09
  // wrong bg = linear top to bottom FF8A8A FFFFFF border EF4444
  // timeout bg = linear top to bottom FFD6A5 FFFFFF border F59E0B
  //
  const cardHTML = `
        <div class="z-10  mb-4">

            <div class="relative w-full h-full rounded-xl z-10 border-2 p-6 border-[${
              type === "correct"
                ? "#0D4F09"
                : type === "wrong"
                ? "#EF4444"
                : "#F59E0B"
            }] bg-gradient-to-b from-[${
    type === "correct" ? "#DCFFDA" : type === "wrong" ? "#FF8A8A" : "#FFD6A5"
  }] to-white">
            <h3 class="font-medium text-xl mb-4">${question}</h3>
            <div class="grid grid-cols-2 gap-4">
                ${answers
                  .map(
                    (answer, index) => `
                    <div class="relative p-4 rounded-xl ${getAnswerStyle(
                      type,
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

function getAnswerStyle(type, index, choice, isCorrect) {
  if (type === "correct" && index === parseInt(choice)) {
    return "bg-[#8FCA8A] border-2 border-[#0D4F09]";
  } else if (type === "wrong" && index === parseInt(choice)) {
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

// Ensure the Score and questions variables are defined here or passed correctly
function displayResults() {
  const history = JSON.parse(localStorage.getItem("currentUser Data")) || [];
  const finalScore = document.getElementById("final-score");
  finalScore.textContent = `${Score + "/" + questions.length}`; // Ensure Score and questions are defined

  const levelElement = document.getElementById("language-level");
  const level = calculateLevel(Score); // Ensure Score is defined
  levelElement.textContent = level;

  const summaryContainer = document.getElementById("questions-summary");
  summaryContainer.innerHTML = "";

  history.forEach((historyItem) => {
    summaryContainer.innerHTML += displayQuestionCard(historyItem);
  });
}

function calculateLevel(score) {
  if (score >= 9) return "C1";
  if (score >= 7) return "B2";
  if (score >= 5) return "B1";
  if (score >= 3) return "A2";
  return "A1";
}
