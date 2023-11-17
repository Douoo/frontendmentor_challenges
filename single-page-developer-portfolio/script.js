const nameFieldController = document.getElementById("name");
const emailFieldController = document.getElementById("email");
const messageFieldController = document.getElementById("message");

const formEl = document.getElementById("formEl");

const btns = document.querySelectorAll("[data-target]");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
});

btns.forEach((btn) => {
  //This method is just in case the browser doesn't support smooth scroll css property
  btn.addEventListener("click", function (event) {
    event.preventDefault();

    const targetElId = this.getAttribute("data-target");
    const targetEl = document.getElementById(targetElId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

nameFieldController.addEventListener("invalid", showInvalidMsg);

nameFieldController.addEventListener("valid", (event) => {
  nameFieldController.classList.remove("error");
});

emailFieldController.addEventListener("invalid", showInvalidMsg);

emailFieldController.addEventListener("valid", (event) => {
  emailFieldController.classList.remove("error");
});

messageFieldController.addEventListener("invalid", showInvalidMsg);

messageFieldController.addEventListener("valid", (event) => {
  messageFieldController.classList.remove("error");
});

function showInvalidMsg(fieldController) {
  const { validity } = fieldController.target;
  const inputField = fieldController.target;
  const { valueMissing, typeMismatch, patternMismatch } = validity;

  inputField.classList.add("error");

  const formControl = inputField.parentElement;
  const errorText = formControl.querySelector(".input-msg");

  if (valueMissing) {
    errorText.textContent = "Field is required";
  } else if (typeMismatch || patternMismatch) {
    errorText.textContent = "Sorry, invalid format here";
  }
}
