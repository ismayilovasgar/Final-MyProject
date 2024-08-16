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
const popup = document.getElementById("hiddenTabletMenu");
const headerNavbar = document.getElementById("headerNavbar");

btnHidden.addEventListener("click", (e) => {
  btnHidden.classList.toggle("fa-xmark");
  tabletMenu.classList.toggle("show");
});

dropdownBtn.addEventListener("click", (e) => {
  dropdownMenu.classList.toggle("active");
});

function clickOutside(e) {
  if (
    !e.composedPath().includes(headerNavbar) &&
    tabletMenu.classList.contains("show")
  ) {
    tabletMenu.classList.toggle("show");
    btnHidden.classList.toggle("fa-xmark");
  }
}
document.addEventListener("click", clickOutside);

//! close tablet menu when resize screen sizes
// Previous size values
let prevWidth = window.innerWidth;
let prevHeight = window.innerHeight;

// Threshold for significant change (in pixels)
const threshold = 50;

// Function to update the size display
function updateSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Check if the size change exceeds the threshold
  if (
    Math.abs(width - prevWidth) > threshold ||
    Math.abs(height - prevHeight) > threshold
  ) {
    // Update previous size values
    prevWidth = width;
    prevHeight = height;
    alert("hello world");
  }
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Create a debounced version of the updateSize function
const debouncedUpdateSize = debounce(updateSize, 200);

// Initial call to set the size on page load
updateSize();

// Event listener for resize
window.addEventListener("resize", debouncedUpdateSize);
