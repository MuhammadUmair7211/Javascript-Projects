let inputField = document.querySelector(".input-field");
let calculateButton = document.querySelector(".calculate-button");
let display = document.querySelector(".display");
let value;
inputField.addEventListener("change", (e) => {
	value = e.target.value.length;
});
calculateButton.addEventListener("click", (e) => {
	e.preventDefault();
	display.innerHTML = value;
});
