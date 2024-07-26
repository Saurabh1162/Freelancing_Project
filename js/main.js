$(document).ready(function () {
  // Swiper initialization
  var swiper = new Swiper('.swiper-container', {
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      loop: true
  });

  // Inview.js
  $('.header').on('inview', function(event, isInView) {
      if (isInView) {
          $(this).addClass('is-visible');
      } else {
          $(this).removeClass('is-visible');
      }
  });

  // Sticky Sidebar
  var sidebar = new StickySidebar('.main__wrapper', {
      topSpacing: 20,
      bottomSpacing: 20,
      containerSelector: '.main',
      innerWrapperSelector: '.main__wrapper'
  });

  // Handling web-services active item
  $('.web-services__item').on('click', function () {
      $('.web-services__item').removeClass('web-services__item--active');
      $(this).addClass('web-services__item--active');
  });
});
