let countryContainer = document.querySelector(".countries-container");
let InputSearch = document.querySelector(".input-search");
InputSearch.addEventListener("input", (e) => {
	const filteredCountries = allCountriesData.filter((country) =>
		country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
	);
	renderCountries(filteredCountries);
});
let allCountriesData;
fetch("https://restcountries.com/v3.1/all")
	.then((res) => res.json())
	.then((data) => {
		renderCountries(data);
	});

const selectRegion = document.querySelector(".select-region");
selectRegion.addEventListener("change", (e) => {
	fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
		.then((res) => res.json())
		.then((data) => {
			renderCountries(data);
		});
});

function renderCountries(data) {
	countryContainer.innerHTML = "";
	data.forEach((country) => {
		allCountriesData = data;
		const countryCard = document.createElement("a");
		countryCard.innerHTML = `<a href='country.html?name=${country.name.common}'>
            <div class="country-card">
                <img src="${country.flags.svg}" alt="">
                <div class="country-text">
                    <h3 class="card-title">${country.name.common}</h3>
                    <p><b>Population: </b>${country.population.toLocaleString()}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Capital: </b>${country.capital}</p>
                </div>
            </div>
        </a>`;
		countryContainer.appendChild(countryCard);
	});
}
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const modeText = document.querySelector(".mode-text");
const modeIcon = document.querySelector(".fa-moon");
darkModeToggle.addEventListener("click", () => {
	document.body.classList.toggle("dark-mode");
	localStorage.setItem(
		"darkMode",
		document.body.classList.contains("dark-mode")
	);
	if (document.body.classList.contains("dark-mode")) {
		modeText.innerHTML = "Light Mode";
		modeIcon.classList.remove("fa-moon");
		modeIcon.classList.add("fa-sun");
	} else {
		modeText.innerHTML = "Dark Mode";
		modeIcon.classList.add("fa-moon");
		modeIcon.classList.remove("fa-sun");
	}
});
function getItem() {
	return localStorage.getItem("darkMode");
}

if (getItem() === "true") {
	document.body.classList.add("dark-mode");
} else {
	document.body.classList.remove("dark-mode");
}
