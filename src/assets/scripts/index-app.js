import i18next from 'i18next';
import $ from "jquery";
import gsap from 'gsap';
import axios from 'axios';
import * as yup from 'yup';
import Headroom from "headroom.js";
import "current-device";
import { lenis } from './modules/scroll/leniscroll';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TweenMax, TimelineMax } from 'gsap/gsap-core';

const scroller = lenis;

global.TweenMax = TweenMax;
global.TimelineMax = TimelineMax;
global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);
global.axios = axios;

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

var headroom  = new Headroom(document.querySelector('body'));
headroom.init()

if (document.documentElement.clientWidth > 1024) {
  document.onscroll = function () {
    scrollFunction();
  };
}

function scrollFunction() {
  const header = document.querySelector('header');

  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.add('not-top');
  } else {
    header.classList.remove('not-top');
  }
}

function menuOpen(menu) {
  menuOpenAnim();

  function transformAnimationMenu1(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
          },
        })
        .fromTo(
          block,
          { xPercent: -120, },
          { xPercent: 0, duration: 2, ease: "power4.out" }
        );
    });
  }
  transformAnimationMenu1('.menu .decor-1');

  function transformAnimationMenu2(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
          },
        })
        .fromTo(
          block,
          { xPercent: 120, },
          { xPercent: 0, duration: 2, ease: "power4.out" }
        );
    });
  }
  transformAnimationMenu2('.menu .decor-2');

  if (document.querySelector('header').classList.contains('not-top')) {
    menu.classList.add('not-top');
  } else {
    menu.classList.remove('not-top');
  }
}

function menuClose() {
  menuCloseAnim();
}

function menuOpenAnim() {
  const menu = document.querySelector('[data-menu]');
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(menu, {autoAlpha: 0},
    {autoAlpha: 1,  ease: 'power4.easeInOut', duration: 0.2 }, '<');
  tl.play();

  document.querySelector('body').style.overflow = 'hidden';

  const createAnimation = (links, delay = 0) => {
    links.forEach((link, i) => {
      gsap.from(link, {
        delay: delay + i / 7,
        opacity: 0,
      });
    });
  };
  const links = document.querySelectorAll('[data-animation]');
  createAnimation(links, 0.3);
}

function menuCloseAnim() {
  const menu = document.querySelector('[data-menu]');
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(menu, {autoAlpha: 1},
    { ease: 'power4.easeInOut', duration: 0.2, autoAlpha: 0 }, '<');
  tl.play();

  document.querySelector('body').style.overflow = 'auto';
}

function menuInit() {
  const menu = document.querySelector('[data-menu]');
  document.querySelector('[data-open-menu]').addEventListener('click', () => menuOpen(menu));
  document.querySelector('[data-close-menu]').addEventListener('click', () => menuClose(menu));
}

menuInit();

function formOpen(form) {
  formOpenAnim();
  document.querySelector('body').style.overflow = 'hidden';
}

function formClose(form) {
  formCloseAnim();
  document.querySelector('body').style.overflow = 'auto';
}

function formOpenAnim(evt, reverseArg) {
  const form = document.querySelector('[data-form-popup-wrapper]');
  const formInner = document.querySelector('.popup-form');
  const tl = gsap.timeline({ paused: true });
  tl.add(() => {
    form.classList.add('active');
  });
  tl.fromTo(form, {autoAlpha: 0},
    {autoAlpha: 1,  ease: 'power4.easeInOut', duration: 0.4, clearProps: 'all' }, '<');
  tl.fromTo(formInner, {xPercent: 150},
    {xPercent: 0,  ease: 'power4.easeInOut', duration: 0.4, clearProps: 'all' });
  tl.play();
}

function formCloseAnim(evt, reverseArg) {
  const form = document.querySelector('[data-form-popup-wrapper]');
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(form, {autoAlpha: 1},
    { autoAlpha: 0, ease: 'power4.easeInOut', duration: 0.2 }, '<');
  tl.add(() => {
    form.classList.remove('active');
  });
  tl.play();
}

function formInit() {
  const form = document.querySelector('[data-form-popup-wrapper]');

  document.querySelectorAll('[data-call-form]').forEach(btn => {
    btn.addEventListener('click', () => {
      formOpen(form);
    });
  });

  document.querySelectorAll('[data-close-form]').forEach(btn => {
    btn.addEventListener('click', () => {
      formClose(form);
    });
  });
}

formInit();

$(function() {
  $('.btn-up__wrapper').click(function() {
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})

function transformAnimationFooter(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '100% bottom',
            end: '0% bottom',
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: 120, },
          { xPercent: 0, duration: 2, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '50% bottom',
            end: '0% bottom',
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: 120, },
          { xPercent: 0, duration: 2, ease: "power4.out" }
        );
    }
  });
}
transformAnimationFooter('.footer .decor');


const formLocation = [
  '[data-home-form-location]'
];

const formQuestions = [
  '[data-home-form-questions]'
];

const formContacts = [
  '[data-home-form-contacts]'
];

const contacts = [
  '[data-contacts-form]'
];

const formPopup = [
  '[data-form-popup]'
];

const formFlat = [
  '[data-form-flat]'
];

