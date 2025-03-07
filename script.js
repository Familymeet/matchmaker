document.getElementById("quizForm").addEventListener("submit", function(event) {
    // Prevents the form from reloading the page
    event.preventDefault();

    // Get the user's answers from the form
    const answers = [
        parseInt(document.getElementById("q1").value),
        parseInt(document.getElementById("q2").value),
        parseInt(document.getElementById("q3").value),
        parseInt(document.getElementById("q4").value),
        parseInt(document.getElementById("q5").value)
    ];
    
    // Check if all inputs are valid numbers
    if (answers.some(isNaN)) {
        alert("Please fill in all the questions if you want to be with me.");
        return;
    }
    

    // Desired answers (True Love answers)
    const trueLoveAnswers = [5, 4, 3, 2, 5];  // Example answers for "True Love"

    // Calculate the total difference between the user's answers and the true love answers
    let totalDifference = 0;

    for (let i = 0; i < answers.length; i++) {
        totalDifference += Math.abs(answers[i] - trueLoveAnswers[i]);
    }

    // Subtract the total difference from 100 to calculate the compatibility score
    let compatibilityScore = 100 - (totalDifference * 10); // We multiply by 10 to give a larger score range

    // Set thresholds for the results
    let resultMessage = '';
    if (compatibilityScore >= 80) {
        resultMessage = "True Love!";
    } else if (compatibilityScore >= 50) {
        resultMessage = "Possible Friends!";
    } else {
        resultMessage = "Run Away!";
    }

    // Display the result
    document.getElementById("result").innerHTML = `
        Compatibility Score: ${compatibilityScore}<br>
        ${resultMessage}
    `;
});
