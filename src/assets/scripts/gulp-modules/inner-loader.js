window.onload = function () {
  window.setTimeout(() => {
    document.body.classList.add('loading');

    const header = document.querySelector('header');
    const breadcrumbs = document.querySelector('.breadcrumbs-title .title-96');
    const breadcrumbsBottom = document.querySelector('.breadcrumbs-bottom');
    const lineTop = document.querySelector('.breadcrumbs-title .left');
    const lineBottom = document.querySelector('.breadcrumbs-title .right');
    const pageInner = document.querySelector('.content');

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(lineTop, {scaleX: 0, transformOrigin:"left"},
      {scaleX: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
    tl.fromTo(lineBottom, {scaleX: 0, transformOrigin:"right"},
      {scaleX: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
    tl.fromTo(header, {yPercent: -150 },
      {yPercent: 0, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
    tl.fromTo(breadcrumbs, {autoAlpha: 0, yPercent: 50 },
      {autoAlpha: 1, yPercent: 0, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
    tl.fromTo(breadcrumbsBottom, {autoAlpha: 0, yPercent: 100 },
      {autoAlpha: 1, yPercent: 0, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
    tl.fromTo(pageInner, {autoAlpha: 0},
      {autoAlpha: 1, ease: 'power4.easeInOut', duration: 1, delay: 1, clearProps: 'all' }, '<');

    tl.play();
  }, 500);
};
