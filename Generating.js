const retrievedDataString = localStorage.getItem("usersData");
const usersData = JSON.parse(retrievedDataString);

if (Array.isArray(usersData) && usersData.length > 0) {
  const tbody = document.getElementById("GeneratingButton");

  usersData.forEach((user) => {
    const newRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.className = "pl-3 text-gray-600 font-bold text-sm leading-normal";
    nameCell.textContent = user.name;

    const buttonCell = document.createElement("td");
    buttonCell.className =
      "pl-3 text-gray-600 font-bold uppercase text-sm leading-normal";

    const generateButton = document.createElement("button");
    generateButton.textContent = "Generate";
    generateButton.className =
      "text-gray-600 text-base font-bold py-2 px-4 rounded";

    generateButton.addEventListener("click", () => {
      localStorage.setItem("currentUserData", JSON.stringify(user));

      window.location.href = "resultPage.html";
    });

    buttonCell.appendChild(generateButton);

    newRow.appendChild(nameCell);
    newRow.appendChild(buttonCell);

    tbody.appendChild(newRow);
  });
} else {
  console.error("No user data found in local storage.");
}
