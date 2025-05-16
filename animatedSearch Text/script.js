let inputField = document.querySelector(".input-field");
let searchValue = document.querySelector(".search-value");
let inputValue = inputField.value;

inputField.addEventListener("focus", () => {
	searchValue.classList.add("hidden");
});
inputField.addEventListener("blur", () => {
	searchValue.classList.remove("hidden");
});
let values = [
	"Music",
	"Fitness",
	"Grocery",
	"Electronics",
	"Fashion",
	"Kitchen",
	"Beauty",
	"Toys",
	"Sports",
	"Books",
];
let valueIndex = 0;
setInterval(() => {
	if (valueIndex < values.length) {
		searchValue.innerHTML = `"${values[valueIndex]}"`;
		valueIndex = (valueIndex + 1) % values.length;
	} else {
		valueIndex = 0;
	}
}, 2000);
