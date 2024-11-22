document.addEventListener('DOMContentLoaded', () => {
    // Get users data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const usersList = document.getElementById('usersList');

    function calculateLevelProgress(user) {
        let totalValidated = 0;
        let totalCategories = 0;
        
        Object.values(user.levels).forEach(level => {
            Object.values(level.categories).forEach(category => {
                if(category.validation) totalValidated++;
                totalCategories++;
            });
        });
        
        return (totalValidated / totalCategories) * 100;
    }

    function formatDate(dateObj) {
        if (!dateObj) return 'N/A';
        return `${dateObj.day}/${dateObj.month}/${dateObj.year} ${dateObj.hours}:${dateObj.minutes}`;
    }

    function renderUsers(filteredUsers) {
        usersList.innerHTML = filteredUsers.map(user => `
            <div class="user-card">
                <h3>${user.name}</h3>
                <p>Created: ${formatDate(user.date)}</p>
                <p>Overall Progress: ${calculateLevelProgress(user).toFixed(1)}%</p>
                
                <div class="progress-grid">
                    ${Object.entries(user.levels).map(([level, data]) => `
                        <div class="level-progress">
                            <h4>${level}</h4>
                            ${Object.entries(data.categories).map(([category, stats]) => `
                                <div class="category ${stats.validation ? 'validated' : ''}">
                                    ${category}: ${stats.validation ? '✓' : '✗'}
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    function filterAndSortUsers() {
        const searchTerm = searchInput.value.toLowerCase();
        const sortBy = sortSelect.value;
        
        let filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(searchTerm)
        );
        
        filteredUsers.sort((a, b) => {
            switch(sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'date':
                    if (!a.date || !b.date) return 0;
                    return new Date(b.date.year, b.date.month, b.date.day) - 
                           new Date(a.date.year, a.date.month, a.date.day);
                case 'level':
                    return calculateLevelProgress(b) - calculateLevelProgress(a);
                default:
                    return 0;
            }
        });
        
        renderUsers(filteredUsers);
    }

    // Event listeners
    searchInput.addEventListener('input', filterAndSortUsers);
    sortSelect.addEventListener('change', filterAndSortUsers);

    // Initial render
    filterAndSortUsers();
});