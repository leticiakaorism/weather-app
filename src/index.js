function formatDate(date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Setempber",
    "October",
    "November",
    "December",
  ];

  let weekDay = weekDays[date.getDay()];
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let day = date.getDate();

  return `${weekDay}, ${month} ${day}, ${year}`;
}

function formatHour(hour) {
  let hours = hour.getHours();
  let minutes = hour.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `Cloudy, ${hours}:${minutes}`;
}

let currentDay = document.querySelector("#day-weather");
let currentHour = document.querySelector("#hour-weather");
let currentTime = new Date();

currentDay.innerHTML = formatDate(currentTime);
currentHour.innerHTML = formatHour(currentTime);

let key = "6a0bac9dced487830ce6066218a5481c";
let city = "Sydney";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;

function showTemperature(response) {
  console.log(response);
}

axios.get(apiUrl).then(showTemperature);
