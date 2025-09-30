document.addEventListener("DOMContentLoaded", () => {
    const notificationIcon = document.getElementById("notificationIcon");

    // Cria wrapper
    const notificationWrapper = document.createElement("div");
    notificationWrapper.className = "relative";
    notificationIcon.parentElement.replaceWith(notificationWrapper);
    notificationWrapper.appendChild(notificationIcon);

    // Dropdown
    const notificationDropdown = document.createElement("div");
    notificationDropdown.id = "notificationDropdown";
    notificationDropdown.className =
        "hidden absolute right-0 mt-4 w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50";

    // Mock: notificação de boas-vindas
    const notifications = [];
    if (!sessionStorage.getItem("welcomeNotificationRead")) {
        notifications.push("Bem vindo a Swiftbore!");
    }

    notifications.forEach((msg) => {
        const item = document.createElement("div");
        item.className =
            "px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-default";
        item.textContent = msg;
        notificationDropdown.appendChild(item);
    });

    notificationWrapper.appendChild(notificationDropdown);

    // Badge
    let badge = null;
    if (notifications.length > 0) {
        badge = document.createElement("span");
        badge.id = "notificationBadge";
        badge.textContent = notifications.length;
        badge.className =
            "absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-md cursor-pointer select-none";
        notificationWrapper.appendChild(badge);
    }

    const toggleDropdown = (e) => {
        if (e && typeof e.stopPropagation === "function") e.stopPropagation();
        notificationDropdown.classList.toggle("hidden");

        // Se abriu, marca como lida (na sessão atual)
        if (!notificationDropdown.classList.contains("hidden") && badge) {
            sessionStorage.setItem("welcomeNotificationRead", "true"); // <-- sessão
            badge.remove();
            badge = null;
        }
    };

    notificationIcon.addEventListener("click", (e) => toggleDropdown(e));
    if (badge) {
        badge.addEventListener("click", (e) => toggleDropdown(e));
    }

    notificationDropdown.addEventListener("click", (e) => e.stopPropagation());

    document.addEventListener("click", (event) => {
        if (
            !notificationWrapper.contains(event.target) &&
            !notificationDropdown.classList.contains("hidden")
        ) {
            notificationDropdown.classList.add("hidden");
        }
    });
});