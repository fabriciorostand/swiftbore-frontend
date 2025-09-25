function generateRanking(storesCount = 10) {
    let stores = [];

    for (let i = 1; i <= storesCount; i++) {
            const name = i === 5 ? "Swift São Paulo - FIAP" : `Swift São Paulo - Store ${i}`;
            stores.push({
                name,
                city: "São Paulo",
                points: Math.floor(Math.random() * 10000) + 100
            });
    }

    // Sort stores by points descending
    stores.sort((a, b) => b.points - a.points);

    // Add rank and top 3 highlight
    stores = stores.map((s, index) => ({
        ...s,
        rank: index + 1,
        rewarded: index < 3
    }));

    return stores;
}

function renderRanking(stores) {
    const mainContent = document.querySelector("main");
    if (!mainContent) return;

    // Create a container div for the table
    const tableContainer = document.createElement("div");
    tableContainer.className = "max-w-6xl mx-auto mt-4 px-4";

    // Create table
    const table = document.createElement("table");
    table.className = "w-full bg-white rounded-2xl shadow overflow-hidden border border-gray-200";

    // Table header
    const thead = document.createElement("thead");
    thead.className = "bg-gray-100 text-gray-700";
    thead.innerHTML = `
        <tr>
            <th class="px-4 py-4 text-center">Posição</th>
            <th class="px-4 py-4 text-center">Loja</th>
            <th class="px-4 py-4 text-center">Pontos</th>
        </tr>
    `;
    table.appendChild(thead);

    // Table body
    const tbody = document.createElement("tbody");

    stores.forEach((store) => {
        let rankStyle = "";

        if (store.rank === 1) {
            rankStyle = "text-yellow-500 font-extrabold";
        } else if (store.rank === 2) {
            rankStyle = "text-gray-500 font-bold";
        } else if (store.rank === 3) {
            rankStyle = "text-orange-500 font-bold";
        } else {
            rankStyle = "text-gray-700";
        }

        const isUserStore = store.name.includes("FIAP");
        const userHighlight = isUserStore
            ? "bg-orange-100 border-l-4 border-orange-500"
            : "";

        const tr = document.createElement("tr");
        tr.className = `hover:bg-gray-50 transition ${userHighlight}`;

        tr.innerHTML = `
            <td class="px-4 py-4 text-center ${rankStyle}">${store.rank}º</td>
            <td class="px-4 py-4 text-center font-medium ${isUserStore ? "text-orange-600" : "text-gray-800"}">
                ${store.name}
            </td>
            <td class="px-4 py-4 text-center font-semibold ${isUserStore ? "text-orange-600" : "text-gray-600"}">
                ${store.points} pts
            </td>
        `;

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);

    // **Insert the table container before the section**
    const rankingSection = mainContent.querySelector("section");
    if (rankingSection) {
        mainContent.insertBefore(tableContainer, rankingSection);
    } else {
        mainContent.appendChild(tableContainer);
    }
}


// Generate ranking and render after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const rankingSP = generateRanking();
    renderRanking(rankingSP);
});