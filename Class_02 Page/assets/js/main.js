// Get the modal
const modal = document.getElementById("myModal");
const trainers = document.querySelectorAll(".trainers .listWrap a");
const closeBtn = document.querySelector(".modal .modalCloseBtn");

trainers.forEach((trainer) => {
  trainer.addEventListener("click", (e) => {
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// ! Swiper - 1
let swiper_programs = new Swiper(".programs_swiper", {
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".programs_next_btn",
    prevEl: ".programs_prev_btn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    700: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
