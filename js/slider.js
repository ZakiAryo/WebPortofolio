// Simple hero banner photo slider

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-slider .slide');
  const navButtons = document.querySelectorAll('.hero-slider .slider-nav button');
  let currentIndex = 0;
  let slideInterval = setInterval(nextSlide, 5000);

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      navButtons[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(index);
      slideInterval = setInterval(nextSlide, 5000);
    });
  });

  showSlide(currentIndex);
});
