
// hadi hiya l ktbyn lina l popUP
const createQuestionBtn = document.getElementById("createQuestionBtn");

// hadi popUp
const questionModal = document.getElementById("questionModal");

const questionForm = document.getElementById("questionForm");
const questionsList = document.getElementById("questionsList");
const answersContainer = document.getElementById("answersContainer");
const newAnswerInput = document.getElementById("newAnswer");
const addAnswerBtn = document.getElementById("addAnswerBtn");
const saveQuestionBtn = document.getElementById("saveQuestionBtn");

let answers = [];
let editMode = false;
let editingQuestionId = null;

let addingLevelProgress = 0;
let addingCatProgress = 0;
let q;

document.addEventListener("DOMContentLoaded", () => {
    q = localStorage.getItem('questions') ? JSON.parse(localStorage.getItem('questions')) : null;
    if (q) {
        const levelKeys = Object.keys(q.level)
        for (let i = 0; i < 6; i++) {
            addingLevelProgress++;
            addingCatProgress = 0;            
            const catKeys = Object.keys(q.level[levelKeys[i]])  
            
            for (let j = 0; j < 3; j++) {
                addingCatProgress++;              
                q.level[levelKeys[i]][catKeys[j]].forEach(question => {
                addQuestion(question, levelKeys[i], catKeys[j]);
               });
                
            }
            


        }
    }
  });

createQuestionBtn.addEventListener("click", () => {
  resetForm();
  questionModal.classList.remove("hidden");
});

addAnswerBtn.addEventListener("click", () => {
  const answerText = newAnswerInput.value.trim();
  if (answerText) {
    const answerId = `answer-${answers.length}`;
    answers.push({ id: answerId, text: answerText, correct: false });
    renderAnswers();
    newAnswerInput.value = "";
  }
});

saveQuestionBtn.addEventListener("click", () => {
  const question = {
    id: editingQuestionId || `q-${Date.now()}`,
    level: questionForm.level.value.toUpperCase(),
    category: questionForm.category.value,
    question: questionForm.questionText.value,
    answers: answers,
  };
  if (editMode) {
    updateQuestion(question);
  } else {
    addQuestion(question,question.level, question.category);
  }
  resetForm();
  questionModal.classList.add("hidden");

});

function renderAnswers() {
  answersContainer.innerHTML = "";
  answers.forEach((answer, index) => {
    const div = document.createElement("div");
    div.classList.add("flex", "items-center", "space-x-2");
    div.innerHTML = `
      <input type="radio" name="answer" value="${index}" ${
      answer.correct ? "checked" : ""
    }>
      <span>${answer.text}</span>
      <button type="button" class="text-red-500" onclick="removeAnswer(${index})">Remove</button>
    `;
    div.querySelector('input[type="radio"]').addEventListener("change", () => {
      answers.forEach((a, i) => (a.correct = i === index));
    });
    answersContainer.appendChild(div);
  });
}

function resetForm() {
  questionForm.reset();
  answers = [];
  editingQuestionId = null;
  editMode = false;
  renderAnswers();
}

function addQuestion(question, level, cat) {  
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("p-4", "bg-white", "rounded", "shadow");
  questionDiv.innerHTML = `
    <h3 class="font-bold">${question.question}</h3>
    <p><strong>Level:</strong> ${level}</p>
    <p><strong>Category:</strong> ${cat}</p>
    <div class="flex space-x-2 mt-2">
      <button class="editBtn px-4 py-2 bg-yellow-500 text-white rounded">Edit</button>
      <button class="deleteBtn px-4 py-2 bg-red-500 text-white rounded">Delete</button>
    </div>
  `;
  questionsList.appendChild(questionDiv);

  questionDiv.querySelector(".editBtn").addEventListener("click", () => {
    editQuestion(question);
  });

  questionDiv.querySelector(".deleteBtn").addEventListener("click", () => {
    questionDiv.remove();
  });
}

function editQuestion(question) {
  editMode = true;
  
  
  editingQuestionId = question.id;
  questionForm.level.value = question.level;
  questionForm.category.value = question.category;
  questionForm.questionText.value = question.text;
  answers = question.answers;
  renderAnswers();
  questionModal.classList.remove("hidden");
}

function updateQuestion(question) {
  const questionDiv = document.querySelector(`[data-id="${question.id}"]`);
  questionDiv.querySelector("h3").textContent = question.text;
  questionDiv.querySelector("p:nth-child(2)").innerHTML = `<strong>Level:</strong> ${question.level}`;
  questionDiv.querySelector("p:nth-child(3)").innerHTML = `<strong>Category:</strong> ${question.category}`;
}

function removeAnswer(index) {
  answers.splice(index, 1);
  renderAnswers();
}
