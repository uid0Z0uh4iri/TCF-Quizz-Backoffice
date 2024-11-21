let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

let logable = false;
const input = document.querySelector('#login-page input');
input.value = '';

input.addEventListener('input', () => {
    if (input.value.length >= 6) {
        enableButton(loginBtn);
        logable = true;
    } else {
        disableButton(loginBtn);
        logable = false;
    }
});


function addUser(name) {
    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    const exists = users.find(user => user.name === name);
    const id = users.length;
    const games = [];
    const levels = {
        A1: {
            categories: {
                grammar: {
                    validation: true,
                    attempts: 0,
                },
                vocabulary: {
                    validation: false,
                    attempts: 0,
                },
                conjugation: {
                    validation: false,
                    attempts: 0,
                },
            }
        },
        A2: {
            categories: {
                grammar: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
                vocabulary: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
                conjugation: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
            }
        },
        B1: {
            categories: {
                grammar: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
                vocabulary: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
                conjugation: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
            }
        },
        B2: {
            categories: {
                grammar: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
                vocabulary: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
                conjugation: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
            }
        },
        C1: {
            categories: {
                grammar: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
                vocabulary: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
                conjugation: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
            }
        },
        C2: {
            categories: {
                grammar: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
                vocabulary: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
                conjugation: {
                    validation: false,
                    attempts: 0,
                    time: 0
                },
            }
        }
    }


    if (!exists) {
        const user = { name, id, levels, games };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        return user;
    } else {
        console.log('User already exists');
        return exists;
    }
}

function checkUser(name) {
    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    const exists = users.find(user => user.name === name);
    if (exists) {
        return true;
    } else {
        return false;
    }
}



function disableButton(btn) {
    const btnDivs = btn.querySelectorAll('div');
    btnDivs[0].classList.remove('bg-[#E7803B]');
    btnDivs[0].classList.add('bg-[#6B7280]');
    btnDivs[1].classList.remove('bg-[#FAC29D]');
    btnDivs[1].classList.add('bg-[#E5E7EB]');
    btn.classList.add('cursor-not-allowed');
}

function enableButton(btn) {
    const btnDivs = btn.querySelectorAll('div');
    btnDivs[0].classList.remove('bg-[#6B7280]');
    btnDivs[0].classList.add('bg-[#E7803B]');
    btnDivs[1].classList.remove('bg-[#E5E7EB]');
    btnDivs[1].classList.add('bg-[#FAC29D]');
    btn.classList.remove('cursor-not-allowed');
}

function login() {
    if (!logable) return;
    const input = document.querySelector('#login-page input');
    const name = input.value.toLowerCase();
    user = addUser(name);
    if (user) {
        alert(user.name + ' logged in');
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
    window.location.href = 'index.html';
}


const loginBtn = document.querySelector('#login-page button');
disableButton(loginBtn);
