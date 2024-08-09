const headerHead = document.querySelector(".header .headerHead");
const headerBody = document.querySelector(" .headerBody");
const headerDropdownArrows = document.querySelectorAll(".headerHead i");

headerHead.addEventListener("click", (e) => {
  headerBody.classList.toggle("active");
  headerDropdownArrows.forEach((i) => {
    console.log(i);

    i.classList.toggle("active");
  });
});
