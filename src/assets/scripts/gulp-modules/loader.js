window.onload = function () {
  window.setTimeout(() => {
    document.body.classList.add('home-loaded');

    const header = document.querySelector('header');
    const infoBlock = document.querySelector('.home-section-1__info');
    const infoBtn = document.querySelector('.home-section-1__btn-down');

    const titleBtn = document.querySelector('.home-section-1 .btn-style-2');

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(header, {yPercent: -150 },
      {yPercent: 0, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' });
    tl.fromTo(infoBlock, {yPercent: 150, autoAlpha: 0 },
      {yPercent: 0, autoAlpha: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
    tl.fromTo(infoBtn, {yPercent: 250, autoAlpha: 0 },
      {yPercent: 0, autoAlpha: 1, ease: 'power4.easeInOut', duration: 1, delay: .5, clearProps: 'all' }, '<');
    tl.fromTo(titleBtn, {yPercent: 150, autoAlpha: 0 },
      {yPercent: 0, autoAlpha: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');

    tl.play();

    function splitToLinesAndFadeUp3(selector, $scroller) {
      document.querySelectorAll(selector).forEach(text => {
        let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
        if (mathM === null) return;
        mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
        text.innerHTML = mathM.join(' ');

        let tl = gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              scroller: $scroller || document.body,
              trigger: text,
              once: true,
            },
          })
          .fromTo(
            text.querySelectorAll('span>span'),
            { yPercent: 100 },
            { yPercent: 0, delay: .5, stagger: 0.07, duration: 1, ease: "power4.out" }
          );
      });
    }
    splitToLinesAndFadeUp3('.home-section-1 .title-96, .home-section-1 .text-24-gold');


  }, 500);
};

