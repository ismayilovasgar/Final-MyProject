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


//* Function For Screen Size changes
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
