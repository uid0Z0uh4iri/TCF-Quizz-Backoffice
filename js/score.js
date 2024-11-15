let usersData = [];

function loadUserData() {
    const users = [];
    
    // Parcourir tout le localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        try {
            const userData = JSON.parse(localStorage.getItem(key));
            // Vérifier si l'objet contient les données d'un utilisateur
            if (userData && userData.name && userData.levels) {
                users.push(userData);
            }
        } catch (e) {
            console.error('Erreur de lecture:', key, e);
        }
    }

    if (users.length > 0) {
        usersData = users;
        displayScores(usersData);
    } else {
        showNoDataMessage();
    }
}

function showNoDataMessage() {
    const tableBody = document.getElementById('scoresTableBody');
    tableBody.innerHTML = `
        <tr>
            <td colspan="6" class="px-6 py-4 text-center text-gray-500">
                Aucun score disponible
            </td>
        </tr>
    `;
}

function formatDate(dateObj) {
    if (!dateObj) return 'N/A';
    return `${dateObj.day} ${dateObj.hour}:${String(dateObj.minute).padStart(2, '0')}`;
}

function filterScores(scores) {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const levelFilter = document.getElementById('levelFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    let filteredScores = scores.filter(score => {
        const matchesSearch = score.name.toLowerCase().includes(searchTerm);
        const matchesLevel = !levelFilter || score.level === levelFilter;
        return matchesSearch && matchesLevel;
    });

    filteredScores.sort((a, b) => {
        switch (sortBy) {
            case 'date':
                // Comparaison des dates
                const dateA = a.timestamp;
                const dateB = b.timestamp;
                if (!dateA || !dateB) return 0;
                if (dateA.day !== dateB.day) return dateB.day.localeCompare(dateA.day);
                if (dateA.hour !== dateB.hour) return dateB.hour - dateA.hour;
                return dateB.minute - dateA.minute;
            case 'level':
                return a.level.localeCompare(b.level);
            case 'score':
                return b.score - a.score;
            case 'name':
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

    return filteredScores;
}

function displayScores(users) {
    const tableBody = document.getElementById('scoresTableBody');
    tableBody.innerHTML = '';

    const scores = [];

    users.forEach(user => {
        // Parcourir les niveaux
        Object.entries(user.levels || {}).forEach(([level, levelData]) => {
            // Parcourir les catégories
            Object.entries(levelData.categories || {}).forEach(([category, categoryData]) => {
                if (categoryData.games && categoryData.games.length > 0) {
                    categoryData.games.forEach(game => {
                        scores.push({
                            name: user.name,
                            level: level,
                            category: category,
                            score: game.score,
                            timestamp: game.date,
                            attempts: categoryData.attempts || 0
                        });
                    });
                }
            });
        });
    });

    if (scores.length === 0) {
        showNoDataMessage();
        return;
    }

    const filteredScores = filterScores(scores);
    
    filteredScores.forEach(score => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">${score.name}</td>
            <td class="px-6 py-4 whitespace-nowrap">${score.level}</td>
            <td class="px-6 py-4 whitespace-nowrap">${score.category}</td>
            <td class="px-6 py-4 whitespace-nowrap font-semibold">${score.score}%</td>
            <td class="px-6 py-4 whitespace-nowrap">${formatDate(score.timestamp)}</td>
            <td class="px-6 py-4 whitespace-nowrap">${score.attempts}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Event Listeners pour le filtrage et le tri
document.getElementById('searchInput').addEventListener('input', () => displayScores(usersData));
document.getElementById('levelFilter').addEventListener('change', () => displayScores(usersData));
document.getElementById('sortBy').addEventListener('change', () => displayScores(usersData));

// Bouton de débogage (optionnel - peut être retiré en production)
const debugButton = document.createElement('button');
debugButton.innerHTML = 'Vérifier localStorage';
debugButton.className = 'mt-4 px-4 py-2 bg-[#FAC29D] text-[#291306] rounded-xl border-2 border-[#291306]';
debugButton.onclick = () => {
    console.log('Clés localStorage:', Object.keys(localStorage));
    console.log('Contenu localStorage:', Object.keys(localStorage).reduce((obj, key) => {
        obj[key] = localStorage.getItem(key);
        return obj;
    }, {}));
};
document.body.appendChild(debugButton);

// Chargement initial
window.addEventListener('load', loadUserData);