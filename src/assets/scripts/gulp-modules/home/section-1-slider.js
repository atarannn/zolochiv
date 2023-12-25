const sliderSection1 = new Swiper('.home-section-1-swiper', {
  loop: true,
  navigation: {
    nextEl: document.querySelector('[data-next-btn-section-1]'),
    prevEl: document.querySelector('[data-prev-btn-section-1]'),
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
