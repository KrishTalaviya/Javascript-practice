document.querySelector("form").addEventListener("submit", bmiCalculate);

function bmiCalculate(event) {
  event.preventDefault();

  let height = parseFloat(document.querySelector("#height").value) / 100;
  let weight = parseFloat(document.querySelector("#weight").value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight values.");
    return;
  }

  let bmi = weight / (height * height);

  // Clear previous results
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  // Create and append result
  const heading = document.createElement("h1");
  heading.appendChild(document.createTextNode(`Your BMI is ${bmi.toFixed(2)}`));
  resultsDiv.appendChild(heading);
}
