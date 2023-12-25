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
