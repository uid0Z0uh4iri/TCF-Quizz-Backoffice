// Retrieve user data from local storage
const retrievedDataString = localStorage.getItem("usersData");
const usersData = JSON.parse(retrievedDataString);

// Check if usersData is valid
if (Array.isArray(usersData) && usersData.length > 0) {
  // Get the table body element
  const tbody = document.getElementById("GeneratingButton");

  // Iterate through each user in the usersData array
  usersData.forEach((user) => {
    // Create a new row for each user
    const newRow = document.createElement("tr");

    // Create a cell for the user's name
    const nameCell = document.createElement("td");
    nameCell.className = "pl-3 text-gray-600 font-bold text-sm leading-normal";
    nameCell.textContent = user.name;

    // Create a cell for the generate button
    const buttonCell = document.createElement("td");
    buttonCell.className =
      "pl-3 text-gray-600 font-bold uppercase text-sm leading-normal";

    const generateButton = document.createElement("button");
    generateButton.textContent = "Generate";
    generateButton.className =
      "text-gray-600 text-base font-bold py-2 px-4 rounded";

    generateButton.addEventListener("click", () => {
      // Store the user's data in local storage
      localStorage.setItem("currentUserData", JSON.stringify(user)); // Use the correct key

      // Navigate to the result page
      window.location.href = "resultPage.html"; // Adjust the path as necessary
    });

    buttonCell.appendChild(generateButton);

    newRow.appendChild(nameCell);
    newRow.appendChild(buttonCell);

    tbody.appendChild(newRow);
  });
} else {
  console.error("No user data found in local storage.");
}
