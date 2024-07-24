document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonials__slider');
    const slides = slider.querySelectorAll('.testimonials__slide');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });