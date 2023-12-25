const sliderSection3 = new Swiper('.home-section-3-swiper', {
  loop: true,
  navigation: {
    nextEl: document.querySelector('[data-next-btn-section-3]'),
    prevEl: document.querySelector('[data-prev-btn-section-3]'),
  },
  preloadImages: false,
  lazy: true,
  speed: 1000,
  autoplay: false,
  watchSlidesVisibility: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 20,
  breakpoints: {
    1600: {
      spaceBetween: 250
    },
    1360: {
      spaceBetween: 200
    },
  }
});

const currentSlideShow = [
  document.querySelector('[data-first-digit]'),
  document.querySelector('[data-second-digit]'),
];
currentSlideShow[0].textContent = 0;
currentSlideShow[1].textContent = sliderSection3.realIndex + 1;
var totalSlides = document.querySelectorAll('.home-section-3-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
var totalSlidesText = totalSlides < 10 ? '0' + totalSlides : totalSlides;

document.querySelector('[data-total]').textContent = totalSlidesText;

sliderSection3.on('activeIndexChange', (self) => {
  const splitedIndex = (self.realIndex + 1).toString().split('');
  const firstDigit = splitedIndex.length > 1 ? splitedIndex[0] : 0;
  const secondDigit = splitedIndex.length > 1 ? splitedIndex[1] : splitedIndex[0];

  gsap.timeline()
    .fromTo(currentSlideShow[1], { yPercent: 0 }, { yPercent: -100 })
    .fromTo(currentSlideShow[0], { yPercent: 0 }, { yPercent: -100 }, '<')
    .add(() => {
      currentSlideShow[0].textContent = firstDigit;
      currentSlideShow[1].textContent = secondDigit;
    })
    .fromTo(currentSlideShow[1], { yPercent: 100 }, { yPercent: 0 })
    .fromTo(currentSlideShow[0], { yPercent: 100 }, { yPercent: 0 }, '<');

});



