const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

// set focus on celsius while loading or re-loading the page
window.addEventListener("load", celsius.focus());

// Convert celsius to fahrenheit when value in celsius is changed
celsius.addEventListener("input", () => {
  fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);

  //clear the default value in fahrenheit block
  if (!celsius.value) fahrenheit.value = "";
});

// Convert Fahrenheit to celsius when value in fahrenheit is changed
fahrenheit.addEventListener("input", () => {
  celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);

  //clear the default value in fahrenheit block
  if (!fahrenheit.value) celsius.value = "";
});
