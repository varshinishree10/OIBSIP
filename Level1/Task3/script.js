const degreesInput = document.getElementById("degrees");
const typeSelect = document.getElementById("type");
const result = document.getElementById("result");
const precisionInput = document.getElementById("precision");

degreesInput.addEventListener("input", convertTemp);
typeSelect.addEventListener("change", convertTemp);
precisionInput.addEventListener("input", convertTemp);

function convertTemp() {
  let degrees = degreesInput.value;
  let type = typeSelect.value;
  let precision = precisionInput.value;

  if (degrees === "") {
    result.innerHTML = "Enter a valid number!";
    return;
  }

  degrees = parseFloat(degrees);
  precision = parseInt(precision);

  let output;

  if (type === "celsius") {
    output = (degrees * 9/5) + 32;
    result.innerHTML = output.toFixed(precision) + " °F";
  } 
  else if (type === "fahrenheit") {
    output = (degrees - 32) * 5/9;
    result.innerHTML = output.toFixed(precision) + " °C";
  } 
  else {
    output = degrees + 273.15;
    result.innerHTML = output.toFixed(precision) + " K";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
