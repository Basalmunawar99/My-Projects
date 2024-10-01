document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let score = 0;
    const correctAnswers = {
        q1: "Paris",
        q2: "William Shakespeare",
        q3: "Diamond",
        q4: "Pacific Ocean",
        q5: "Cheetah",
        q6: "H2O"
    };

    // Loop through the questions and check answers
    for (let question in correctAnswers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }

    // Display the result
    document.getElementById("result").textContent = `Your score is ${score} out of 6.`;
});
