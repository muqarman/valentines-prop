// Get references to HTML elements
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const response = document.getElementById("response");

// Function to show the response based on user's choice
option1.addEventListener("click", function() {
    response.style.display = "block";
    response.textContent = "Will you be my Valentine?";
    option1.disabled = true; // Disable buttons after choice
    option2.disabled = true;
});

option2.addEventListener("click", function() {
    response.style.display = "block";
    response.textContent = "You have no choice, lmao!";
    option1.disabled = true;
    option2.disabled = true;
});

