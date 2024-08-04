const faq_item_head_all = document.querySelectorAll(".faqItem");

faq_item_head_all.forEach((item) => {
  item.addEventListener("click", (e) => {
    // rotate icon
    item
      .querySelector(".faqItemHead i.fa-angle-down")
      .classList.toggle("rotate");

    //  show body
    item.querySelector(".faqItemBody").classList.toggle("active");
  });
});
