document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("quizForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from reloading the page
        calculateCompatibility();
    });
});

function calculateCompatibility() {
    // Get all the input values
    let scores = [];
    for (let i = 1; i <= 5; i++) {
        let value = parseInt(document.getElementById(`q${i}`).value);
        if (isNaN(value) || value < 1 || value > 5) {
            alert("Please enter a valid number between 1 and 5 for all questions.");
            return;
        }
        scores.push(value);
    }

    // Calculate the average score
    let sum = scores.reduce((a, b) => a + b, 0);
    let average = sum / scores.length;

    // Determine the personality type
    let resultText = "";
    if (average >= 4.5) {
        resultText = "You are a Night Owl! 🌙 You enjoy staying up late and relaxing at night.";
    } else if (average >= 3.5) {
        resultText = "You are a Balanced Thinker! 🤔 You like a mix of day and night activities.";
    } else if (average >= 2.5) {
        resultText = "You are an Early Bird! 🌞 Mornings are your best time for energy and productivity.";
    } else {
        resultText = "You prefer quiet and calm activities. 📖 You enjoy peaceful moments and solitude.";
    }

    // Display the result
    document.getElementById("result").innerHTML = `<h2>${resultText}</h2>`;
}
