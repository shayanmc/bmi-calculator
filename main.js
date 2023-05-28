function calculate() {
  let bmi;
  let result = document.getElementById("result");
  let weight = parseInt(document.getElementById("weight").value);
  document.getElementById("weight-value").textContent = weight + " kg";

  let height = parseInt(document.getElementById("height").value);
  document.getElementById("height-value").textContent = height + " cm";

  bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);

  result.textContent = bmi;

  if (bmi < 18.5) {
    bmiStatus = "under weight";
    result.style.color = "#ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiStatus = "Normal weight";
    result.style.color = "#0be881";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiStatus = "Over weight ";
    result.style.color = "#ff884d";
  } else {
    bmiStatus = "Obese";
    result.style.color = "#ff5e57";
  }

  document.getElementById("status").textContent = bmiStatus;
}
