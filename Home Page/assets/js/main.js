// Desktop
const dropdown = document.querySelector("li.drop");
const dropdownArrow = document.querySelector("li.drop > i");

dropdown.addEventListener("mouseover", (e) => {
  dropdownArrow.classList.toggle("rotate_180");
});

// Bars Menu
const btnHidden = document.querySelector("button.hidden i");
const free_trial = document.querySelector(".headerCenter .headerTrialBtn");
const tabletMenu = document.querySelector(".tabletMenu");
const dropdownMenu = document.querySelector(".dropdownBody");
const dropdownBtn = document.querySelector(".dropdownLink");

btnHidden.addEventListener("click", (e) => {
  btnHidden.classList.toggle("fa-xmark");
  free_trial.classList.toggle("hidden");
  tabletMenu.classList.toggle("show");
});
dropdownBtn.addEventListener("click", (e) => {
  dropdownMenu.classList.toggle("active");
});

//
//* sorting-select
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
