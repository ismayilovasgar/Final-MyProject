var swiper = new Swiper(".myswiper", {
  //
  loop: "true",
  loopFillGroupWithBlank: true,
  slidesPreview: 3,
  slidesGroup: 3,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  //
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
