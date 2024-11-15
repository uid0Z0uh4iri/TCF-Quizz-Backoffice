
if (!user) {
    alert('No user found');
}

const levelsKeys = Object.keys(user.levels);
let userUnlockedUpTo = null;
let selectedLevel = null;
let selectedCategory = null;

const selectLevelBtns = document.querySelectorAll('#select-level-area > div');
const SelectCategoryBtns = document.querySelectorAll('#select-cat-area > div');

const startBtn = document.getElementById('start-btn');

let ready = false;

disableStartBtn();


function disableStartBtn() {
    console.log(startBtn);
    const btnDivs = startBtn.querySelectorAll('div');
    btnDivs[0].classList.remove('bg-[#E7803B]');
    btnDivs[0].classList.add('bg-[#AAAAAA]');
    btnDivs[1].classList.remove('bg-[#FAC29D]');
    btnDivs[1].classList.add('bg-[#E5E7EB]');
    startBtn.classList.add('cursor-not-allowed');
    ready = false;
}

function enableStartBtn() {
    const btnDivs = startBtn.querySelectorAll('div');
    btnDivs[0].classList.remove('bg-[#AAAAAA]');
    btnDivs[0].classList.add('bg-[#E7803B]');
    btnDivs[1].classList.remove('bg-[#E5E7EB]');
    btnDivs[1].classList.add('bg-[#FAC29D]');
    startBtn.classList.remove('cursor-not-allowed');
    ready = true;
}

startBtn.onclick = () => {
    if (ready) {
        start();
    }
}

function selectLevelBtn(btn) {
    const btnDivs = btn.querySelectorAll('div');
    btnDivs[0].classList.remove('bg-[#E7803B]', 'bg-[#2A9023]', 'bg-[#AAAAAA]');
    btnDivs[1].classList.remove('bg-[#FAC29D]', 'bg-[#A3FF3A]', 'bg-[#E5E7EB]', 'top-[3px]');
    btnDivs[0].classList.add('bg-[#2A9023]');
    btnDivs[1].classList.add('bg-[#A3FF3A]', 'top-[3px]');
    btnDivs[2].classList.add('hidden');
    btn.classList.remove('cursor-not-allowed');
}

function lockLevelBtn(btn) {
    const btnDivs = btn.querySelectorAll('div');
    btnDivs[0].classList.remove('bg-[#E7803B]', 'bg-[#2A9023]', 'bg-[#AAAAAA]');
    btnDivs[1].classList.remove('bg-[#FAC29D]', 'bg-[#A3FF3A]', 'bg-[#E5E7EB]', 'top-[3px]');
    btnDivs[0].classList.add('bg-[#AAAAAA]');
    btnDivs[1].classList.add('bg-[#E5E7EB]');
    btnDivs[2].classList.remove('hidden');
    btn.classList.add('cursor-not-allowed');
}

function unselectLevelBtn(btn) {
    const btnDivs = btn.querySelectorAll('div');
    btnDivs[0].classList.remove('bg-[#E7803B]', 'bg-[#2A9023]', 'bg-[#AAAAAA]');
    btnDivs[1].classList.remove('bg-[#FAC29D]', 'bg-[#A3FF3A]', 'bg-[#E5E7EB]', 'top-[3px]');
    btnDivs[0].classList.add('bg-[#E7803B]');
    btnDivs[1].classList.add('bg-[#FAC29D]');
    btnDivs[2].classList.add('hidden');
    btn.classList.remove('cursor-not-allowed');
}


levelsLoop:
for (let i = 0; i < levelsKeys.length; i++) {
    const level = levelsKeys[i];
    const catKeys = Object.keys(user.levels[level].categories);

    for (let j = 0; j < catKeys.length; j++) {
        const cat = catKeys[j];

        if (!user.levels[level].categories[cat].validation) {
            userUnlockedUpTo = i;
            break levelsLoop;
        }
    }
}

function onSelectLevel() {
    resetCat()
    ShowCheckedCat()
    globalSelectChange();
}

selectLevelBtns.forEach((btn, index) => {

    btn.onclick = () => {
        if (index <= userUnlockedUpTo) {
            selectLevelBtn(btn);
            if (selectedLevel !== null && selectedLevel !== index) {
                unselectLevelBtn(selectLevelBtns[selectedLevel]);
            }
            selectedLevel = index;
            onSelectLevel(index);
        }
    };
});

