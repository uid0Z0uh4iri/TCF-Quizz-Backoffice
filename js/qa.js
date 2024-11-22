let Score = 0;
let Level = 0;
let Active = 0;
let Timer = 0;
let Intervals = [];
let TimeOuts = [];
let CanGoNext = false;
let Freezed = false;
let CurrentQuestion = null
let currentGame = {};
let chosenQs = []

function press(element, color = true) {
    element.classList.add('top-1', 'left-1');
    if (color) {
        element.classList.add('bg-[#A3FF3A]');
    }
}

function release(element) {
    element.classList.remove('top-1', 'left-1', 'bg-[#A3FF3A]');
}

function setActive(element) {
    if (Freezed) {
        return;
    }

    Intervals.forEach(interval => {
        clearInterval(interval);
    });

    press(element.querySelector('.answer-btn'));
    Active = element.dataset.answer;
    if (CurrentQuestion.answers[Active].correct) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
    Freezed = true;
    CanGoNext = true;
}

function nextQuestion() {
    let { answers, question } = chosenQs[Level];
    const correctAnswer = answers.find(answer => answer.correct);
    answers = shuffle(answers);
    answers = answers.filter(answer => !answer.correct).slice(0, 3).concat(correctAnswer);
    answers = shuffle(answers);
    CurrentQuestion = {
        question,
        answers
    };
}

function displayQuestion() {
    let questionContainer = document.querySelector('.question');
    let answersContainer = document.querySelectorAll('.answer-container  span');
    let questionCounter = document.querySelector('.question-counter');
    questionCounter.textContent = `Question ${Level + 1}/${chosenQs.length}`;
    questionContainer.textContent = CurrentQuestion.question;
    answersContainer.forEach((container, index) => {
        const answer = CurrentQuestion.answers[index];

        container.textContent = answer.text;
        container.parentNode.parentNode.dataset.answer = index;
    });

    const answerBtns = document.querySelectorAll('.answer-btn');
    answerBtns.forEach(btn => {
        btn.classList.remove('bg-gray-200', 'bg-red-500', 'bg-green-200');
        btn.previousElementSibling.classList.remove('bg-gray-500', 'bg-red-800', 'bg-green-500');
    });
    startTimer();
}

function shuffle(array) {
    return array = array.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1]);
}

function submit() {
    if (!CanGoNext) {
        return;
    }
    Level++;

    if (Level === chosenQs.length) {
        endGame();
        return;
    }
    const answerBtns = [...document.querySelectorAll('.answer-btn')];
    answerBtns.forEach(btn => {
        press(btn, false);
    });
    setTimeout(() => {
        nextQuestion();
        displayQuestion();
        answerBtns.forEach(btn => {
            release(btn);
        })
        Freezed = false;
        Active = null;
        const star = document.getElementById('svg-star');
        star.classList.remove('fill-red-500');
    }, 500);
    CanGoNext = false;
}

function correctAnswer() {
    Score++;
    const answerBtns = [...document.querySelectorAll('.answer-btn')];
    const correctAnsIndex = answerBtns.findIndex(btn => btn.parentNode.dataset.answer === CurrentQuestion.answers.findIndex(answer => answer.correct).toString());
    answerBtns.filter(btn => btn.parentNode.dataset.answer !== Active).forEach(btn => {
        if (btn.parentNode.dataset.answer === correctAnsIndex) {
            return;
        }
        btn.classList.add('bg-gray-200');
        btn.previousElementSibling.classList.add('bg-gray-500');
    });
    storeQuestionResult(CurrentQuestion, 'correct', Active, Timer);
    addToHistory('correct', CurrentQuestion.question, CurrentQuestion.answers, Active, Timer);
}

function wrongAnswer() {

    const answerBtns = [...document.querySelectorAll('.answer-btn')];

    answerBtns.forEach(btn => {
        if (btn.parentNode.dataset.answer === Active) {
            btn.classList.add('bg-red-500');
            btn.previousElementSibling.classList.add('bg-red-800');
        } else {
            btn.classList.add('bg-gray-200');
            btn.previousElementSibling.classList.add('bg-gray-500');
        }
    });

    storeQuestionResult(CurrentQuestion, 'wrong', Active);
    addToHistory('wrong', CurrentQuestion.question, CurrentQuestion.answers, Active, null);
}

function timeReached() {
    Freezed = true;
    Intervals.forEach(interval => {
        clearInterval(interval);
    });

    const star = document.getElementById('svg-star');

    star.classList.add('fill-red-500');
    CanGoNext = true;

    storeQuestionResult(CurrentQuestion, 'timeout');
    addToHistory('timeout', CurrentQuestion.question, CurrentQuestion.answers, null, null);
}

function startTimer() {
    Timer = 5;
    const TimerElement = document.querySelector('.timer');
    TimerElement.textContent = Timer.toString() + 's';
    Intervals.push(setInterval(() => {
        Timer--;
        TimerElement.textContent = Timer.toString() + 's';
        if (Timer === 0) {
            timeReached();
        }
    }, 1000));
}

