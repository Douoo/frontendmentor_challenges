"use_strict";

const ageCalcForm = document.getElementById("calcForm");

//These are the inputs
const dayFieldController = document.getElementById("day");
const monthFieldController = document.getElementById("month");
const yearFieldController = document.getElementById("year");

//These are the placeholders for the result
const yearsPlaceholder = document.querySelector('[data-info="year"]');
const monthPlaceholder = document.querySelector('[data-info="month"]');
const dayPlaceholder = document.querySelector('[data-info="day"]');

ageCalcForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputDate = dayFieldController.value;
  const inputMonth = monthFieldController.value;
  const inputYear = yearFieldController.value;

  const currentDate = new Date();

  validYear = checkInputValidity(yearFieldController);
  validMonth = checkInputValidity(monthFieldController);
  validDate = checkDateValidity(dayFieldController, inputMonth);

  if (validYear && validMonth && validDate) {
    yearsPlaceholder.innerText = currentDate.getFullYear() - inputYear;
    monthPlaceholder.innerText = Math.abs(currentDate.getMonth() - inputMonth);
    dayPlaceholder.innerText = Math.abs(currentDate.getDate() - inputDate);
  }
});

function showMessage(input, errMsg) {
  console.log(input);
  const fieldController = input.parentElement;
  const small = fieldController.querySelector("small");
  fieldController.classList.add("error");
  small.innerText = errMsg;
}

//To check number of day during FEB
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

//A function to check the input validity for year and month together
function checkInputValidity(input) {
  const { value, id } = input; //destructuring the input obj
  const currentDate = new Date();
  const formController = input.parentElement;
  let isValid = true;
  formController.classList.remove("error");
  if (isNaN(value) || value < 1 || value == "") {
    showMessage(input, "The field is required");
    isValid = false;
  }

  if (id == "month" && value > 12) {
    showMessage(input, "Must be a valid month");
    isValid = false;
  }

  if (id == "year" && value > currentDate.getFullYear()) {
    showMessage(input, "Must be in the past");
    isValid = false;
  }
  return isValid;
}

//Checks whether the input date is correct or not
function checkDateValidity(input, month) {
  let isValid = true;
  const { value } = input;
  const fieldController = input.parentElement;
  fieldController.classList.remove("error");
  const daysInMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  if (isNaN(value) || value < 1 || value == "") {
    showMessage(input, "The field is required");
    isValid = false;
  }
  if (value > daysInMonth[month - 1]) {
    showMessage(input, "Must be valid date");
    showMessage(monthFieldController, "");
    showMessage(yearFieldController, "");
    isValid = false;
  }

  return isValid;
}