function checkAvialableLevels() {
    console.log('yeeeeeeeeeeeeeeeeeeessss')
    selectLevelBtns.forEach((btn, index) => {
        btn.style.userSelect = 'none';
        btn.querySelectorAll('div')[1].classList.remove('cursor-pointer');
        btn.classList.add('cursor-pointer');
        if (index <= userUnlockedUpTo) {
            unselectLevelBtn(btn);
        } else {
            lockLevelBtn(btn);
        }
    });
}

checkAvialableLevels();
function selectCategory(cat) {
    const btnDivs = cat.querySelectorAll('div');
    btnDivs[0].classList.remove('bg-[#E7803B]', 'bg-[#2A9023]', 'bg-[#AAAAAA]');
    btnDivs[1].classList.remove('bg-[#FAC29D]', 'bg-[#A3FF3A]', 'bg-[#E5E7EB]', 'top-[3px]', 'left-[3px]');
    btnDivs[0].classList.add('bg-[#2A9023]');
    btnDivs[1].classList.add('bg-[#A3FF3A]', 'top-[3px]', 'left-[3px]');
    btnDivs[2].classList.add('hidden');
    cat.classList.remove('cursor-not-allowed');
}

function unselectCategory(cat) {
    const btnDivs = cat.querySelectorAll('div');
    btnDivs[0].classList.remove('bg-[#E7803B]', 'bg-[#2A9023]', 'bg-[#AAAAAA]');
    btnDivs[1].classList.remove('bg-[#FAC29D]', 'bg-[#A3FF3A]', 'bg-[#E5E7EB]', 'top-[3px]', 'left-[3px]');
    btnDivs[0].classList.add('bg-[#E7803B]');
    btnDivs[1].classList.add('bg-[#FAC29D]');
    btnDivs[2].classList.add('hidden');
    cat.classList.remove('cursor-not-allowed');
}

function markCheckCat(cat) {
    const btnDivs = cat.querySelectorAll('div');
    btnDivs[0].classList.remove('bg-[#E7803B]', 'bg-[#2A9023]', 'bg-[#AAAAAA]');
    btnDivs[1].classList.remove('bg-[#FAC29D]', 'bg-[#A3FF3A]', 'bg-[#E5E7EB]', 'top-[3px]', 'left-[3px]');
    btnDivs[0].classList.add('bg-[#AAAAAA]');
    btnDivs[1].classList.add('bg-[#E5E7EB]');
    btnDivs[2].classList.remove('hidden');
    btnDivs[2].classList.add('bg-[#A3FF3A]');
    cat.classList.add('cursor-not-allowed');
}

SelectCategoryBtns.forEach((cat, index) => {
    cat.style.userSelect = 'none';
    cat.onclick = () => {
        if (selectedLevel === null) {
            alert('Select a level first');
            return;
        }
        if (!checkedCat(index)) {
            selectCategory(cat)
            if (selectedCategory !== null && selectedCategory !== index) {
                unselectCategory(SelectCategoryBtns[selectedCategory]);
            }
            selectedCategory = index;
            globalSelectChange();
        }
    }
})

function checkedCat(index) {
    const level = levelsKeys[selectedLevel];
    const categories = user.levels[level].categories;
    const catKey = Object.keys(categories)[index];
    return categories[catKey].validation;
}




function resetCat() {
    if (selectedCategory !== null) {
        unselectCategory(SelectCategoryBtns[selectedCategory]);
        selectedCategory = null;
    }
}
function ShowCheckedCat() {
    const level = levelsKeys[selectedLevel];
    const categories = user.levels[level].categories;
    const categoryBtns = document.querySelectorAll('#select-cat-area > div');
    categoryBtns.forEach((btn, catIndex) => {
        const catKey = Object.keys(categories)[catIndex];

        if (categories[catKey].validation) {
            markCheckCat(btn);
        } else {
            unselectCategory(btn);
        }
    });
}

function globalSelectChange() {
    if (selectedLevel !== null && selectedCategory !== null) {
        enableStartBtn();
    } else {
        disableStartBtn();
    }
}
