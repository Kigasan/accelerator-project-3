function paginationBulletsPosition () {
  const activeSlide = document.querySelector('.swiper-slide-active');
  const sliderPagination = document.querySelector('.swiper-pagination');
  const sliderContent = activeSlide.querySelector('.slider__content');
  sliderPagination.style.bottom = `${sliderContent.offsetHeight}px`;
}

function init (Swiper, Pagination) {
  const swiper = new Swiper('.slider', {
    modules: [Pagination],
    loop: true,
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // },
    breakpoints: {
      1440: {
        allowTouchMove: false
      },
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className} slider__nav-button swiper-pagination-bullet swiper-pagination-clickable swiper-pagination-bullet--${index + 1}"
        aria-label="перейти к слайду ${index + 1}"
        role="button">
        </span>`
      }
    },
    on: {
      init: paginationBulletsPosition,
      slideChange: paginationBulletsPosition,
      slideChangeTransitionEnd: paginationBulletsPosition,
      slidesUpdated: paginationBulletsPosition,

    }
  });
}

export { init as SliderInit }
