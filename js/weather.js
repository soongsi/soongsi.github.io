const API_KEY = "7e342863600815a041ed6a7d9281bf0e";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const weatherText = {
    "Thunderstorm": "천둥번개",
    "Drizzle": "약한 비",
    "Rain": "비",
    "Snow": "눈",
    "Clear": "맑음",
    "Clouds": "흐림",
    "Atmosphere": "안개"
}

const icon = document.createElement("img");

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        icon.setAttribute("width", "30");
        
        
        weather.innerText = `${Math.floor(data.main.temp)} ℃`;
        city.innerText = data.name;
        weather.append(icon);
        
    });
    
}

function onGeoError() {
    alert("can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);