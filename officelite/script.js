"use strict";
const body = document.querySelector("body");
const formEl = document.querySelector(".formEl");
const registrationFormContainer = document.getElementById("registrationForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");

const dropdownPlanBtn = document.getElementById("dropdownPlanButton");
const pricingPlanList = document.querySelector(".dropdown-list");

const inputs = document.querySelectorAll(".form-control");
const signupForm = document.querySelector("registrationForm");

const releaseDate = document.querySelector("[data-release]");

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 48);

releaseDate.textContent = formatter.format(currentDate);

body.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (!clickedElement.classList.contains("dropdown-toggle")) {
    dropdownPlanBtn.classList.remove("toggled");
  }
});

dropdownPlanBtn.onclick = () => {
  dropdownPlanBtn.classList.toggle("toggled");
  dropdownPlanBtn.setAttribute("aria-expanded", "false");
};

pricingPlanList.addEventListener("click", function (event) {
  if (event.target.classList.contains("dropdown-item")) {
    const clickedItem = event.target;
    const selectedPlan = clickedItem.querySelector(".text-bold.clr-dark");

    dropdownPlanBtn.innerHTML = clickedItem.innerHTML.trim();
    dropdownPlanBtn.classList.add("text-bold");
    dropdownPlanBtn.classList.toggle("toggled");
  }
});

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  registrationFormContainer.innerHTML = `
  <div style="display: grid; place-items: center; height: 100%">
  <div class="text-center">
    <h1>Thanks for filling out the form 😊</h1>
    <p>We will get back to you soon via the email you provided</p>
  </div>
</div>
  `;
});

inputs.forEach((formControl) => {
  const input = formControl.querySelector("input");
  const label = formControl.querySelector("label");
  const errorText = formControl.querySelector(".error-text");

  input.addEventListener("invalid", (event) => {
    event.preventDefault();
    formControl.classList.add("error");

    const formField = event.target;
    const fieldName = formField.name[0].toUpperCase() + formField.name.slice(1);

    console.log(formField.validity);
    if (formField.validity.valueMissing) {
      errorText.textContent = `${fieldName} cannot be empty`;
    } else if (
      formField.validity.patternMismatch ||
      formField.validity.typeMismatch
    ) {
      errorText.textContent = `Invalid ${fieldName}`;
    } else if (formField.validity.tooShort) {
      errorText.textContent = `${label.textContent} needs to be longer than ${input.minLength} character`;
    }
  });

  input.addEventListener("input", (event) => {
    formControl.classList.remove("error");
  });
});

setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = currentDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (days < 10) {
    days = "0" + days;
  }

  // Output the result in an element with id="demo"
  const dayEl = document.querySelector(".days");
  const hrEl = document.querySelector(".hrs");
  const minEl = document.querySelector(".min");
  const secEl = document.querySelector(".sec");

  dayEl.textContent = days;
  hrEl.textContent = hours;
  minEl.textContent = minutes;
  secEl.textContent = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    dayEl.textContent = "00";
    hrEl.textContent = "00";
    minEl.textContent = "00";
    secEl.textContent = "00";
  }
}, 1000);
