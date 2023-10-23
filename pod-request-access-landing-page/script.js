const formEl = document.getElementById("formEl");
const formControl = document.querySelector(".form-control");

const emailFieldControl = formControl.querySelector("input");
const inputMsg = formControl.querySelector(".input-msg");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  formEl.innerHTML = `
    <p>Submission successful! Check your email</p>
  `;
});

emailFieldControl.addEventListener("invalid", (event) => {
  event.preventDefault();

  const { validity } = event.target;

  if (validity.valueMissing) {
    inputMsg.textContent = "Oops! It looks like you forgot to add your email";
  } else if (validity.typeMismatch) {
    inputMsg.textContent = "Oops! Please check your email";
  } else if (validity.tooShort) {
    inputMsg.textContent = "Too short for an email";
  }
});

emailFieldControl.addEventListener("valid", (event) => {
  event.preventDefault();
  inputMsg.textContent = "";
});
