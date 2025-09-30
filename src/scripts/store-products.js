// Products Array
const products = [
  {
    name: "EMPANADA DE CARNE SWIFT 240G",
    image: "../assets/images/store/empanada-de-carne.webp",
    points: 125
  },
  {
    name: "BATATA PALITO SWIFT 1,5KG",
    image: "../assets/images/store/batata-palito.webp",
    points: 250
  },
  {
    name: "PIZZA ARTESANAL DE MUSSARELA SWIFT 400G",
    image: "../assets/images/store/pizza-artesanal-de-mussarela.webp",
    points: 200
  },
  {
    name: "ISCAS DE FRANGO SWIFT 300G",
    image: "../assets/images/store/iscas-de-frango.webp",
    points: 150
  }
];

// Container
const container = document.getElementById("products-container");

// Render Products
products.forEach(product => {
  const card = `
    <div class="dark:bg-gray-800 border border-gray-200 dark:border-gray-500 rounded-xl shadow-md overflow-hidden bg-white flex flex-col">
      <div class="w-full h-48 overflow-hidden">
        <img class="w-full h-full object-cover" src="${product.image}" alt="${product.name}">
      </div>
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="font-semibold text-gray-800 dark:text-white text-lg mb-4">${product.name}</h3>
        <button class="mt-auto flex items-center justify-center gap-2 bg-orange-400 text-white py-3 rounded-lg hover:cursor-pointer hover:bg-orange-500 transition w-full">
          <img class="h-6 w-6" src="../assets/icons/points.png" alt="Ícone de pontos">
          <span class="font-semibold text-sm">${product.points}</span>
        </button>
      </div>
    </div>
  `;
  
  container.innerHTML += card;
});