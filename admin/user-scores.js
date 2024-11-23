document.addEventListener('DOMContentLoaded', function() {
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Add a placeholder test date for demonstration
    users.forEach(user => {
        user.testDate = new Date().toISOString().split('T')[0]; // Current date as placeholder
    });

    // Get the table body
    const tableBody = document.querySelector('#scoresTable tbody');

    // Function to calculate total score and highest level
    function calculateUserStats(user) {
        let totalScore = 0;
        let highestLevel = 'A1';
        const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

        for (const level of levels) {
            let levelScore = 0;
            for (const category in user.levels[level].categories) {
                if (user.levels[level].categories[category].validation) {
                    levelScore++;
                    totalScore++;
                }
            }
            if (levelScore > 0) {
                highestLevel = level;
            }
        }
        return { totalScore, highestLevel };
    }

    // Function to display users
    function displayUsers(usersToDisplay) {
        tableBody.innerHTML = '';
        usersToDisplay.forEach(user => {
            const row = document.createElement('tr');
            const { totalScore, highestLevel } = calculateUserStats(user);
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${totalScore}</td>
                <td>${highestLevel}</td>
                <td>${user.testDate}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Initial display
    displayUsers(users);

    // Add event listener for name search
    const nameSearchInput = document.getElementById('nameSearch');
    nameSearchInput.addEventListener('input', filterUsers);

    // Add event listener for date search
    const dateSearchInput = document.getElementById('dateSearch');
    dateSearchInput.addEventListener('input', filterUsers);

    // Function to filter users based on name and date
    function filterUsers() {
        const nameSearchTerm = nameSearchInput.value.toLowerCase();
        const dateSearchTerm = dateSearchInput.value;

        const filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(nameSearchTerm) &&
            user.testDate.includes(dateSearchTerm)
        );
        displayUsers(filteredUsers);
    }

    // Sorting function
    function sortUsers(key) {
        return function(a, b) {
            if (key === 'level') {
                const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
                const levelA = calculateUserStats(a).highestLevel;
                const levelB = calculateUserStats(b).highestLevel;
                return levels.indexOf(levelB) - levels.indexOf(levelA);
            } else if (key === 'score') {
                return calculateUserStats(b).totalScore - calculateUserStats(a).totalScore;
            } else if (key === 'date') {
                return new Date(b.testDate) - new Date(a.testDate);
            } else {
                return a[key].localeCompare(b[key]);
            }
        };
    }

    // Add event listeners for sorting
    document.querySelectorAll('th').forEach(th => {
        th.addEventListener('click', () => {
            const key = th.dataset.sort;
            if (key) {
                users.sort(sortUsers(key));
                displayUsers(users);
            }
        });
    });
});