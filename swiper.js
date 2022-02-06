const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // color: purple,
    
  },
  

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

  breakpoints: {
      1100: {
          slidesPerView: 3,
        //   slidesPerGroup: 3,
        //   allowSlideNext: false,
        //   allowSlidePrev: false
      },

      800: {
          slidesPerView: 2,
        //   slidesPerGroup: 3,
        //   allowSlideNext: false,
        //   allowSlidePrev: false
      }
  }

});
