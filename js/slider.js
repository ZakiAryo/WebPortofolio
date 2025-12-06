document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-slider .slide');
  const navButtons = document.querySelectorAll('.hero-slider .slider-nav button');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      navButtons[i].classList.toggle('active', i === index);
    });
    currentIndex = index;

    // Hentikan interval lama jika ada
    if (slideInterval) clearInterval(slideInterval);

    // Jika slide adalah video, tunggu sampai video selesai
    const video = slides[index].querySelector('video');
    if (video) {
      video.currentTime = 0;
      video.play();
      video.addEventListener('ended', nextSlide, { once: true });
    } else {
      // Slide gambar otomatis pindah setelah 5 detik
      slideInterval = setInterval(nextSlide, 5000);
    }
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showSlide(index);
    });
  });

  showSlide(currentIndex);
});
