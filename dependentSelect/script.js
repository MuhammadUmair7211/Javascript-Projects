let selectCountry = document.querySelector(".select-country");
let selectCity = document.querySelector(".select-city");
console.log(selectCity);
let country = ["America", "Pakistan", "India", "Afghanistan", "Bangladesh"];
let cities = {
	America: ["New York", "Chicago", "Washington"],
	Pakistan: ["Islamabad", "Lahore", "Karachi"],
	India: ["New Delhi", "Mumbai", "Jaipur"],
	Afghanistan: ["Kabul", "Kandahar", "Jalalabad"],
	Bangladesh: ["Dhaka", "Chittagong", "Rajshahi"],
};

country.forEach((country) => {
	let option = document.createElement("option");
	option.innerHTML = country;
	selectCountry.appendChild(option);
});

selectCountry.addEventListener("change", (e) => {
	selectCity.innerHTML = `<option value="" hidden>Select Country</option>`;
	cities[e.target.value].forEach((city) => {
		let option = document.createElement("option");
		option.innerHTML = city;
		selectCity.appendChild(option);
	});
});
