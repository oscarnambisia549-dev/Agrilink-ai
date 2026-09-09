// AgriLink AI JavaScript
// Main application logic will go here.

function askAI() {
  let question = document.getElementById("question").value;
  let answer = document.getElementById("answer");

  if (question.trim() === "") {
    answer.innerText = "Please enter a farming question.";
    return;
  }

  answer.innerText =
    "🤖 AgriLink AI: Thanks! Your question is being analyzed. Soon this will connect to our AI assistant.";
}

function farmer() {
  alert("🌱 Farmer registration coming soon.");
}

function buyer() {
  alert("🛒 Buyer registration coming soon.");
}
