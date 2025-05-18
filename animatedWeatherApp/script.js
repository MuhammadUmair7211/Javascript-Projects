let cityName = document.querySelector(".city-name");
let countryName = document.querySelector(".country-name");
let inputField = document.querySelector(".input-field");
let date = document.querySelector(".date");
let weatherIcon = document.querySelector(".weather-icon");
let description = document.querySelector(".description");
let temperature = document.querySelector(".temperature");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let searchButton = document.querySelector(".search-button");
let form = document.querySelector(".search-container");

const getWeather = (location) => {
	fetch(
		`https://api.weatherapi.com/v1/current.json?key=470e59384a8a413097f161839241311&q=${location}&aqi=no`
	)
		.then((res) => res.json())
		.then((data) => {
			cityName.textContent = data.location.name;
			countryName.textContent = data.location.country;
			date.textContent = new Date(data.location.localtime).toLocaleString();
			weatherIcon.src = data.current.condition.icon;
			description.textContent = data.current.condition.text;
			temperature.textContent = `${data.current.temp_c}°C`;
			humidity.textContent = `${data.current.humidity}%`;
			wind.textContent = `${data.current.wind_kph}km/h`;
		});
};
getWeather("islamabad");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let inputValue = inputField.value.trim();
	if (inputValue === "") {
		return alert("please enter a location");
	} else {
		getWeather(inputValue);
	}
	inputField.value = "";
});
