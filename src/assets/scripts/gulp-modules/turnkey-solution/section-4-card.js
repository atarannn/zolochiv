gsap.timeline({scrollTrigger :{
    trigger: '.solution-section-4__info',
    scrub: true
  }})
  .to('.solution-section-4__info__card', {
    scale: (e) => {
      return gsap.utils.mapRange(0, document.querySelectorAll('.solution-section-4__info__card').length - 1, 0.9, 1, e);
      return 0.7;
    },
    stagger: 1 / document.querySelectorAll('.solution-section-4__info__card').length,
  })
