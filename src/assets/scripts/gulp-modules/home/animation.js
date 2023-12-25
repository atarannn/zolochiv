import $ from "jquery";

function transformAnimation1(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: '.home-section-2__map',
            start: '-100% top',
            end: '0% top',
            scrub: 2,
          },
        })
        .fromTo(
          block,
          { xPercent: -120, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
  });
}
transformAnimation1('.home-section-2__map .decor-top-left, .home-section-2__map .decor-bottom-left');

function transformAnimation2(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: '.home-section-2__map',
            start: '-100% top',
            end: '0% top',
            scrub: 2,
          },
        })
        .fromTo(
          block,
          { xPercent: 120, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
  });
}
transformAnimation2('.home-section-2__map .decor-top-1-right, .home-section-2__map .decor-top-2-right, .home-section-2__map .decor-bottom-right');

function transformAnimation3(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: '.home-section-2__map',
            start: '20% bottom',
            end: '50% bottom',
            scrub: 2,
          },
        })
        .fromTo(
          block,
          { yPercent: -120, xPercent: -50 },
          { yPercent: 0, xPercent: -50, duration: 1, ease: "power4.out" }
        );
  });
}
transformAnimation3('.home-section-2__map .decor-mobile');

function transformAnimationForm1(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '100% bottom',
            end: '200% bottom',
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -120, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
  });
}
transformAnimationForm1('.home-section-6 .decor-2, .home-section-6 .decor-3');

function transformAnimationForm2(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    let tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: block,
          start: '100% bottom',
          end: '200% bottom',
          scrub: 5,
        },
      })
      .fromTo(
        block,
        { xPercent: 120, },
        { xPercent: 0, duration: 1, ease: "power4.out" }
      );
  });
}
transformAnimationForm2('.home-section-6 .decor-4, .home-section-6 .decor-5');

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

function paralaxesScreens() {
  document.querySelectorAll('.img__wrapper').forEach(el => {
      if (document.documentElement.clientWidth > 1023) {
        gsap.timeline({
          defaults: {
            force3D: true,
            ease: 'none'
          },
          scrollTrigger: {
            trigger: el,
            scrub: 1,
          }

        })
          .fromTo(el.querySelector('.img__scale'), {
            y: -200,
          }, {
            y: 200,
          })
          .fromTo(el.querySelector('.img'), {
            scale: 1.2
          }, {
            scale: 1
          }, '<');
      } else {
        gsap.timeline({
          defaults: {
            force3D: true,
            ease: 'none'
          },
          scrollTrigger: {
            trigger: el,
            scrub: 1,
          }

        })
          .fromTo(el.querySelector('.img__scale'), {
            y: -100,
          }, {
            y: 100,
          })
          .fromTo(el.querySelector('.img'), {
            scale: 1.1
          }, {
            scale: 1
          }, '<');
      }
  })
}
paralaxesScreens();

const mainVideo = document.querySelector('[videoForHomePage]');

// Почати відтворення відео після завантаження сторінки
window.addEventListener('click', () => {
  mainVideo.play();
});
