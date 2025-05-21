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