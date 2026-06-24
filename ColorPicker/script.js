const colorPicker = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");

// set default background
document.body.style.backgroundColor = "#ffffff";

colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;

  // change background
  document.body.style.backgroundColor = selectedColor;

  // show color code
  colorCode.textContent = "Selected Color: " + selectedColor;
});