document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.device-showcase__slider');
  const items = slider.querySelectorAll('.device-showcase__item');
  const prevBtn = document.querySelector('.navigation__button--prev');
  const nextBtn = document.querySelector('.navigation__button--next');
  let currentIndex = 0;

  function updateSlider() {
    items.forEach((item, index) => {
      item.classList.remove('active');
      if (index === currentIndex) {
        item.classList.add('active');
        item.style.left = '50%';
        item.style.transform = 'translateX(-50%) scale(1)';
      } else if (index < currentIndex) {
        item.style.left = '0';
        item.style.transform = 'translateX(-100%) scale(0.8)';
      } else {
        item.style.left = '100%';
        item.style.transform = 'translateX(0) scale(0.8)';
      }
    });
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlider();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlider();
  }

  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Initialize the slider
  updateSlider();
});