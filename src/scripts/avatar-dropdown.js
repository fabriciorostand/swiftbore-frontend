const avatarBtn = document.getElementById("avatarBtn");
const avatarDropdown = document.getElementById("avatarDropdown");

avatarBtn.addEventListener("click", () => {
    avatarDropdown.classList.toggle("hidden");
});

// Close the dropdown if clicked outside
document.addEventListener("click", (e) => {
    if (!avatarBtn.contains(e.target) && !avatarDropdown.contains(e.target)) {
        avatarDropdown.classList.add("hidden");
    }
});