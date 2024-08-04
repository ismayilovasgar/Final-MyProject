const select = document.querySelector(".select");
const spanText = document.querySelector(".select span.current");
const arrows = document.querySelectorAll(".select .select_arrow i");
const list = document.querySelector("ul.list");
const listItems = document.querySelectorAll("ul.list li");
select.addEventListener("click", (e) => {
  list.classList.toggle("show");
  select.classList.toggle("focus");

  arrows.forEach((arrow) => {
    arrow.classList.toggle("changeDirection");
    console.log(arrow);
  });

  listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      spanText.textContent = item.innerHTML;
    });
  });
});
