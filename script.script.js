// ===============================
// SUPABASE CONNECTION
// ===============================

const SUPABASE_URL = "https://cjgbeankvgtychqqgvlq.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_4Xv8GlAQ0eRDHX8MGDL00A_3-fjBrIj";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// ===============================
// AI FARMING ASSISTANT
// ===============================

function askAI() {

    const question = document.getElementById("question").value.trim();
    const answer = document.getElementById("answer");

    if (question === "") {
        answer.innerText = "🌱 Please enter a farming question.";
        return;
    }

    const q = question.toLowerCase();

    if (q.includes("maize") || q.includes("corn")) {

        answer.innerText =
            "🌽 Maize advice: Check your crops regularly for pests, yellow leaves, and signs of disease. Make sure the soil has enough nutrients and avoid overwatering.";

    } else if (q.includes("tomato") || q.includes("tomatoes")) {

        answer.innerText =
            "🍅 Tomato advice: Give tomatoes consistent watering, good drainage, enough sunlight, and regularly check for pests and diseases.";

    } else if (q.includes("avocado") || q.includes("avocados")) {

        answer.innerText =
            "🥑 Avocado advice: Avoid waterlogged soil, maintain good drainage, and regularly check the trees for pests and diseases.";

    } else if (
        q.includes("pest") ||
        q.includes("insect") ||
        q.includes("bugs")
    ) {

        answer.innerText =
            "🐛 Pest advice: Inspect your crops regularly and identify the pest before choosing a treatment. Use environmentally responsible control methods whenever possible.";

    } else if (
        q.includes("disease") ||
        q.includes("sick") ||
        q.includes("spots") ||
        q.includes("yellow leaves")
    ) {

        answer.innerText =
            "🌱 Plant health advice: Check the affected leaves, stems, roots, and soil. Keep affected plants separated where possible and consider getting a professional diagnosis.";

    } else if (
        q.includes("soil") ||
        q.includes("fertilizer") ||
        q.includes("fertiliser")
    ) {

        answer.innerText =
            "🌱 Soil advice: Healthy soil is essential for good yields. Consider testing your soil before applying fertilizer and use nutrients according to your crop's needs.";

    } else if (
        q.includes("weather") ||
        q.includes("rain") ||
        q.includes("temperature")
    ) {

        answer.innerText =
            "🌦️ Weather information will be available once AgriLink AI is connected to a live weather service.";

    } else if (
        q.includes("market") ||
        q.includes("sell") ||
        q.includes("buyer")
    ) {

        answer.innerText =
            "🛒 AgriLink Marketplace helps farmers connect with potential buyers and find opportunities to sell their produce.";

    } else {

        answer.innerText =
            "🤖 Thanks for your question! AgriLink AI is being developed to provide personalized farming guidance. Try asking about maize, tomatoes, avocados, pests, soil, fertilizer, weather, or markets.";
    }
}


// ===============================
// SHOW REGISTRATION FORM
// ===============================

function showRegistration(role) {

    const box = document.getElementById("registrationBox");
    const title = document.getElementById("registrationTitle");

    if (role === "farmer") {

        title.innerText = "👨‍🌾 Register as a Farmer";

    } else {

        title.innerText = "🛒 Register as a Buyer";
    }

    box.style.display = "block";

    box.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    box.dataset.role = role;
}


// ===============================
// REGISTRATION
// ===============================

const registrationForm =
    document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const location =
            document.getElementById("location").value.trim();

        const registrationBox =
            document.getElementById("registrationBox");

        const message =
            document.getElementById("registrationMessage");

        const role =
            registrationBox.dataset.role || "farmer";


        if (!fullName || !email || !phone || !location) {

            message.innerText =
                "⚠️ Please fill in all the fields.";

            return;
        }


        message.innerText =
            "⏳ Creating your AgriLink AI account...";


        try {

            const { data, error } =
                await supabaseClient
                    .from("users")
                    .insert([
                        {
                            full_name: fullName,
                            email: email,
                            phone: phone,
                            location: location,
                            role: role
                        }
                    ])
                    .select();


            // SHOW THE REAL SUPABASE ERROR
            if (error) {

                console.error("SUPABASE ERROR:", error);

                message.innerText =
                    "❌ Registration failed: " +
                    error.message;

                return;
            }


            message.innerText =
                "🎉 Registration successful! Welcome to AgriLink AI, " +
                fullName + "!";


            registrationForm.reset();


        } catch (error) {

            console.error("REGISTRATION ERROR:", error);

            message.innerText =
                "❌ Something went wrong: " +
                error.message;
        }

    });
}


// ===============================
// AI ENTER KEY
// ===============================

document.addEventListener("DOMContentLoaded", function() {

    const questionInput =
        document.getElementById("question");

    if (questionInput) {

        questionInput.addEventListener("keydown", function(event) {

            if (event.key === "Enter") {

                askAI();
            }

        });
    }

});
