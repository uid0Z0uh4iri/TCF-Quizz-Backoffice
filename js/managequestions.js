
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

let currentFilteringLevel = null;
let currentFilteringCategory = null;

let answers = [];
let editMode = false;
let editingQuestionId = null;
let editingLevel = null;
let editingCategory = null;

let addingLevelProgress = 0;
let addingCatProgress = 0;
let q;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestions();
});

function loadQuestions() {
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
                    if (currentFilteringLevel === null || currentFilteringLevel === levelKeys[i]) {
                        if (currentFilteringCategory === null || currentFilteringCategory === catKeys[j]) {
                            addQuestion(question, levelKeys[i], catKeys[j], true);
                        }
                    }
                });
            }
        }
    }
}
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
    const validate = validateForm()
    if (!validate) {
        return;
    }
    const question = {
        question: questionForm.questionText.value,
        answers: answers,
        id: editingQuestionId !== null ? editingQuestionId : getNewQId(questionForm.level.value, questionForm.category.value),
    };
    const level = questionForm.level.value;
    const category = questionForm.category.value;
    if (editMode) {
        updateQuestion(question, level, category);
    } else {
        addQuestion(question, level, category);
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
      <input type="radio" name="answer" value="${index}" ${answer.correct ? "checked" : ""
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
    editingLevel = null;
    editingCategory = null;
    editMode = false;
    renderAnswers();
}

function addQuestion(question, level, cat, fromStorage = false) {
    const questionDiv = document.createElement("div");

    if (q && !fromStorage) {
        q.level[level][cat].push(question);
        localStorage.setItem('questions', JSON.stringify(q));
    }


    questionDiv.dataset.id = question.id;
    questionDiv.dataset.level = level;
    questionDiv.dataset.category = cat;
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
        editQuestion(question, level, cat);
    });

    questionDiv.querySelector(".deleteBtn").addEventListener("click", () => {
        questionDiv.remove();
        deleteQuestion(question, level, cat);
    });
}

function editQuestion(question, level, cat) {
    editMode = true;
    editingQuestionId = question.id;
    editingLevel = level;
    editingCategory = cat;
    questionForm.level.value = level;
    questionForm.category.value = cat;
    questionForm.questionText.value = question.question;
    answers = question.answers;
    renderAnswers();
    questionModal.classList.remove("hidden");
}

function updateQuestion(question, level, cat) {
    // level and cat represent the new level and category and the old ones are in editingLevel and editingCategory they are used to find the question in the questions object and the div element in the DOM to update them


    const questionDiv = questionsList.querySelector(`div[data-id="${question.id}"][data-level="${editingLevel}"][data-category="${editingCategory}"]`);

    questionDiv.querySelector("h3").textContent = question.question;
    questionDiv.querySelector("p:nth-child(2)").innerHTML = `<strong>Level:</strong> ${level}`;
    questionDiv.querySelector("p:nth-child(3)").innerHTML = `<strong>Category:</strong> ${cat}`;

    // delete old question
    q.level[editingLevel][editingCategory] = q.level[editingLevel][editingCategory].filter(q => q.id !== question.id);

    // add updated question
    addQuestion(question, level, cat);

    localStorage.setItem('questions', JSON.stringify(q));
}

function removeAnswer(index) {
    answers.splice(index, 1);
    renderAnswers();
}

function getNewQId() {
    return newId = `q-${Date.now()}`;
}



const levelFilters = document.querySelector("#levelFilters");
levelFilters.querySelectorAll(".filterBtn")
    .forEach(filter => {
        filter.addEventListener("click", () => {
            let prevEl = filter;
            while (prevEl = prevEl.previousElementSibling) {
                prevEl.classList.remove('active');
            }
            let nextEl = filter;
            while (nextEl = nextEl.nextElementSibling) {
                nextEl.classList.remove('active');
            }
            filter.classList.toggle('active');
            if (filter.classList.contains('active')) {
                currentFilteringLevel = filter.dataset.filterLevel;
            } else {
                currentFilteringLevel = null;
            }
            questionsList.innerHTML = "";
            loadQuestions();
        });
    });

const categoryFilters = document.querySelector("#categoryFilters");
categoryFilters.querySelectorAll(".filterBtn")
    .forEach(filter => {
        filter.addEventListener("click", () => {
            let prevEl = filter;
            while (prevEl = prevEl.previousElementSibling) {
                prevEl.classList.remove('active');
            }
            let nextEl = filter;
            while (nextEl = nextEl.nextElementSibling) {
                nextEl.classList.remove('active');
            }
            filter.classList.toggle('active');
            if (filter.classList.contains('active')) {
                currentFilteringCategory = filter.dataset.filterCategory;
            } else {
                currentFilteringCategory = null;
            }
            questionsList.innerHTML = "";
            loadQuestions();
        });
    });

function deleteQuestion(question, level, cat) {
    q.level[level][cat] = q.level[level][cat].filter(q => q.id !== question.id);
    localStorage.setItem('questions', JSON.stringify(q));
}


const cancelQuestionBtn = document.getElementById("cancelQuestionBtn");

cancelQuestionBtn.addEventListener("click", () => {
    resetForm();
    questionModal.classList.add("hidden");
});


function validateForm() {
    const questionTxt = questionForm.questionText.value.trim();
    const level = questionForm.level.value;
    const category = questionForm.category.value;

    if (!questionTxt) {
        questionForm.questionText.classList.add("border", "border-red-500");
        return false;
    } else {
        questionForm.questionText.classList.remove("border", "border-red-500");

    }

    if (!level) {
        questionForm.level.classList.add("border", "border-red-500");
        return false;
    } else {
        questionForm.level.classList.remove("border", "border-red-500");

    }

    if (!category) {
        questionForm.category.classList.add("border", "border-red-500");
        return false;
    } else {
        questionForm.category.classList.remove("border", "border-red-500");

    }

    if (answers.length < 4) {
        const ansErr = questionForm.querySelector('.answers-errors')
        ansErr.textContent = "Please add at least 4 answers";
        ansErr.classList.remove('hidden');
        return false;
    } else {
        const ansErr = questionForm.querySelector('.answers-errors')
        ansErr.classList.add('hidden');
    }

    if (!answers.some(a => a.correct)) {
        const ansErr = questionForm.querySelector('.answers-errors')
        ansErr.textContent = "Please select the correct answer";
        ansErr.classList.remove('hidden');
        return false;
    } else {
        const ansErr = questionForm.querySelector('.answers-errors')
        ansErr.classList.add('hidden');
    }


    return true;
}
