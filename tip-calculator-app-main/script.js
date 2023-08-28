const bill = document.getElementById("bill");
const numPpl = document.getElementById("numPpl");
const formEl = document.getElementById("tipForm");

const submitBtn = document.getElementById("submitBtn");
const customTip = document.getElementById("customTip");
const tip = document.querySelector("[data-tip]");

const tipAmount = document.querySelector("[data-tip-amount]");
const totalAmount = document.querySelector("[data-total]");

let tipInput;

//Calculates the tip
function calcTip() {
  const billCost = bill.value;
  const share = numPpl.value;
  const percentage = tipInput / 100;

  if (billCost.trim() !== "" && share.trim() !== "" && percentage !== null) {
    activateSubmitBtn();
    const totCostPerPerson = billCost / share;
    const tip = totCostPerPerson * percentage;
    tipAmount.innerText = tip.toFixed(2);
    totalAmount.innerText = totCostPerPerson.toFixed(2);
  }
}

// Tracks input field changes
const handleInputChange = (event) => {
  const { value } = event.target;
  const formControl = event.target.parentNode;
  const errMsg = formControl.querySelector(".errMsg");

  if (+value == 0) {
    formControl.classList.add("err");
    errMsg.innerText = "Can't be zero";
    return;
  }

  if (+value < 0) {
    formControl.classList.add("err");
    errMsg.innerText = "Can't be below 0";
    return;
  }

  if (!tipInput && isNaN(tipInput)) {
    return;
  }
  formControl.classList.remove("err");
  activateSubmitBtn();
  calcTip();
};

//Activates or Disable the RESET button
function activateSubmitBtn() {
  if (bill.value.length > 0 && numPpl.value.length > 0) {
    submitBtn.disabled = false;
    submitBtn.classList.add("active");
    submitBtn.style.cursor = "pointer";
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("active");
  }
}

function resetActiveBtn(activeELement) {
  if (activeELement) {
    activeELement.classList.remove("active");
  }
}

tip.addEventListener("click", function (event) {
  event.preventDefault();
  const { innerText: percentage } = event.target;
  const element = event.target;

  const activeBtn = tip.querySelector(".active");

  resetActiveBtn(activeBtn);

  if (element.classList.contains("btn")) {
    customTip.value = "";
    event.target.classList.add("active");
    tipInput = +percentage.slice(0, -1);
    calcTip();
  }
});

customTip.addEventListener("input", () => {
  const selectedTip = tip.querySelector(".active");
  resetActiveBtn(selectedTip);

  if (customTip.value.length > 0) {
    tipInput = customTip.value;
    calcTip();
  }
});

bill.addEventListener("input", handleInputChange);

numPpl.addEventListener("input", handleInputChange);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  formEl.reset();
  tipAmount.innerText = "$0.00";
  totalAmount.innerText = "$0.00";
  const activeBtn = tip.querySelector(".active");
  resetActiveBtn(activeBtn);
  submitBtn.disabled = true;
  submitBtn.classList.remove("active");
});
