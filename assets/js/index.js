// variaveis e seleção de elementos
const apiKey = "fed6c194468c75987c1b1fa580e5f8f5";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const paisElement = document.querySelector('#pais');
const tempElement = document.querySelector("#temperature");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const lonElement = document.querySelector('#lon span');
const latElement = document.querySelector('#lat span');

// funções
const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units+metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
};

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    paisElement.innerText = parseInt(data.sys.country);
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
    lonElement.innerText = `lon: ${data.coord.lon}`;
    latElement.innerText = `lat: ${data.coord.lat}`;
};


// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const city = cityInput.value;
    showWeatherData(city);
})