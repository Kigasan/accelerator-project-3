function init (Swiper, Navigation) {
  const swiper = new Swiper('.slider-programs', {
    modules: [Navigation],
    keyboard: true,
    // spaceBetween: 15,
    // cssMode: true,
    // allowTouchMove: true,

    breakpoints: {
      1440: {
        cssMode: false,
        allowTouchMove: false
      },
    },

    navigation: {
      nextEl: '.slider-programs__button--next',
      prevEl: '.slider-programs__button--prev',
      disabledClass: 'slider-programs__button--disabled'
    },
    scrollbar: {
      el: '.slider-programs__scrollbar',
      draggable: true,
    },

  });
}

export { init as ProgramsSliderInit }
