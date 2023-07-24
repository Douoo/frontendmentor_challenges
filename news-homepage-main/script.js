const navToggleBtn = document.querySelector(".nav__toggle");
const closeNavBtn = document.getElementById("close-nav");
const navbar = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

function showNavMenu() {
  navbar.classList.add("nav__visible");
  overlay.classList.remove("hidden");
}
function closeNavMenu() {
  overlay.classList.add("hidden");
  navbar.classList.remove("nav__visible");
}

navToggleBtn.addEventListener("click", showNavMenu);

overlay.addEventListener("click", closeNavMenu);

closeNavBtn.addEventListener("click", closeNavMenu);
