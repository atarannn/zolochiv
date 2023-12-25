const sliderSection1 = new Swiper('.single-construction__swiper', {
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: document.querySelector('[data-next-btn-section]'),
    prevEl: document.querySelector('[data-prev-btn-section]'),
  },
  preloadImages: false,
  lazy: true,
  speed: 1000,
  autoplay: false,
  watchSlidesVisibility: true,
});

document.getElementById('back-btn').addEventListener('click', () => {
  history.back();
});

