/****** Swiper *****/

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  spaceBetween: 30,

  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4,
    }
  }

});