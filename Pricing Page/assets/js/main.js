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

// Swiper Buttons
var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".myswiper-button-next",
    prevEl: ".myswiper-button-prev",
  },
});
