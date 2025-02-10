// Get references to HTML elements
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const response = document.getElementById("response");
const proposalResponse = document.getElementById("proposal-response");

// Function to show the response based on user's choice
option1.addEventListener("click", function() {
    response.style.display = "block";
    response.textContent = "Will you be my Valentine, Nafeesa Baby?";
    // Disable the initial buttons
    option1.disabled = true;
    option2.disabled = true;
    // Show new response options
    setTimeout(() => {
        const yesButton = document.createElement("button");
        yesButton.classList.add("proposal-button");
        yesButton.textContent = "Yes!";
        yesButton.addEventListener("click", function() {
            proposalResponse.style.display = "block";
            proposalResponse.textContent = "Yay! I love you!";
            yesButton.disabled = true; // Disable the button
        });

        const noButton = document.createElement("button");
        noButton.classList.add("proposal-button");
        noButton.textContent = "No!";
        noButton.addEventListener("click", function() {
            proposalResponse.style.display = "block";
            proposalResponse.textContent = "Aww, I'll try again next year!";
            noButton.disabled = true; // Disable the button
        });

        proposalResponse.appendChild(yesButton);
        proposalResponse.appendChild(noButton);
    }, 500); // Show buttons after 0.5s
});

option2.addEventListener("click", function() {
    response.style.display = "block";
    response.textContent = "You have no choice, lmao!";
    option1.disabled = true;
    option2.disabled = true;
});
