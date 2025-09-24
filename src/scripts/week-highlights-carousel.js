const highlights = [
  {
    mobile: "../assets/images/highlights/highlight-1-sm.webp",
    desktop: "../assets/images/highlights/highlight-1.webp",
    alt: "Destaque da semana 1"
  },
  {
    mobile: "../assets/images/highlights/highlight-2-sm.webp",
    desktop: "../assets/images/highlights/highlight-2.webp",
    alt: "Destaque da semana 2"
  },
  {
    mobile: "../assets/images/highlights/highlight-3-sm.webp",
    desktop: "../assets/images/highlights/highlight-3.webp",
    alt: "Destaque da semana 3"
  }
];

const carousel = document.getElementById("carousel");
const dotsContainer = document.getElementById("dots");

// Renderiza slides
carousel.innerHTML = highlights.map(h => `
  <picture class="w-full h-full flex-shrink-0">
    <source srcset="${h.desktop}" media="(min-width: 768px)">
    <img src="${h.mobile}" class="w-full h-full object-cover" alt="${h.alt}">
  </picture>
`).join("");

// Renderiza dots
dotsContainer.innerHTML = highlights.map((_, i) => `
  <button class="w-4 h-4 rounded-full bg-gray-800 border-2 border-white opacity-50" onclick="goToSlide(${i})"></button>
`).join("");

// Variáveis de controle
let index = 0;
const total = highlights.length;
const dots = dotsContainer.children;

function updateCarousel() {
  carousel.style.transform = `translateX(${-index * 100}%)`;

  // Atualiza bolinhas
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("opacity-100");
    dots[i].classList.add("opacity-50");
  }
  dots[index].classList.remove("opacity-50");
  dots[index].classList.add("opacity-100");
}

function goToSlide(n) {
  index = n;
  updateCarousel();
}

function nextSlide() {
  index = (index + 1) % total;
  updateCarousel();
}

// Troca automática a cada 5s
setInterval(nextSlide, 5000);

// Inicia mostrando o primeiro ativo
updateCarousel();