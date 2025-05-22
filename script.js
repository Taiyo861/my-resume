const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const skillButtons = document.querySelectorAll(".skill-btn");

skillButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const detail = button.nextElementSibling;
        detail.classList.toggle("hidden");
    })
})

const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent real submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        feedback.textContent = "Please fill out all fields.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Message sent successfully!";
        feedback.style.color = "green";
        form.reset(); // Clears the form
    }
});