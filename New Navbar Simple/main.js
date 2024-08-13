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
const mobilMenu = document.querySelector("section.header .mobileMenu");
const dropdownLink = document.querySelector(".tabletMenu ul > li.dropdownLink");
const dropdownBody = document.querySelector(".tabletMenu .dropdownBody");

btnBars.addEventListener("click", (e) => {
  btnBars.classList.toggle("fa-xmark");

  if (window.screen.width > 767) {

    if (!btnBars.classList.contains("fa-xmark")) {
      tabletMenu.classList.add("active");
    } else {
      tabletMenu.classList.remove("active");
    }
  } else {
    console.log("else");
    if (!btnBars.classList.contains("fa-xmark")) {
      mobilMenu.style.display = "none";
    } else {
      mobilMenu.style.display = "block";
    }
  }
  e.preventDefault();
});

dropdownLink.addEventListener("click", (e) => {
  dropdownLink.querySelector("i").classList.toggle("active");
  dropdownBody.classList.toggle("active");
});