formLocation.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function callThanksPopup(callSelector, contentToOpenSelector, closeSelector) {
            const submitBtn = document.querySelectorAll(callSelector);
            const content = document.querySelector(contentToOpenSelector);
            const close = document.querySelectorAll(closeSelector);

            submitBtn.forEach(elem => {
              content.classList.add('active');
            });

            close.forEach(elem => {
              elem.addEventListener('click', () => {
                content.classList.remove('active');
              });
            });
          }
          callThanksPopup('[data-btn-submit]','[data-thanks]','[data-close-thanks]');
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, i18next.t('onlyletters')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          }
        },
      },
    });

    $form.querySelectorAll('.js-mask-absolute').forEach(el => {
      el.addEventListener('click', () => {
        $form.querySelector('[name="phone"]').focus();
        $form.querySelector('.js-mask-absolute').style.display = 'none';
      }, false);
    })
  }
});

formQuestions.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function callThanksPopup2(callSelector, contentToOpenSelector, closeSelector) {
            const submitBtn = document.querySelectorAll(callSelector);
            const content = document.querySelector(contentToOpenSelector);
            const close = document.querySelectorAll(closeSelector);

            submitBtn.forEach(elem => {
              content.classList.add('active');
            });

            close.forEach(elem => {
              elem.addEventListener('click', () => {
                content.classList.remove('active');
              });
            });
          }
          callThanksPopup2('[data-btn-submit]','[data-thanks]','[data-close-thanks]');
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, i18next.t('onlyletters')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          }
        },
      },
    });

    $form.querySelectorAll('.js-mask-absolute').forEach(el => {
      el.addEventListener('click', () => {
        $form.querySelector('[name="phone"]').focus();
        $form.querySelector('.js-mask-absolute').style.display = 'none';
      }, false);
    })
  }
});

formContacts.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function callThanksPopup3(callSelector, contentToOpenSelector, closeSelector) {
            const submitBtn = document.querySelectorAll(callSelector);
            const content = document.querySelector(contentToOpenSelector);
            const close = document.querySelectorAll(closeSelector);

            submitBtn.forEach(elem => {
              content.classList.add('active');
            });

            close.forEach(elem => {
              elem.addEventListener('click', () => {
                content.classList.remove('active');
              });
            });
          }
          callThanksPopup3('[data-btn-submit]','[data-thanks]','[data-close-thanks]');
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, i18next.t('onlyletters')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          }
        },
      },
    });

    $form.querySelectorAll('.js-mask-absolute').forEach(el => {
      el.addEventListener('click', () => {
        $form.querySelector('[name="phone"]').focus();
        $form.querySelector('.js-mask-absolute').style.display = 'none';
      }, false);
    })
  }
});

contacts.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function callThanksPopup4(callSelector, contentToOpenSelector, closeSelector) {
            const submitBtn = document.querySelectorAll(callSelector);
            const content = document.querySelector(contentToOpenSelector);
            const close = document.querySelectorAll(closeSelector);

            submitBtn.forEach(elem => {
              content.classList.add('active');
            });

            close.forEach(elem => {
              elem.addEventListener('click', () => {
                content.classList.remove('active');
              });
            });
          }
          callThanksPopup4('[data-btn-submit]','[data-thanks]','[data-close-thanks]');
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, i18next.t('onlyletters')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          }
        },
      },
    });

    $form.querySelectorAll('.js-mask-absolute').forEach(el => {
      el.addEventListener('click', () => {
        $form.querySelector('[name="phone"]').focus();
        $form.querySelector('.js-mask-absolute').style.display = 'none';
      }, false);
    })
  }
});

formPopup.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function callThanksPopup(callSelector, contentToOpenSelector, closeSelector) {
            const submitBtn = document.querySelectorAll(callSelector);
            const callContent = document.querySelector('[data-form-popup]');
            const content = document.querySelector(contentToOpenSelector);
            const close = document.querySelectorAll(closeSelector);

            submitBtn.forEach(elem => {
              content.classList.add('active');
              callContent.classList.add('not-active');
            });

            close.forEach(elem => {
              elem.addEventListener('click', () => {
                content.classList.remove('active');
                callContent.classList.remove('not-active');
              });
            });
          }
          callThanksPopup('[data-form-popup] [data-btn-submit]','[data-thanks-block]','[data-close-form]');
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, i18next.t('onlyletters')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          }
        },
      },
    });

    $form.querySelectorAll('.js-mask-absolute').forEach(el => {
      el.addEventListener('click', () => {
        $form.querySelector('[name="phone"]').focus();
        $form.querySelector('.js-mask-absolute').style.display = 'none';
      }, false);
    })
  }
});

formFlat.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function callThanksPopup(callSelector, contentToOpenSelector, closeSelector) {
            const submitBtn = document.querySelectorAll(callSelector);
            const callContent = document.querySelector('[data-form-flat]');
            const content = document.querySelector(contentToOpenSelector);
            const close = document.querySelectorAll(closeSelector);

            submitBtn.forEach(elem => {
              content.classList.add('active');
              callContent.classList.add('not-active');
            });

            close.forEach(elem => {
              elem.addEventListener('click', () => {
                content.classList.remove('active');
                callContent.classList.remove('not-active');
              });
            });
          }
          callThanksPopup('[data-form-flat] [data-btn-submit]','[data-flat-thanks-block]','[data-close-form-flat]');
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, i18next.t('onlyletters')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          }
        },
      },
    });

    $form.querySelectorAll('.js-mask-absolute').forEach(el => {
      el.addEventListener('click', () => {
        $form.querySelector('[name="phone"]').focus();
        $form.querySelector('.js-mask-absolute').style.display = 'none';
      }, false);
    })
  }
});
