// Seleciona o toggle do modo escuro
const darkModeToggle = document.getElementById("darkModeToggle");

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