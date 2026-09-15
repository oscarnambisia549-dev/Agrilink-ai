// ==========================================
// SUPABASE CONFIGURATION
// ==========================================

const SUPABASE_URL = "https://cjgbeankvgtychqqgvlq.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_4Xv8GlAQ0eRDHX8MGDL00A_3-fjBrIj";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// ==========================================
// AI FARMING ASSISTANT
// ==========================================

function askAI() {

    const question = document
        .getElementById("question")
        .value
        .trim();

    const answer = document.getElementById("answer");

    if (question === "") {
        answer.innerText =
            "🌱 Please enter a farming question.";
        return;
    }

    const q = question.toLowerCase();


    // MAIZE
    if (q.includes("maize") || q.includes("corn")) {

        answer.innerText =
            "🌽 Maize advice: Check your crops regularly for pests, yellow leaves, and signs of disease. Make sure the soil has enough nutrients and avoid overwatering.";
    }


    // TOMATOES
    else if (q.includes("tomato") || q.includes("tomatoes")) {

        answer.innerText =
            "🍅 Tomato advice: Give tomatoes consistent watering, good drainage, enough sunlight, and regularly check for pests and diseases.";
    }


    // AVOCADOS
    else if (q.includes("avocado") || q.includes("avocados")) {

        answer.innerText =
            "🥑 Avocado advice: Avoid waterlogged soil, maintain good drainage, and regularly check the trees for pests and diseases.";
    }


    // PESTS
    else if (
        q.includes("pest") ||
        q.includes("insect") ||
        q.includes("bugs")
    ) {

        answer.innerText =
            "🐛 Pest advice: Inspect your crops regularly and identify the pest before choosing a treatment. Use environmentally responsible control methods whenever possible.";
    }


    // DISEASE
    else if (
        q.includes("disease") ||
        q.includes("sick") ||
        q.includes("spots") ||
        q.includes("yellow leaves")
    ) {

        answer.innerText =
            "🌱 Plant health advice: Check the affected leaves, stems, roots, and soil. Keep affected plants separated where possible and consider getting a professional diagnosis.";
    }


    // SOIL & FERTILIZER
    else if (
        q.includes("soil") ||
        q.includes("fertilizer") ||
        q.includes("fertiliser")
    ) {

        answer.innerText =
            "🌱 Soil advice: Healthy soil is essential for good yields. Consider testing your soil before applying fertilizer and use nutrients according to your crop's needs.";
    }


    // WEATHER
    else if (
        q.includes("weather") ||
        q.includes("rain") ||
        q.includes("temperature")
    ) {

        answer.innerText =
            "🌦️ Weather information will be available once AgriLink AI is connected to a live weather service.";
    }


    // MARKET
    else if (
        q.includes("market") ||
        q.includes("sell") ||
        q.includes("buyer")
    ) {

        answer.innerText =
            "🛒 AgriLink Marketplace helps farmers connect with potential buyers and find opportunities to sell their produce.";
    }


    // DEFAULT
    else {

        answer.innerText =
            "🤖 Thanks for your question! AgriLink AI is being developed to provide personalized farming guidance. Try asking about maize, tomatoes, avocados, pests, soil, fertilizer, weather, or markets.";
    }
}


// ==========================================
// FARMER ACCOUNT
// ==========================================

function farmer() {

    alert(
        "👨‍🌾 Welcome to AgriLink AI!\n\nFarmer registration will be available soon."
    );
}


// ==========================================
// BUYER ACCOUNT
// ==========================================

function buyer() {

    alert(
        "🛒 Welcome to AgriLink AI!\n\nBuyer registration will be available soon."
    );
}


// ==========================================
// ENTER KEY FOR AI ASSISTANT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const questionInput =
        document.getElementById("question");

    if (questionInput) {

        questionInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    askAI();
                }

            }
        );

    }

});
