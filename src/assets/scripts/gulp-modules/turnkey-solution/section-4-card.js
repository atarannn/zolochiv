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


if (document.documentElement.clientWidth < 1024) {
  const cardTrigger = document.querySelectorAll('.solution-section-3__info-item');

  function customAnimationAdd(element) {
    element.classList.add('mobile-hover');
  }

  function customAnimationRemove(element) {
    element.classList.remove('mobile-hover');
  }

  cardTrigger.forEach((trigger, index) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "0% center",
          end: "100% center",
          onEnter: () => {
            customAnimationAdd(trigger);
          },
          onEnterBack: () => {
            customAnimationAdd(trigger);
          },
          onLeave: () => {
            customAnimationRemove(trigger);
          },
          onLeaveBack: () => {
            customAnimationRemove(trigger);
          },
        },
      });
  });
}