function startGame() {
    const star = document.getElementById('svg-star');
    star.classList.remove('fill-red-500');
    updateQuestions();
    Intervals.forEach(interval => {
        clearInterval(interval);
    });
    localStorage.setItem('history', JSON.stringify([]));
    nextQuestion();
    displayQuestion();
}

function endGame() {
    saveGameToHistory();
    resetHistoryGamrObject();
    updateUserProgress(Score);
    displayResults();
    updateSelectionAfterGame();
}

function updateSelectionAfterGame() {
    chechUnlockedUpTo();
    checkAvialableLevels();

    // If the current level is no longer available, reset selection
    if (selectedLevel !== null && selectedLevel > userUnlockedUpTo) {
        resetLevel();
        resetCat();
        disableStartBtn();
        return;
    }

    // If the current category is now validated, mark it as checked
    if (selectedLevel !== null && selectedCategory !== null) {
        const level = levelsKeys[selectedLevel];
        const categories = user.levels[level].categories;
        const catKey = Object.keys(categories)[selectedCategory];

        if (categories[catKey].validation) {
            ShowCheckedCat();
        } else {
            // If category not validated, reset category selection
            resetCat();
        }
    }

    // Update start button state
    globalSelectChange();
}

function resetGame() {
    Score = 0;
    Level = 0;
    Active = 0;
    Timer = 0;
    Intervals.forEach(interval => {
        clearInterval(interval);
    });
    TimeOuts.forEach(timeout => {
        clearTimeout(timeout);
    });
    CanGoNext = false;
    Freezed = false;
    CurrentQuestion = null;
    localStorage.setItem('history', JSON.stringify([]));
    const answerBtns = [...document.querySelectorAll('.answer-btn')];
    answerBtns.forEach(btn => {
        release(btn);
    });
    if (selectedLevel !== null && selectedCategory !== null) {
        enableStartBtn();
    }
}

function printResults() {
    const originalContent = document.body.innerHTML
    const classesToRemove = ['header']
    const idsToRemove = ['q-a-page', 'starting-page', 'download-btn']
    classesToRemove.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`)
        elements.forEach(element => {
            element.remove()
        })
    })
    document.body.querySelectorAll('*').forEach(element => {
        if (idsToRemove.includes(element.id)) {
            element.remove()
        }
        if (element.classList.contains('download-btn')) {
            element.remove()
        }
    })

    document.body.querySelector('#results-page').classList.remove('h-screen', "fixed", "-translate-y-full")
    console.log(document.body)

    window.print()
    document.body.innerHTML = originalContent
}

function updateQuestions() {
    const questions = JSON.parse(localStorage.getItem('questions'));
    const qLevelKeys = Object.keys(questions.level);
    const qCategoryKeys = Object.keys(questions.level[qLevelKeys[selectedLevel]]);
    chosenQs = questions.level[qLevelKeys[selectedLevel]][qCategoryKeys[selectedCategory]];
    checkAvialableLevels();
    ShowCheckedCat();
}

function updateUserProgress(score) {
    const userLevelsKeys = Object.keys(user.levels);
    const userLevCatKeys = Object.keys(user.levels[userLevelsKeys[selectedLevel]].categories);

    const validateLevelCat = chosenQs.length === score;

    if (validateLevelCat) {
        user.levels[userLevelsKeys[selectedLevel]].categories[userLevCatKeys[selectedCategory]].validation = true;
    } else {
        user.levels[userLevelsKeys[selectedLevel]].categories[userLevCatKeys[selectedCategory]].attempts++;
        console.log(user)
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    let users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex(u => u.id === user.id);
    users[userIndex] = user;
    localStorage.setItem('users', JSON.stringify(users));
    chechUnlockedUpTo();
}

function preserveSelection() {
    if (selectedLevel !== null) {
        selectLevelBtn(selectLevelBtns[selectedLevel]);
        onSelectLevel();
    }
    if (selectedCategory !== null) {
        selectCategory(SelectCategoryBtns[selectedCategory]);
        globalSelectChange();
    }
}

function resetHistoryGamrObject() {
    currentGame = {
        questions: []
    };
}

function saveGameToHistory() {
    const perfectScore = Score === chosenQs.length;
    currentGame.id = Date.now();
    currentGame.score = perfectScore ? 10 : 0;
    currentGame.level = levelsKeys[selectedLevel];
    currentGame.category = Object.keys(user.levels[levelsKeys[selectedLevel]].categories)[selectedCategory],
    currentGame.date = {
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes()
    }
    const users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex(u => u.id === user.id);
    users[userIndex].games.push(currentGame);
    localStorage.setItem('users', JSON.stringify(users));
    user.games.push(currentGame);
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function storeQuestionResult(q, ending, choice = null, time = null) {
    const question = {
        question: q.question,
        answers: q.answers,
        time,
        choice,
        ending
    }
    if (currentGame.questions === undefined) {
        currentGame.questions = [];
    }
    currentGame.questions.push(question);
}

function addToHistory(type, question, answers, choice, time) {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.push({
        type,
        question,
        answers,
        choice,
        time
    });
    localStorage.setItem('history', JSON.stringify(history));
}
