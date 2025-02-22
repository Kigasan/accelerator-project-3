function init (Swiper, Navigation) {
  const swiper = new Swiper('.reviews__slider', {
    modules: [Navigation],
    keyboard: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
      disabledClass: 'reviews-slider__button--disabled'
    },
    scrollbar: {
      el: '.reviews-slider__scrollbar',
      draggable: true,
    }
  });
}

export { init as ReviewsSliderInit }
