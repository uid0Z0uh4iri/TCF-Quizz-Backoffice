document.getElementById("GeneratePdf").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Sample data for the report
  const userName = document.getElementById("User Name").innerText;
  const questionsAsked = 10; // Replace with actual data
  const correctAnswers = 7; // Replace with actual data
  const incorrectAnswers = 3; // Replace with actual data
  const totalScore = 70; // Replace with actual data
  const levelAchieved = "Intermediate"; // Replace with actual data

  // Adding content to the PDF
  doc.text(`Rapport de l'utilisateur: ${userName}`, 10, 10);
  doc.text(`Questions posées: ${questionsAsked}`, 10, 20);
  doc.text(`Réponses correctes: ${correctAnswers}`, 10, 30);
  doc.text(`Réponses incorrectes: ${incorrectAnswers}`, 10, 40);
  doc.text(`Score total: ${totalScore}`, 10, 50);
  doc.text(`Niveau atteint: ${levelAchieved}`, 10, 60);

  // Save the PDF
  doc.save(`${userName}_Report.pdf`);
});
