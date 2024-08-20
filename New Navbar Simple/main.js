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
const popup = document.getElementById("hiddenTabletMenu");
const headerNavbar = document.getElementById("headerNavbar");

btnHidden.addEventListener("click", (e) => {
  btnHidden.classList.toggle("fa-xmark");
  tabletMenu.classList.toggle("show");
});

dropdownBtn.addEventListener("click", (e) => {
  dropdownMenu.classList.toggle("active");
});

function clickOutside(e) {
  if (
    !e.composedPath().includes(headerNavbar) &&
    tabletMenu.classList.contains("show")
  ) {
    tabletMenu.classList.toggle("show");
    btnHidden.classList.toggle("fa-xmark");
  }
}
document.addEventListener("click", clickOutside);

// change theme icon
const toggle_button = document.getElementById("dark-change");
toggle_button.addEventListener("click", function () {
  document.body.classList.add("dark_theme");
  toggle_button.classList.toggle("active");
  // if (document.body.classList.contains("dark-theme")) {
  //   hidden_all_item(light_images);
  //   show_all_item(dark_images);
  // }
});

// change footer nav
const footer_nav = document.querySelector(
  ".footer__col:nth-child(1) .footer__category"
);
const footer_nav__icon = document.querySelector(
  ".footer__col:nth-child(1) .footer__category i"
);
const footer_menu = document.querySelector(".footer__menu ul");

footer_nav.addEventListener("click", (e) => {
  footer_menu.classList.toggle("active");
  footer_nav__icon.classList.toggle("rotate");
});
