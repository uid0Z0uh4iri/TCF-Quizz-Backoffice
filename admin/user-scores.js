document.addEventListener('DOMContentLoaded', function() {
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Get the table body
    const tableBody = document.querySelector('#scoresTable tbody');

    // Function to calculate total score
    function calculateTotalScore(user) {
        let totalScore = 0;
        for (const level in user.levels) {
            for (const category in user.levels[level].categories) {
                if (user.levels[level].categories[category].validation) {
                    totalScore++;
                }
            }
        }
        return totalScore;
    }

    // Function to display users
    function displayUsers(usersToDisplay) {
        tableBody.innerHTML = '';
        usersToDisplay.forEach(user => {
            const row = document.createElement('tr');
            const totalScore = calculateTotalScore(user);
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${totalScore}</td>
                <td>${Object.keys(user.levels).map(level => 
                    `${level}: ${Object.values(user.levels[level].categories).filter(cat => cat.validation).length}`
                ).join(', ')}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Initial display
    displayUsers(users);

    // Add event listener for name search
    const searchInput = document.getElementById('nameSearch');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(searchTerm)
        );
        displayUsers(filteredUsers);
    });

    // Add event listeners for sorting
    document.querySelectorAll('th').forEach(th => {
        th.addEventListener('click', () => {
            const index = Array.from(th.parentNode.children).indexOf(th);
            sortTable(index);
        });
    });

    function sortTable(column) {
        const rows = Array.from(tableBody.querySelectorAll('tr'));
        const isAscending = !tableBody.classList.contains('sorted-asc');

        rows.sort((a, b) => {
            let aValue = a.cells[column].textContent;
            let bValue = b.cells[column].textContent;

            if (column === 1) { // Score column
                return isAscending ? aValue - bValue : bValue - aValue;
            } else { // Name column
                return isAscending ? 
                    aValue.localeCompare(bValue) : 
                    bValue.localeCompare(aValue);
            }
        });

        rows.forEach(row => tableBody.appendChild(row));
        tableBody.classList.toggle('sorted-asc', isAscending);
    }
});