const barsBtn = document.querySelector(".header .openCloseBtns .bars");
const closeBtn = document.querySelector(".closeBtn");
const getBtnAndBar = document.querySelector(".openCloseBtns .getBtnAndBar");
const tabletMenu = document.querySelector(".tabletMenu");
const header = document.querySelector("div.header");

barsBtn.addEventListener("click", (e) => {
  closeBtn.style.display = "flex";
  getBtnAndBar.style.display = "none";
  tabletMenu.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
  getBtnAndBar.style.display = "block";
  closeBtn.style.display = "none";
  tabletMenu.style.display = "none";
});
