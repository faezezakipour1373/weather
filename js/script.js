let cityInput = document.getElementById("cityInput");
let addInput = document.getElementById("add");
let cityOutput = document.getElementById("city");
let descOut = document.getElementById("description");
let tempOut = document.getElementById("temp");
let windOut = document.getElementById("wind");
let barani = document.getElementById("barani");
let abri = document.getElementById("abri");
let barfi = document.getElementById("barfi");
let aftabi = document.getElementById("aftabi");

const apiKey = "3045dd712ffe6e702e3245525ac7fa38";
async function getWeather() {
  var weatherResult = await (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${cityInput.value}&appid=${apiKey}`)
  ).json();
  setInfo(weatherResult);
  console.log(weatherResult);
}
function converToCel(value) {
  return (value - 273).toFixed(2);
}
function setInfo(data) {
  var cityName = data["name"];
  var desc = data["weather"][0]["main"];
  var temp = data["main"]["temp"];
  var wind = data["wind"]["speed"];
  cityOutput.innerHTML = `City: ${cityName}`;
  descOut.innerHTML = `description: ${desc}`;
  tempOut.innerHTML = `temprature: ${converToCel(temp)}`;
  windOut.innerHTML = `wind speed: ${wind} km/h`;
  if (data["weather"][0]["main"] === "Clear") {
    aftabi.style.display = "block";
    abri.style.display = "none";
    barani.style.display = "none";
    barfi.style.display = "none";
  } else if (data["weather"][0]["main"] === "Rain") {
    aftabi.style.display = "none";
    abri.style.display = "none";
    barani.style.display = "block";
    barfi.style.display = "none";
  } else if (data["weather"][0]["main"] === "Cloud" || "Haze") {
    aftabi.style.display = "none";
    abri.style.display = "block";
    barani.style.display = "none";
    barfi.style.display = "none";
  } else if (data["weather"][0]["main"] === "Snow") {
    aftabi.style.display = "none";
    abri.style.display = "none";
    barani.style.display = "none";
    barfi.style.display = "block";
  }
}
addInput.addEventListener("click", getWeather);
