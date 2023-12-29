function transformAnimation1(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    let tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: '.developer-section-1',
          start: '50% center',
          scrub: 2
        },
      })
      .fromTo(
        block,
        { yPercent: -50 },
        { yPercent: -30, duration: 1, ease: "power4.out" }
      );
  });
}
transformAnimation1('.developer-section-1-item .decor');
