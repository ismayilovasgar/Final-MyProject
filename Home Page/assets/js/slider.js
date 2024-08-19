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

var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: "fraction",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

var swiper = new Swiper(".steps_swiper", {
  slidesPerView: 3,
  spaceBetween: 0,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".steps_next_btn",
    prevEl: ".steps_prev_btn",
  },
});
