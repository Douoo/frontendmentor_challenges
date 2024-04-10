const trafficRangeEl = document.getElementById("trafficRange");
const trafficRangeSlide = document.querySelector(".progress");
const pageViewsEl = document.getElementById("pageViews");
const trafficCostEl = document.querySelector("[data-cost]");

const yearlyPlan = document.getElementById("billingPeriod");

let trafficPrice = (trafficRangeEl.value * 1000) / 6250;

// Initialize the default range input
pageViewsEl.innerText = `$${trafficRangeEl.value}`;

function calcTrafficPrice(trafficAmt, yearlyBilling) {
  price = (trafficAmt * 1000) / 6250;
  if (yearlyBilling) {
    return `${((price * 12) / 1.2).toFixed(2)}`;
  } else {
    return `${price.toFixed(2)}`;
  }
}

trafficRangeEl.addEventListener("input", function (event) {
  const { value: trafficAmt, max } = event.target;
  let selectedRange = (trafficAmt / max) * 100;
  let remainingRange = max - (selectedRange / max) * 100;

  console.log(trafficRangeSlide);
  trafficRangeSlide.style.width = `${selectedRange}%`;
  pageViewsEl.innerText = trafficAmt;
  trafficPrice = (trafficAmt * 1000) / 6250;
  const cost = calcTrafficPrice(trafficAmt, yearlyPlan.checked);

  trafficCostEl.innerText = `$${cost}`;

  //   trafficRange.style.background = `linear-gradient(90deg, hsl(174, 86%, 45%) ${selectedRange}%, hsl(224, 65%, 95%) ${remainingRange}%)`;
});

yearlyPlan.addEventListener("change", function () {
  const price = calcTrafficPrice(trafficRangeEl.value, yearlyPlan.checked);

  trafficCostEl.innerText = `$${price}`;
});
