const dataPoints = document.querySelectorAll("[data-date]");

async function getData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  const weeklySpendings = data.map((expense) => expense.amount);
  const maxSpending = Math.max(...weeklySpendings);

  for (let day = 0; day < weeklySpendings.length; day++) {
    const percentage = (weeklySpendings[day] / maxSpending) * 100 + "%";
    dataPoints[day].style.height = percentage;
    dataPoints[day].dataset.spending = `$${weeklySpendings[day]}`;
    dataPoints[day].dataset.value = percentage;
    console.log(dataPoints[day]);
  }
  return data;
}

getData();
