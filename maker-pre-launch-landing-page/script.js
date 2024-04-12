const subscribeFormEl = document.getElementById("subscribeForm");
const emailEl = document.getElementById("email");
const inputMsgEl = document.querySelector(".input-msg");

subscribeFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  subscribeFormEl.style.display = "none";
  const responsePlaceholder = document.querySelector(".response");
  responsePlaceholder.innerHTML = `<p class="text-center">Signup complete! We will let you know when we release our product. Thanks for your patience</p>`;
});

emailEl.addEventListener("invalid", function (event) {
  event.preventDefault();
  const { value, validity } = event.target;
  console.log(validity);

  emailEl.classList.add("error");
  if (validity.valueMissing) {
    inputMsgEl.innerText = "Fill in your email to get notified";
  } else if (validity.typeMismatch || validity.badInput) {
    inputMsgEl.innerText = "Oops! That doesn’t look like an email address";
  }
});

emailEl.addEventListener("valid", function (event) {
  emailEl.classList.remove("error");
});
