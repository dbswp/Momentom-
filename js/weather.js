const API_KEY = "31f031c89f4ef85eef29e2f5348eeaa0";

// user의 위치를 받는다
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}6&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `{data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoEr() {
  alert("Can't find you");
}

// 브라우저에서 위치 좌표 줌
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoEr);
