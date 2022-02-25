const swiper = new Swiper('.swiper', {
  loop: true,
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  },

});