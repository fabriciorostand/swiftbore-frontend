const avatarBtn = document.getElementById("avatarBtn");
const avatarDropdown = document.getElementById("avatarDropdown");

avatarBtn.addEventListener("click", () => {
    // Fecha o dropdown de notificações se estiver aberto
    const notificationDropdown = document.getElementById("notificationDropdown");
    if (notificationDropdown && !notificationDropdown.classList.contains("hidden")) {
        notificationDropdown.classList.add("hidden");
    }
    
    avatarDropdown.classList.toggle("hidden");
});

// Close the dropdown if clicked outside
document.addEventListener("click", (e) => {
    if (!avatarBtn.contains(e.target) && !avatarDropdown.contains(e.target)) {
        avatarDropdown.classList.add("hidden");
    }
});