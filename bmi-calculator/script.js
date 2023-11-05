const userChoice = document.querySelectorAll('input[name="type"]');

const form = document.getElementById("formEl");
const inputFormHolder = document.getElementById("formHolder");
const bmiResult = document.querySelector(".bmi__card");

let selectedChoice = "metric"; //Initialized with the metric choice by default
let prevSelectedChoice = selectedChoice; //This value is used for holding the prev state of the selectedChoice

function healthStatus(bmiResult) {
  //Returns the status of the BMI result - underweight, healthy, and overweight
  if (bmiResult < 18.5) {
    return "underweight.";
  } else if (bmiResult < 24.9) {
    return "a healthy weight.";
  } else if (bmiResult < 29.9) {
    return "overweight.";
  } else if (bmiResult > 30) {
    return "obesed.";
  }
}

function updateBmiMethod() {
  for (const choice of userChoice) {
    if (choice.checked && choice.value != prevSelectedChoice) {
      selectedChoice = choice.value;
      renderForm(selectedChoice);
      break;
    }
  }
  prevSelectedChoice = selectedChoice;
}

function calculateBMI(height, weight, inputType) {
  let bmi = 0;
  let weightRange = "";

  if (inputType === "imperial") {
    // Convert height from feet to inches and add it to the given inches
    const heightInches = height.feet * 12 + height.inches;
    // Convert weight from stones to pounds and add it with the pound
    const weightPounds = weight.stones * 14 + weight.pounds;
    // Calculate BMI using the imperial formula
    bmi = (weightPounds / Math.pow(heightInches, 2)) * 703;
    console.log(weightPounds, Math.pow(heightInches));
    console.log("bmi result");
    console.log(bmi);
    weightRange = calculateHealthyWeightRange({ height, imperial: true });
  } else {
    // Calculate BMI using the metric formula
    bmi = weight / Math.pow(height / 100, 2);
    weightRange = calculateHealthyWeightRange({ height });
  }

  if (!Number.isFinite(bmi) || !bmi) {
    return;
  }

  // Renders/Updates the UI after the result is calculated
  renderResult(bmi, weightRange);
}
function calculateHealthyWeightRange({ height, imperial = false }) {
  if (height <= 0) {
    return "Invalid input";
  }

  let heightInCentimeters;
  if (imperial) {
    // Convert height from feet and inches to centimeters
    heightInCentimeters = height.feet * 30.48 + height.inches * 2.54;
  } else {
    heightInCentimeters = height;
  }

  // Calculate the healthy weight range based on height (in centimeters) and BMI range
  const minHeightInCentimeters = 50; // Minimum height in centimeters
  const maxHeightInCentimeters = 260; // Maximum height in centimeters
  const bmiMin = 18.5; // Minimum healthy BMI
  const bmiMax = 24.9; // Maximum healthy BMI

  if (
    heightInCentimeters < minHeightInCentimeters ||
    heightInCentimeters > maxHeightInCentimeters
  ) {
    return "Height out of range";
  }

  // BMI formula for weight in kilograms: weight (kg) = BMI * (height (m))^2
  const heightInMeters = heightInCentimeters / 100; // Convert height to meters
  const weightMin = Math.round(bmiMin * (heightInMeters * heightInMeters));
  const weightMax = Math.round(bmiMax * (heightInMeters * heightInMeters));

  return `${weightMin} kg - ${weightMax} kg`;
}

form.addEventListener("input", (event) => {
  updateBmiMethod();

  if (selectedChoice === "metric") {
    // Get the metric values via the DOM (the height and weight)
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    calculateBMI(height, weight);
  } else {
    //Get the imperial values via the DOM (height - ft in & weight st lb)
    const heightFeet = document.getElementById("feet").value;
    const heightInches = document.getElementById("inches").value;

    const weightStones = document.getElementById("stones").value;
    const weightPound = document.getElementById("pound").value;

    // Organize related fields in an object
    const heightImperial = {
      feet: parseFloat(heightFeet) || 0,
      inches: parseFloat(heightInches),
    };
    const weightImperial = {
      stones: parseFloat(weightStones) || 0,
      pounds: parseFloat(weightPound),
    };

    console.log(heightImperial);
    console.log(weightImperial);
    calculateBMI(heightImperial, weightImperial, "imperial");
  }
});

function renderForm(methodType) {
  //The purpose of this method is to render the neccessary form according
  //to the selected method for calculating the BMI
  if (methodType === "metric") {
    inputFormHolder.innerHTML = `
      <div class="form-lg-row">
        <div class="form-control mt-16">
          <label for="height">Height</label>
          <input type="number" name="height" id="height" />
          <small class="prefix">cm</small>
        </div>
        <div class="form-control mt-16">
          <label for="height">Weight</label>
          <input type="number" name="weight" id="weight" />
          <small class="prefix">kg</small>
        </div>
     </div>
    `;
  } else {
    inputFormHolder.innerHTML = `
          <fieldset class="form-lg-row mt-16">
          <legend>Height</legend>
          <div class="form-control mt-8">
            <label class="visually-hidden" for="feet">feet</label>
            <input type="number" name="feet" id="feet" />
            <small class="prefix--legend">ft</small>
          </div>
          <div class="form-control mt-8">
            <label class="visually-hidden" for="inches">Inches</label>
            <input type="number" name="inches" id="inches" />
            <small class="prefix--legend">in</small>
          </div>
          </fieldset>
          <fieldset class="form-lg-row mt-16">
            <legend>Weight</legend>
            <div class="form-control mt-8">
              <label class="visually-hidden" for="stones">Stone</label>
              <input type="number" name="stones" id="stones" />
              <small class="prefix--legend">st</small>
            </div>
            <div class="form-control mt-8">
              <label class="visually-hidden" for="pound">Pound</label>
              <input type="number" name="pound" id="pound" />
              <small class="prefix--legend">lb</small>
            </div>
          </fieldset>
        `;
  }
}

function renderResult(bmi, weightRange) {
  bmiResult.innerHTML = `
  <div class="row">
    <div>
        <p class="clr-whtie">Your BMI is...<br><h2 class="heading-lg mt-16">${bmi.toFixed(
          2
        )}</h2></p>
    </div>
    <div>
        <p class="clr-whtie">Your BMI suggests you're ${healthStatus(
          bmi
        )} Your ideal weight is between <span class="text-bold">${weightRange}</span></p>
    </div>
  </div>
`;
}
