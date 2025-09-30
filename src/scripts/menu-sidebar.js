// Seletores
const sidebar = document.getElementById('sidebar');
const menuToggleBtn = document.getElementById('menuToggleBtn');
const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
const menuToggleIcon = document.getElementById('menuToggleIcon');
const sidebarToggleIcon = document.getElementById('sidebarToggleIcon');

// Utilitários
function isOpen() {
    return !sidebar.classList.contains('-translate-x-full');
}

function setIcons(open) {
    const src = open ? '../assets/icons/menu.png' : '../assets/icons/menu.png';
    if (menuToggleIcon) menuToggleIcon.src = src;
    if (sidebarToggleIcon) sidebarToggleIcon.src = src;
}

// Comportamentos
function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    setIcons(isOpen());
}

function handleResize() {
    if (window.innerWidth < 768 && isOpen()) {
        sidebar.classList.add('-translate-x-full');
        setIcons(false);
    }
}

// Listeners (sempre no fim)
if (menuToggleBtn) menuToggleBtn.addEventListener('click', toggleSidebar);
if (sidebarToggleBtn) sidebarToggleBtn.addEventListener('click', toggleSidebar);
window.addEventListener('resize', handleResize);