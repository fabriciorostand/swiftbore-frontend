(function() {
    const pageIconMap = {
        'dashboard.html': 'home-orange.png',
        'events.html': 'calendar-orange.png', 
        'store.html': 'store-orange.png',
        'account-preferences.html': 'settings-orange.png'
    };

    const iconIdMap = {
        'dashboard.html': 'homeIcon',
        'events.html': 'calendarIcon',
        'store.html': 'storeIcon',
        'account-preferences.html': 'settingsIcon'
    };

    function applyActiveFooterIcon() {
        const currentPage = window.location.pathname.split('/').pop();
        if (!pageIconMap[currentPage]) return;

        const iconId = iconIdMap[currentPage];
        const iconElement = document.getElementById(iconId);
        if (!iconElement) return;

        const orangeIconPath = `../assets/icons/${pageIconMap[currentPage]}`;
        iconElement.src = orangeIconPath;

        const parentLink = iconElement.closest('a');
        if (parentLink) parentLink.classList.add('text-orange-500');
    }

    window.applyActiveFooterIcon = applyActiveFooterIcon;
    document.addEventListener('DOMContentLoaded', applyActiveFooterIcon);
})();