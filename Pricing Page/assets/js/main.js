let preveiwContainer = document.querySelector(".faqList");
let faqItemBody = preveiwContainer.querySelectorAll(".faqItemBody");

document.querySelectorAll(".faqList .faqItem").forEach((product) => {
  product.onclick = () => {
    let name = product.getAttribute("data-name");
    faqItemBody.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

