
const userName = document.querySelector('#user-name');
userName.textContent = 'HI, ' + user.name;

function calculateTotalScore() {
    let totalScore = 0;
    const games = user.games;
    games.forEach(game => {
        totalScore += game.score;
    });
    const totalScoreElement = document.querySelector('#total-score');
    totalScoreElement.textContent = totalScore;
}
calculateTotalScore();
