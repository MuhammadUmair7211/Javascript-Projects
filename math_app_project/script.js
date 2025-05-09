let firstNumber = document.querySelector(".first-number");
let secondNumber = document.querySelector(".second-number");
let inputNumber = document.querySelector(".input-number");
let checkButton = document.querySelector(".check-button");
let messagePara = document.querySelector(".message-para");
let calculateFirstNumber, calculateSecondNumber, total;
function generateNewNumbers() {
	calculateFirstNumber = Math.floor(Math.random() * 10);
	calculateSecondNumber = Math.floor(Math.random() * 10);
	total = calculateFirstNumber + calculateSecondNumber;
	firstNumber.innerHTML = calculateFirstNumber;
	secondNumber.innerHTML = calculateSecondNumber;
}
generateNewNumbers();
checkButton.addEventListener("click", () => {
	let inputValue = inputNumber.value;
	if (inputValue && parseInt(inputValue) === total) {
		console.log(`sum is ${total}`);
		messagePara.innerHTML = "You're 100% Right";
		messagePara.style.color = "green";
	} else {
		messagePara.innerHTML = "You're 100% Wrong";
		messagePara.style.color = "red";
	}
	inputNumber.value = "";
	generateNewNumbers();
});
