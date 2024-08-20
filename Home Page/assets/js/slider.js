// var swiper = new Swiper(".myswiper", {
//   //
//   loop: "true",
//   loopFillGroupWithBlank: true,
//   slidesPreview: 3,
//   slidesGroup: 3,
//   centerSlide: "true",
//   fade: "true",
//   grabCursor: "true",
//   //
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var swiper = new Swiper(".clients_swiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: "fraction",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

// var swiper = new Swiper(".steps_swiper", {
//   slidesPerView: 3,
//   spaceBetween: 0,

//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".steps_next_btn",
//     prevEl: ".steps_prev_btn",
//   },
// });

var swiper = new Swiper(".review-swiper-content", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".previoustBtn",
    prevEl: ".nextBtn",
  },
});
