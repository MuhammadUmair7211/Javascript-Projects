let inputField = document.querySelector(".input-field");
let calculateButton = document.querySelector(".calculate-button");
let displayYears = document.querySelector(".display-years");
let displayMonths = document.querySelector(".display-months");
let displayDays = document.querySelector(".display-days");

calculateButton.addEventListener("click", () => {
	let inputValue = inputField.value;
	let inputBirthDate = new Date(inputValue);
	let todayDate = new Date();
	let calculatedYear = todayDate.getFullYear() - inputBirthDate.getFullYear();
	let todayMonth = todayDate.getMonth() + 1;
	let inputMonth = inputBirthDate.getMonth() + 1;
	let calculatedMonth = todayMonth - inputMonth;
	let today = todayDate.getDate();
	let inputDate = inputBirthDate.getDate();
	let calculatedDays = today - inputDate;
	if (calculatedDays < 0) {
		calculatedMonth--;
		let previousMonth = new Date(
			todayDate.getFullYear(),
			todayDate.getMonth(),
			0
		);
		calculatedDays += previousMonth.getDate();
	}

	// Adjust for negative months
	if (calculatedMonth < 0) {
		calculatedYear--;
		calculatedMonth += 12;
	}

	displayYears.innerHTML = calculatedYear;
	displayMonths.innerHTML = calculatedMonth;
	displayDays.innerHTML = calculatedDays;

	inputField.value = "";
});
