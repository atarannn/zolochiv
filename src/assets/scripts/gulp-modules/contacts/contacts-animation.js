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

$(document).ready(function() {
  $.Tween.propHooks.number = {
    get(tween) {
      const num = tween.elem.innerHTML.replace(/^[^\d-]+/, ' ');
      return parseFloat(num) || 0;
    },

    set(tween) {
      const opts = tween.options;
      let changedData = tween.now
        .toFixed(0)
        .toString()
        .split('');
      changedData.splice(0, 0, ' ');
      changedData = changedData.join('');
      tween.elem.innerHTML =
        changedData;
    },
  };
  addIntersectionOnceWithCallback($('#num-1')[0], () => {
    $('#num-1')
      .delay(200)
      .animate(
        { number: 12 },
        {duration: 2000},
      );
  });
  addIntersectionOnceWithCallback($('#num-2')[0], () => {
    $('#num-2')
      .delay(200)
      .animate(
        { number: 8 },
        {duration: 2000},
      );
  });
  addIntersectionOnceWithCallback($('#num-3')[0], () => {
    $('#num-3')
      .delay(200)
      .animate(
        {number: 20 },
        {duration: 2000,},
      );
  });
  addIntersectionOnceWithCallback($('#num-4')[0], () => {
    $('#num-4')
      .delay(200)
      .animate(
        {number: 2 },
        {duration: 2000,},
      );
  });
});

function addIntersectionOnceWithCallback(el, cb = () => {}) {
  const num = el;
  const target = num;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cb();
        observer.unobserve(target);
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1,
  });
  observer.observe(target);
}
