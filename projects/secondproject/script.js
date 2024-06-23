let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  let results = document.getElementById("results");
  let category = document.getElementById("category");

  if (
    height === " " ||
    height < 0 ||
    height == NaN ||
    height === 0 ||
    typeof height === "string"
  ) {
    results.textContent = "please give valid height";
    category.textContent = "Invalid";
  } else if (
    weight === "" ||
    weight < 0 ||
    weight == NaN ||
    weight === 0 ||
    typeof weight === "string"
  ) {
    results.textContent = "please give valid weight";
    category.textContent = "Invalid";
  } else {
    let value = (weight / ((height * height) / 10000)).toFixed(4);
    results.textContent = value;
    if (value > 24.9) {
      category.textContent = "Overweight";
    } else if (value < 18.6) {
      category.textContent = "Underweight";
    } else {
      category.textContent = "Normal";
    }
  }
});
