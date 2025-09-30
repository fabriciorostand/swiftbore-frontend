const logoutBtn = document.getElementById("logoutBtn");
    
logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("welcomeNotificationRead");
    window.location.href = "index.html";
});