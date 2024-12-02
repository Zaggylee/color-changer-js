const COLOR_BOX = document.getElementById("color-box");
const BUTTON = document.getElementById("change-color-btn");

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

BUTTON.addEventListener("click", () => {
  COLOR_BOX.style.backgroundColor = getRandomColor();
});

document.addEventListener("DOMContentLoaded", () => {
  COLOR_BOX.style.backgroundColor = getRandomColor();
});
