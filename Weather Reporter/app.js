const temperature = document.getElementById("temp");
const weatherCheckerBtn = document.getElementById("weatherCheckerBtn");
const weatherResponse = document.getElementById("weatherResponse");
const freezingImage = document.getElementById("freezing");
const coldImage = document.getElementById("cold");
const coolImage = document.getElementById("cool");
const warmImage = document.getElementById("warm");
const hotImage = document.getElementById("hot");

weatherCheckerBtn.addEventListener("click", function () {
  const shown1 = document.querySelector(".show");
  shown1?.classList.remove("show");
  if (temperature.value < 32) {
    weatherResponse.innerHTML = "It is freezing!";
    freezingImage.classList.add("show");
  } else if (temperature.value >= 32 && temperature.value <= 49) {
    weatherResponse.innerHTML = "It is cold.";
    coldImage.classList.add("show");
  } else if (temperature.value >= 50 && temperature.value <= 64) {
    weatherResponse.innerHTML = "It is cool.";
    coolImage.classList.add("show");
  } else if (temperature.value >= 65 && temperature.value <= 79) {
    weatherResponse.innerHTML = "It is warm.";
    warmImage.classList.add("show");
  } else if (temperature.value >= 80) {
    weatherResponse.innerHTML = "It is hot!";
    hotImage.classList.add("show");
  } else {
    weatherResponse.innerHTML = `${temperature.value} is invalid.`;
  }
});
