"use strict";

const [cardNum, cardHolder, cardExpMonth, cardExpYr, cardCvc] =
  document.querySelectorAll("[data-card]");

const form = document.getElementById("formEl");

const cardHolderInput = document.getElementById("name");
const cardNumInput = document.getElementById("card_num");
const cardExpMonthInput = document.getElementById("exp_month");
const cardExpYearInput = document.getElementById("exp_year");
const cardCvvInput = document.getElementById("cvv");

function showErrorMsg(fieldElement, message) {
  const formControl = fieldElement.parentElement;
  const errMsg = fieldElement.nextElementSibling;
  formControl.classList.add("error");
  errMsg.textContent = message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const expMonth = cardExpMonthInput.value;
  const expYear = cardExpYearInput.value;
  let submissionComplete = false;

  if (submissionComplete) {
    location.reload();
    return;
  }

  const currDate = new Date();
  const cardDate = new Date(`${expMonth}/01/20${expYear}`);
  console.log(cardDate);
  if (currDate > cardDate) {
    showErrorMsg(cardExpMonthInput, "Expired date inserted");
    showErrorMsg(cardExpYearInput);
  } else {
    submissionComplete = true;
    form.innerHTML = `<div class="center">
      <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
      <h1> Thank you! </h1>
    
      <p>We've added your card details Continue</p>
      <button class="btn-primary" onclick="location.reload()" id="resetBtn">Continue</button>
    </div>`;
  }
});

function validateField(event) {
  event.preventDefault();
  const fieldElement = event.target;
  const { value, validity, name } = event.target;
  fieldElement.classList.add("error");
  console.log(validity);
  const errMsg = fieldElement.nextElementSibling;
  if (validity.valueMissing) {
    errMsg.textContent = "Can't be blank";
  } else if (validity.tooLong) {
    errMsg.textContent = "Wrong format, invalid input";
  } else if (validity.tooShort) {
    errMsg.textContent = "Wrong format, invalid input";
  } else if (validity.rangeOverflow || validity.rangeOverflow) {
    errMsg.textContent = "Invalid input";
  } else if (name !== "name" && isNaN(+value)) {
    errMsg.textContent = "Wrong format, numbers only";
  }
  if (name === "cvv" && value.length > 3) {
    errMsg.textContent = "Wrong format, invalid input";
  }
}

cardHolderInput.addEventListener("invalid", validateField);

cardNumInput.addEventListener("invalid", validateField);

cardCvvInput.addEventListener("invalid", validateField);

cardExpMonthInput.addEventListener("invalid", validateField);

cardExpYearInput.addEventListener("invalid", validateField);

cardHolderInput.addEventListener("input", (event) => {
  const { value } = event.target;

  cardHolder.innerHTML = value;
});

cardCvvInput.addEventListener("input", (event) => {
  const { value } = event.target;
  cardCvc.innerHTML = value;
  if (value.trim().length > 2) {
    cardCvvInput.blur();
  }
});

cardExpMonthInput.addEventListener("input", (event) => {
  const { value } = event.target;
  cardExpMonth.innerHTML = value.replace(/[^0-9]/g, "");

  if (value.trim().length > 1) {
    cardExpYearInput.focus();
  }
});
cardExpYearInput.addEventListener("input", (event) => {
  const { value } = event.target;
  cardExpYr.innerHTML = value;

  if (value.trim().length > 1) {
    cardCvvInput.focus();
  }
});

function formatCardNumber(value) {
  // Remove any non-numeric characters from the input
  const sanitizedValue = value.replace(/[^0-9]/g, "");

  // Add spacing after every 4 characters
  let formattedValue = "";
  for (let i = 0; i < sanitizedValue.length; i += 4) {
    formattedValue += sanitizedValue.slice(i, i + 4) + " ";
  }

  // Remove the extra space at the end (if any)
  formattedValue = formattedValue.trim();

  return formattedValue;
}

cardNumInput.addEventListener("input", (event) => {
  let { value } = event.target;

  event.target.value = formatCardNumber(value);
  cardNum.innerHTML = value;
  if (value.length > 18) {
    console.log("focus on month");
    cardExpMonthInput.focus();
  }
});
