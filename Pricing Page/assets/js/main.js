const faq_item_head_all = document.querySelectorAll(".faqItem");

faq_item_head_all.forEach((item) => {
  item.addEventListener("click", (e) => {
    // rotate icon
    item
      .querySelector(".faqItemHead i.fa-angle-down")
      .classList.toggle("rotate");

    //  show body
    item.querySelector(".faqItemBody").classList.toggle("active");
  });
});
// ------------------------------
// Desktop
const dropdown = document.querySelector("li.drop");
const dropdownArrow = document.querySelector("li.drop > i");

dropdown.addEventListener("mouseover", (e) => {
  dropdownArrow.classList.toggle("rotate_180");
});

// Bars Menu
const btnHidden = document.querySelector("button.hidden i");
const tabletMenu = document.querySelector(".tabletMenu");
const dropdownMenu = document.querySelector(".dropdownBody");
const dropdownBtn = document.querySelector(".dropdownLink");

btnHidden.addEventListener("click", (e) => {
  btnHidden.classList.toggle("fa-xmark");
  tabletMenu.classList.toggle("show");
});
dropdownBtn.addEventListener("click", (e) => {
  dropdownMenu.classList.toggle("active");
});
//! Sorting Select Catagory
const select_sorting = document.querySelectorAll(".sorting");
let sorting_list_items = "";
select_sorting.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.querySelector("i").classList.toggle("changeDirection");
    item.classList.toggle("focus");
    item.querySelector("ul.list").classList.toggle("show");
    sorting_list_items = item.querySelectorAll("ul li");
    sorting_list_items.forEach((list_item) => {
      list_item.addEventListener("click", (e) => {
        item.querySelector("input.current").value = list_item.textContent;
      });
    });
  });
});

//! Table Show/Hidden List
const seeAllFeatures = document.querySelectorAll(".pricingCol .pricingMore");

seeAllFeatures.forEach((element) => {
  element.addEventListener("click", (e) => {
    // rotate arrow direction
    element.querySelector("i").classList.toggle("rotate");
    // choosen list that click
    const pricingList = element.nextElementSibling;
    pricingList.classList.toggle("active");
  });
});
//! Swiper Cards
var swiper = new Swiper(".comment_swiper", {
  slidesPerView: 1,
  spaceBetween: 32,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".myswiper-button-next",
    prevEl: ".myswiper-button-prev",
  },

  breakpoints: {
    // 0: {
    //   slidesPerView: 1,
    //   spaceBetween: 16,
    // },

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

  // My Custom Configuration
  // autoplay: {
  //    delay: 1000,
  // },
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
  // effect: "cards",
  //
});

//! Swiper Buttons
var swiper = new Swiper(".testimonials-swiper", {
  slidesPerView: "4",
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  navigation: {
    // nextEl: ".myswiper-button-next",
    // prevEl: ".myswiper-button-prev",
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
