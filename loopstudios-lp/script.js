const navlogo = document.querySelector(".nav-brand");
const button = document.querySelector(".nav-toggle");

button.onclick = () => {
  button.classList.toggle("toggled");
  button.setAttribute("aria-expanded", "true");
  navlogo.classList.toggle("fixed");
};
