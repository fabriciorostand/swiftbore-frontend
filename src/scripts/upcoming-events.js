const upcomingEvents = [
    {
        name: "Natal",
        date: "15/12",
        icon: "../assets/icons/upcoming-event-icon.png",
    },
    {
        name: "Ano Novo",
        date: "27/12",
        icon: "../assets/icons/upcoming-event-icon.png",
    }
];

const container = document.getElementById("upcoming-events");

upcomingEvents.forEach(event => {
    const div = document.createElement("div");
    div.className = "dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-sm mt-2 p-4 flex items-center gap-4";

    div.innerHTML = `
        <div class="w-16 h-16 flex items-center justify-center bg-gray-300 rounded-full">
            <img src="${event.icon}" alt="Ícone do evento">
        </div>
        <div class="flex flex-col">
            <span class="font-medium">${event.name}</span>
            <p class="text-sm text-gray-600 dark:text-gray-400">Começa em ${event.date}</p>
        </div>
    `;

    container.appendChild(div);
});