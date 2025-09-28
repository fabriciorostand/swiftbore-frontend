// Seleciona o toggle do modo escuro
const darkModeToggle = document.getElementById("darkModeToggle");

function updateIcons(darkMode) {
  document.getElementById("homeIcon").src = darkMode ? "../assets/icons/home-white.png" : "../assets/icons/home.png";
  document.getElementById("calendarIcon").src = darkMode ? "../assets/icons/calendar-white.png" : "../assets/icons/calendar.png";
  document.getElementById("storeIcon").src = darkMode ? "../assets/icons/store-white.png" : "../assets/icons/store.png";
  document.getElementById("settingsIcon").src = darkMode ? "../assets/icons/settings-white.png" : "../assets/icons/settings.png";
}

// Função para aplicar/remover modo escuro
function setDarkMode(enabled) {
  if (enabled) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
    if (darkModeToggle) darkModeToggle.checked = true;
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "disabled");
    if (darkModeToggle) darkModeToggle.checked = false;
  }
  updateIcons(enabled);
}

// Verifica preferência salva no carregamento
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }

  // Listener para o toggle
  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", (e) => {
      setDarkMode(e.target.checked);
    });
  }
});