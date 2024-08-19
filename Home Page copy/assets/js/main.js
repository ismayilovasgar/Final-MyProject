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

// Change Theme Buttons
const toggle_button = document.getElementById("dark-change");
const light_images = document.querySelectorAll(".some-icon-light");
const dark_images = document.querySelectorAll(".some-icon-dark");

toggle_button.addEventListener("click", function () {
  document.body.classList.add("dark_theme");
  toggle_button.classList.toggle("active");
  // if (document.body.classList.contains("dark-theme")) {
  //   hidden_all_item(light_images);
  //   show_all_item(dark_images);
  // }
});

function hidden_all_item(items) {
  items.forEach((element) => {
    element.style.display = "none";
  });
}

function show_all_item(items) {
  items.forEach((element) => {
    element.style.display = "block";
  });
}

// Dark / light mode
// const btn = document.getElementById("modeToggle");
// const btn2 = document.getElementById("modeToggle2");
// const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

toggle_button.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  toggle_button.classList.add("active");

  localStorage.setItem("theme", "dark");
  hidden_all_item(light_images);
  show_all_item(dark_images);
}

function setLightMode() {
  document.body.removeAttribute("theme");
  toggle_button.classList.remove("active");
  localStorage.setItem("theme", "light");
  hidden_all_item(dark_images);
  show_all_item(light_images);
}
