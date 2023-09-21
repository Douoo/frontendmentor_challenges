const navbarToggler = document.querySelector("[data-toggle]");
const navMenu = document.querySelector("[data-nav]");

console.log(navbarToggler);

navbarToggler.addEventListener("click", function () {
  navMenu.classList.toggle("nav-visibility");
});
