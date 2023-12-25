function handleButtonClick(section) {
  const scrollY = document.querySelector('.home-section-1').getBoundingClientRect().height;
  window.scrollTo({
    top: scrollY,
    behavior: 'smooth'
  })
}

function scrollAnimation() {
  var section = document.getElementById("section-2");

  document.querySelector('.home-section-1__btn-down').removeAttribute('href');
  document.body.addEventListener('click',function scroll(evt){
    const target = evt.target.closest('.home-section-1__btn-down');
    if (!target) return;
    evt.preventDefault();
    handleButtonClick(section);
  });
}

if (document.documentElement.clientWidth > 1024) {
  scrollAnimation();
}
