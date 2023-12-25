function handleButtonClick2(section) {
  const scrollY = section.getBoundingClientRect().top + window.scrollY; // Знайдіть вертикальну позицію відносно поточного розташування прокрутки.
  window.scrollTo({
    top: scrollY,
    behavior: 'smooth'
  });
}

function scrollAnimation2() {
  const section = document.getElementById("section-5");

  document.querySelector('.home-section-4__btn-down').removeAttribute('href');
  document.body.addEventListener('click', function scroll(evt) {
    const target = evt.target.closest('.home-section-4__btn-down');
    if (!target) return;
    evt.preventDefault();
    handleButtonClick2(section);
  });
}

scrollAnimation2();
