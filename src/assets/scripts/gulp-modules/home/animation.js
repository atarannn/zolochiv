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
