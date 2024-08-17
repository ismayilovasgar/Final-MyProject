// Get the modal
const modal = document.getElementById("myModal");
const trainers = document.querySelectorAll(".trainers .listWrap a");
const closeBtn = document.querySelector(".modal .modalCloseBtn");

trainers.forEach((trainer) => {
  trainer.addEventListener("click", (e) => {
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
