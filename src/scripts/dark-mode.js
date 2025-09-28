// Seleciona o toggle do modo escuro
const darkModeToggle = document.getElementById("darkModeToggle");

function updateIcons(darkMode) {
  document.getElementById("homeIcon").src = darkMode ? "../assets/icons/home-white.png" : "../assets/icons/home.png";
  document.getElementById("calendarIcon").src = darkMode ? "../assets/icons/calendar-white.png" : "../assets/icons/calendar.png";
  document.getElementById("storeIcon").src = darkMode ? "../assets/icons/store-white.png" : "../assets/icons/store.png";
  document.getElementById("settingsIcon").src = darkMode ? "../assets/icons/settings-white.png" : "../assets/icons/settings.png";
}

// Função para atualizar a aparência do toggle
function updateToggleAppearance(enabled) {
  if (!darkModeToggle) return;
  
  const toggleContainer = darkModeToggle.nextElementSibling;
  const toggleKnob = toggleContainer ? toggleContainer.firstElementChild : null;
  
  if (toggleContainer && toggleKnob) {
    if (enabled) {
      // Modo escuro ativado - usa classes Tailwind
      toggleContainer.classList.remove("bg-gray-300");
      toggleContainer.classList.add("bg-orange-400");
      toggleKnob.classList.remove("translate-x-0");
      toggleKnob.classList.add("translate-x-5");
    } else {
      // Modo escuro desativado - usa classes Tailwind
      toggleContainer.classList.remove("bg-orange-400");
      toggleContainer.classList.add("bg-gray-300");
      toggleKnob.classList.remove("translate-x-5");
      toggleKnob.classList.add("translate-x-0");
    }
  }
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
  
  updateToggleAppearance(enabled);
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