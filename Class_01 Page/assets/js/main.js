//* nice-select
const select = document.querySelector(".nice-select");
const spanText = document.querySelector(".nice-select input.current");
const arrows = document.querySelectorAll(".nice-select .select_arrow i");
const list = document.querySelector(".nice-select ul.list");
const listItems = document.querySelectorAll(".nice-select ul.list li");

select.addEventListener("click", (e) => {
  list.classList.toggle("show");
  select.classList.toggle("focus");

  arrows.forEach((arrow) => {
    arrow.classList.toggle("changeDirection");
  });

  listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      spanText.value = item.textContent;
    });
  });
});

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
