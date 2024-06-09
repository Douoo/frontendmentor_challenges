const navToggler = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");
const hamburgerIcon = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");

navToggler.addEventListener("click", function () {
  const isExpanded = navToggler.getAttribute("aria-expanded") === "true";
  navToggler.setAttribute("aria-expanded", !isExpanded);
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  navMenu.classList.toggle("hidden");
});
