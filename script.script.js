const SUPABASE_URL = "https://cjgbeankvgtychqqgvlq.supabase.co/rest/v1/";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_4Xv8GlAQ0eRDHX8MGDL00A_3-fjBrIj";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

function askAI() {
function askAI() {
  let question = document.getElementById("question").value.trim();
  let answer = document.getElementById("answer");

  if (question === "") {
    answer.innerText = "🌱 Please enter a farming question.";
    return;
  }

  let q = question.toLowerCase();

  if (q.includes("maize")) {
    answer.innerText =
      "🌽 Maize advice: Check for yellow leaves, pests, and ensure proper fertilizer application. If possible, upload a photo in a future version for more accurate diagnosis.";
  } else if (q.includes("tomato")) {
    answer.innerText =
      "🍅 Tomatoes need consistent watering, good drainage, and regular checks for pests and diseases.";
  } else if (q.includes("weather")) {
    answer.innerText =
      "🌦️ Weather information will be available once AgriLink AI is connected to a live weather service.";
  } else {
    answer.innerText =
      "🤖 Thanks for your question. Soon AgriLink AI will use a real AI model to provide personalized farming advice.";
  }
}
console.log("AgriLink AI: Supabase configuration loaded.");
