const sidebar = document.getElementById('sidebar');
const menuToggleBtn = document.getElementById('menuToggleBtn');
const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
const menuToggleIcon = document.getElementById('menuToggleIcon');
const sidebarToggleIcon = document.getElementById('sidebarToggleIcon');

function isOpen() {
    return !sidebar.classList.contains('-translate-x-full');
}

function setIcons(open) {
    const src = open ? '../assets/images/menu.png' : '../assets/images/menu.png';
    if (menuToggleIcon) menuToggleIcon.src = src;
    if (sidebarToggleIcon) sidebarToggleIcon.src = src;
}

function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    setIcons(isOpen());
}

// listeners
if (menuToggleBtn) menuToggleBtn.addEventListener('click', toggleSidebar);
if (sidebarToggleBtn) sidebarToggleBtn.addEventListener('click', toggleSidebar);

setIcons(isOpen());