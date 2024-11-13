let user = null;

user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
if (!user) {
    window.location.href = 'login.html';
}

