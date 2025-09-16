// Carousel
let index = 0;
    const carousel = document.getElementById("carousel");
    const total = carousel.children.length;
    const dots = document.getElementById("dots").children;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-index * 100}%)`;
        // Atualiza as bolinhas
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

    // Inicia na primeira bolinha ativa
    updateCarousel();