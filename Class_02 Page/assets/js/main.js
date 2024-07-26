const barsBtn = document.querySelector(".header .openCloseBtns .bars");
const closeBtn = document.querySelector(".closeBtn");
const getBtnAndBar = document.querySelector(".openCloseBtns .getBtnAndBar");

// Tablet
// const tabletMenu = document.querySelector(".tabletMenu");
const header = document.querySelector("div.header");
const tClassDropdown = document.querySelector(".tClassDropdown");
const subMenu = document.querySelector(".tabletMenu .subMenu ");
const outbound = document.querySelector(".outbound");
//
const popupContent = document.querySelector(".popupContent"),
  trainer = document.querySelector(".trainers .listWrap .trainerItem"),
  mfpclose = document.querySelector(".mfpClose"),
  body = document.querySelector("body");

trainer.addEventListener("click", (e) => {
  popupContent.style.display = "block";
  disable();
  body.style.overflow = "hidden";
});

mfpclose.addEventListener("click", (e) => {
  popupContent.style.display = "none";
  body.style.overflow = "auto";

  enable();
});

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

function disable() {
  body.addEventListener("wheel", preventScroll);
}

function enable() {
  body.removeEventListener("wheel", preventScroll);
}
