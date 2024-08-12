// Desktop
const headerHead = document.querySelector(".header .headerHead");
const headerBody = document.querySelector(" .headerBody");
const headerDropdownArrows = document.querySelectorAll(".headerHead i");

headerHead.addEventListener("click", (e) => {
  headerBody.classList.toggle("active");
  headerDropdownArrows.forEach((i) => {
    i.classList.toggle("active");
  });
});

// Tablet
const btnBars = document.querySelector(".headerCenter button.bars");
const btnClose = document.querySelector(".headerCenter button.close");
const tabletMenu = document.querySelector("section.header .tabletMenu");
const mobileMenu = document.querySelector("section.header .mobileMenu");
const dropdownLink = document.querySelector(".tabletMenu ul > li.dropdownLink");
const dropdownBody = document.querySelector(".tabletMenu .dropdownBody");
btnBars.addEventListener("click", (e) => {
  btnClose.style.display = "block";
  btnBars.style.display = "none";

  if (window.screen.width > 767 && window.screen.width <= 1023) {
    tabletMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "block";
  }

  e.preventDefault();
});

btnClose.addEventListener("click", (e) => {
  btnClose.style.display = "none";
  btnBars.style.display = "block";

  if (window.screen.width > 767 && window.screen.width <= 1023) {
    tabletMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "none";
  }

  e.preventDefault();
});

dropdownLink.addEventListener("click", (e) => {
  dropdownLink.querySelector("i").classList.toggle("rotate_180");
  dropdownBody.classList.toggle("active");
});

//  Mobile
const mobileHead = document.querySelector(".mobileMenu .mobileHead");
const mobileHeadIcon = document.querySelector(".mobileMenu .mobileHead i");
const mobileBody = document.querySelector(".mobileMenu .mobileBody");
const mobileNav = document.querySelectorAll(".mobileMenu .mobileNav");
mobileHead.addEventListener("click", (e) => {
  mobileHead.querySelector(".mobileLink").classList.toggle("selected");
  mobileHeadIcon.classList.toggle("rotate_180");
  mobileBody.classList.toggle("active");

  e.preventDefault();
});
