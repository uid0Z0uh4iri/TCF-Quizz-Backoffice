function calculateAttempts(categories) {
  let attempts = 0;

  const allCategoriesValidated = Object.values(categories).every(
    (category) => category.validation
  );

  if (allCategoriesValidated) {
    const attemptsCount = Object.values(categories).reduce((sum, category) => {
      return sum + category.attempts;
    }, 0);

    if (attemptsCount === 0) {
      attempts += 1;
    } else {
      attempts += attemptsCount;
    }
  } else {
    attempts += Object.values(categories).reduce((sum, category) => {
      return sum + category.attempts;
    }, 0);
  }

  return attempts;
}

function populatePerformanceTable(users) {
  const tableBody = document.getElementById("performanceTableBody");

  const levelCounts = users.reduce((counts, user) => {
    if (!user.levels) return counts;

    for (const levelKey in user.levels) {
      const categories = user.levels[levelKey]?.categories;

      if (!counts[levelKey]) {
        counts[levelKey] = { total: 0, validated: 0, attempts: 0, users: [] };
      }

      const attempts = calculateAttempts(categories);

      if (attempts > 0) {
        counts[levelKey].attempts += attempts;
        counts[levelKey].total += 1;
        counts[levelKey].users.push(user.name);

        if (
          Object.values(categories).every((category) => category.validation)
        ) {
          counts[levelKey].validated += 1;
        }
      }
    }
    return counts;
  }, {});

  Object.entries(levelCounts).forEach(
    ([level, { total, validated, attempts, users }]) => {
      const successRate =
        total > 0 ? ((validated / total) * 100).toFixed(2) + "%" : "N/A";
      const row = document.createElement("tr");
      row.appendChild(createCell(level));
      row.appendChild(createCell(successRate));
      row.appendChild(createCell(attempts));
      tableBody.appendChild(row);

      console.log(
        `Level: ${level}, Total: ${total}, Validated: ${validated}, Attempts: ${attempts}, Users: ${users}`
      );
    }
  );
}

function createCell(text) {
  const cell = document.createElement("td");
  cell.className = "py-3 px-4";
  cell.textContent = text;
  return cell;
}

window.onload = () => {
  // Retrieve the JSON string from localStorage
  const retrievedDataString = localStorage.getItem("users");

  // Parse the JSON string back into a JavaScript object
  const users = JSON.parse(retrievedDataString);

  if (users) {
    populatePerformanceTable(users);
  } else {
    console.error("No data found in localStorage for users.");
  }
};
