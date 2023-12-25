const sliderSection7 = new Swiper('.solution-section-8-swiper', {
  loop: false,
  navigation: {
    nextEl: document.querySelector('[data-next-btn-section-8]'),
    prevEl: document.querySelector('[data-prev-btn-section-8]'),
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  preloadImages: false,
  lazy: true,
  speed: 1000,
  autoplay: false,
  watchSlidesVisibility: true,
});
