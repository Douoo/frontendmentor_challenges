const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");

const navList = document.querySelector(".nav-list");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

let menuClicked = false;

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("opened");
  navToggle.dataset.clicked = navMenu.classList.contains("opened")
    ? true
    : false;
});

navList.addEventListener("click", (event) => {
  const clickedElmt = event.target;

  const isDropdownBtn = clickedElmt.matches(".dropdown-btn");

  if (isDropdownBtn) {
    const dropdownContainer = clickedElmt.parentElement;
    const dropdownList = dropdownContainer.querySelector(".dropdown-list");
    const iconDropdown = dropdownContainer.querySelector(".icon-dropdown");

    iconDropdown.classList.toggle("active");

    if (!dropdownList.classList.contains("show")) {
      closeAllDropdown();
      dropdownList.classList.add("show");
    } else {
      dropdownList.classList.remove("show");
    }
  }
});

// Closes the dropdown menu if there are any opened
window.addEventListener("click", function (e) {
  const el = e.target;
  if (!el.matches(".dropdown-btn")) {
    closeAllDropdown();
  }

});

function closeAllDropdown() {
  dropdownBtns.forEach((dropdownBtn) => {
    const dropdownContainer = dropdownBtn.parentElement;
    const dropdownList = dropdownContainer.querySelector(".dropdown-list");
    const iconDropdown = dropdownContainer.querySelector(".icon-dropdown");
    if (dropdownList.classList.contains("show")) {
      dropdownList.classList.remove("show");
      iconDropdown.classList.remove("active");
    }
  });
}
