let numbers = document.querySelectorAll(".numbers");
numbers.forEach((number) => {
	let value = parseInt(number.dataset.value);
	let increment = parseInt(value / 100);
	let initialValue = 0;

	let intervalId = setInterval(() => {
		initialValue += increment;
		number.innerHTML = `${initialValue}+`;
		if (initialValue === value) {
			number.innerHTML = `${initialValue}+`;
			clearInterval(intervalId);
			return;
		}
	}, 10);
});
