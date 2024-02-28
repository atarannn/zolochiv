import $ from 'jquery';

function paralaxAnimationForImg1(selector, $scroller) {
  document.querySelectorAll(selector).forEach(img => {
    let tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: '.home-section-2__map',
          scrub: 2,
          start: '-70% top',
          end: '0% top',
        },
      })
      .fromTo(
        img,
        { xPercent: -120 },
        { xPercent: 0, duration: 1, ease: "power4.out" }
      );
  });
}
paralaxAnimationForImg1('.home-section-2__map .decor-bottom-left, .home-section-2__map .decor-top-left');

function paralaxAnimationForImg2(selector, $scroller) {
  document.querySelectorAll(selector).forEach(img => {
    let tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: '.home-section-2__map',
          scrub: 2,
          start: '-70% top',
          end: '0% top',
        },
      })
      .fromTo(
        img,
        { xPercent: 120 },
        { xPercent: 0, duration: 1, ease: "power4.out" }
      );
  });
}
paralaxAnimationForImg2('.home-section-2__map .decor-bottom-right, .home-section-2__map .decor-top-1-right, .home-section-2__map .decor-top-2-right');

function transformAnimation3(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth < 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: '.home-section-2__map',
            start: '50% bottom',
            end: '100% bottom',
            scrub: 2,
          },
        })
        .fromTo(
          block,
          { yPercent: -120, },
          { yPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transformAnimation3('.home-section-2__map .decor-mobile');

