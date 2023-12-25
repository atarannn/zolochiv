function transformAnimation1(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    let tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: '.solution-section-1',
          start: '80% center',
          scrub: 2,
        },
      })
      .fromTo(
        block,
        { yPercent: -120, },
        { yPercent: 0, duration: 1, ease: "power4.out" }
      );
  });
}
transformAnimation1('.solution-section-1 .decor-1');

function transformAnimation2(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    let tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: block,
          start: '50% bottom',
          end: '100% bottom',
          scrub: 4,
        },
      })
      .fromTo(
        block,
        { xPercent: -120, },
        { xPercent: 0, duration: 1, ease: "power4.out" }
      );
  });
}
transformAnimation2('.solution-section-7__item .decor');
