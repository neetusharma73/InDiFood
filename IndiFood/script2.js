    const wrapper = document.querySelector('.carousel-wrapper');
    const dots = document.querySelectorAll('.carousel-dot');

    let currentIndex = 0;

    function updateCarousel() {
        const newTransformValue = -currentIndex * 100 + '%';
        wrapper.style.transform = 'translateX(' + newTransformValue + ')';
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            updateDots();
        });
    });

    function nextSlide() {
        currentIndex = (currentIndex + 1) % dots.length;
        updateCarousel();
        updateDots();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        updateCarousel();
        updateDots();
    }

    setInterval(nextSlide, 3000); // Auto slide every 3 seconds

    