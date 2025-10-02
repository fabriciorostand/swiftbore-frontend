const objectives = [
    {
        title: "Vender 150 unidades de Sorvete de Creme Kibon (1,5L)",
        progress: 0,
        goal: 150,
        points: 50
    },
    {
        title: "Vender 300 unidades de Bolinha de Queijo Swift (300g)",
        progress: 0,
        goal: 300,
        points: 200
    },
    {
        title: "Vender 300 unidades de Chicken Croc Tradicional Swift (300g)",
        progress: 0,
        goal: 300,
        points: 200
    }
];

// Container 
const container = document.getElementById("objectives-container");

// Configurar o container como grid responsivo
container.className = "grid grid-cols-1 md:grid-cols-2 gap-4";

objectives.forEach(obj => {
    const percentualProgress = (obj.progress / obj.goal) * 100;

    const div = document.createElement("div");
    div.className = "dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-sm mt-4 p-4";
    div.innerHTML = `
        <div class="flex justify-between items-center mb-8">
            <span class="font-medium">${obj.title}</span>
        </div>

        <!-- Progress bar -->
        <div class="w-full bg-gray-300 rounded-full h-3">
            <div class="h-3 rounded-full bg-orange-400" style="width: ${percentualProgress}%"></div>
        </div>

        <!-- Markers -->
        <div class="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
            <span>${obj.progress}</span>
            <span>${obj.goal}</span>
        </div>

        <!-- Reward button -->
        <button class="bg-orange-400 text-white p-3 rounded w-full max-w-md mx-auto block mt-8 hover:cursor-pointer hover:bg-orange-500 disabled:opacity-50 disabled:cursor-default" 
        ${obj.progress < obj.goal ? "disabled" : ""}>
            Resgatar - ${obj.points} pontos
        </button>
    `;
    
    container.appendChild(div);
});