"use strict";

const navToggler = document.querySelector(".nav__toggle");
const navDrawer = document.getElementById("nav__drawer");
const overlay = document.querySelector(".overlay");

const toggleNavigationDrawer = () => {
  const toggleIcon = navToggler.querySelector("span");

  toggleIcon.classList.toggle("hamburger");
  toggleIcon.classList.toggle("icon-close");

  navDrawer.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

navToggler.addEventListener("click", toggleNavigationDrawer);

overlay.addEventListener("click", toggleNavigationDrawer);
