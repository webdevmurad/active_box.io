let slideIndex = 2,
    slides = document.querySelectorAll('.slider-blocks'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 2;
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        slides.forEach((item) => item.style.display = 'none');

        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'flex';
        dots[slideIndex - 1].classList.add('dot-active');
    }
    showSlides(slideIndex);

    function currentSlide (n) {
        showSlides(slideIndex = n);
    }

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
