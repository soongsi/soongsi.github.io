const API_KEY = "7e342863600815a041ed6a7d9281bf0e";
const temp = document.querySelector("#temp");
const icon = document.querySelector("#icon");
const city = document.querySelector("#city");

const weatherText = {
    "Thunderstorm": "천둥번개",
    "Drizzle": "약한 비",
    "Rain": "비",
    "Snow": "눈",
    "Clear": "맑음",
    "Clouds": "흐림",
    "Atmosphere": "안개"
}

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        
        //icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        
        temp.innerText = `${Math.floor(data.main.temp)} ℃`;
        icon.classList.remove("hidden");
        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        city.innerText = data.name;
        
    });
    
}

function onGeoError() {
    alert("can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);