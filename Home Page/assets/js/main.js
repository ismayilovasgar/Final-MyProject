const barsBtn = document.querySelector(".header .openCloseBtns .bars");
const closeBtn = document.querySelector(".closeBtn");
const getBtnAndBar = document.querySelector(".openCloseBtns .getBtnAndBar");

// Tablet
// const tabletMenu = document.querySelector(".tabletMenu");
const header = document.querySelector("div.header");
const tClassDropdown = document.querySelector(".tClassDropdown");
const subMenu = document.querySelector(".tabletMenu .subMenu ");
const outbound = document.querySelector(".outbound");

// Mobile
mobileMenu = document.querySelector(".mobileMenu");
barsBtn.addEventListener("click", (e) => {
  closeBtn.style.display = "flex";

  getBtnAndBar.style.display = "none";
  if (window.screen.width > 767 && window.screen.width <= 1023) {
    outbound.style.display = "block";
  } else {
    mobileMenu.style.display = "block";
  }

  e.preventDefault();
});

closeBtn.addEventListener("click", (e) => {
  getBtnAndBar.style.display = "block";
  closeBtn.style.display = "none";
  if (window.screen.width > 767 && window.screen.width <= 1023) {
    outbound.style.display = "none";
  } else {
    mobileMenu.style.display = "none";
  }
  outbound.style.display = "none";
  e.preventDefault();
});

tClassDropdown.addEventListener("click", (e) => {
  subMenu.classList.toggle("display_none");
  e.preventDefault();
});

function resizeFn() {
  // if (window.screen.width > 767 && window.screen.width <= 1023)
  //    alert("Tablet");
  // else if (window.screen.width > 0 && window.screen.width <= 767)
  //   alert("Mobile");
  // else
  //   alert("Desktop");
}
window.onresize = resizeFn;
resizeFn();
