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

// ------------------------
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


//*! Sorting-select New Way
const popup = document.getElementById("popup");
const toggleButton = document.getElementById("toggle");
const inputField = document.querySelector("input.current");

function togglePopup() {
  const isDisplayed = popup.style.display === "block";
  popup.style.display = isDisplayed ? "none" : "block";

  changeArrow();
  changeCurrent(document.querySelectorAll("ul.list li"));
}

function clickOutside(event) {
  if (!popup.contains(event.target) && !toggleButton.contains(event.target)) {
    popup.style.display = "none";

    changeArrow();
  }
}

function changeArrow() {
  document.querySelector(".sorting .select_arrow  i").classList.toggle("up");
}

function changeCurrent(items) {
  items.forEach((item) => {
    item.addEventListener("click", function () {
      inputField.value = this.textContent;
    });
  });
}

toggleButton.addEventListener("click", togglePopup);
document.addEventListener("click", clickOutside);
