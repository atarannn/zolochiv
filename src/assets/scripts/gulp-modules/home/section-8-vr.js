const panoramaWrapper = document.querySelector('[data-panorama-wrapper]');
const panoramaOverlay = document.querySelector('[data-panorama-faq]');

if (document.documentElement.clientWidth > 1023) {
  panoramaWrapper.addEventListener('click', () => {
    panoramaOverlay.classList.add('active');
  });

  panoramaWrapper.addEventListener('mouseleave', () => {
    panoramaOverlay.classList.remove('active');
  });

} else {
  panoramaWrapper.addEventListener('click', () => {
    panoramaOverlay.classList.add('active');
  });
}
