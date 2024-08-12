// Desktop
const dropdown = document.querySelector("li.drop");
const dropdownArrow = document.querySelector("li.drop > i");

dropdown.addEventListener("mouseover", (e) => {
  dropdownArrow.classList.toggle("rotate_180");
});

// Tablet
const btnBars = document.querySelector(".headerCenter button.bars i");
const btnClose = document.querySelector(".headerCenter button.bars i.fa-xmark");
const tabletMenu = document.querySelector(".header .tabletMenu");
const mobileMenu = document.querySelector("section.header .mobileMenu");
const dropdownLink = document.querySelector(".tabletMenu ul > li.dropdownLink");
const dropdownBody = document.querySelector(".tabletMenu .dropdownBody");

btnBars.addEventListener("click", (e) => {
  btnBars.classList.toggle("fa-xmark");
  tabletMenu.style.display = "block";

  if (!btnBars.classList.contains("fa-xmark")) {
    tabletMenu.style.display = "none";
  } else {
    tabletMenu.style.display = "block";
  }

  e.preventDefault();
});

// btnClose.addEventListener("click", (e) => {
//   tabletMenu.style.display = "none";
//   console.log("+++");
//   if (window.screen.width > 767 && window.screen.width <= 1023) {
//     tabletMenu.style.display = "none";
//   } else {
//     mobileMenu.style.display = "none";
//   }

//   e.preventDefault();
// });

dropdownLink.addEventListener("click", (e) => {
  dropdownLink.querySelector("i").classList.toggle("active");
  dropdownBody.classList.toggle("active");
});

//  Mobile
// const mobileHead = document.querySelector(".mobileMenu .mobileHead");
// const mobileHeadIcon = document.querySelector(".mobileMenu .mobileHead i");
// const mobileBody = document.querySelector(".mobileMenu .mobileBody");
// const mobileNav = document.querySelectorAll(".mobileMenu .mobileNav");
// mobileHead.addEventListener("click", (e) => {
//   mobileHead.querySelector(".mobileLink").classList.toggle("selected");
//   mobileHeadIcon.classList.toggle("rotate_180");
//   mobileBody.classList.toggle("active");

//   e.preventDefault();
// });
