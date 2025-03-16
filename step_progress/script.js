let stepsContainer = document.querySelector(".steps-container");
let stepsProgressInner = document.querySelector(".step-progress-inner");
let prevButton = document.querySelector(".prev-button");
let nextButton = document.querySelector(".next-button");
let stepArray = [1, 2, 3, 4, 5];
let percentageEachStep = 120 / stepArray.length;
let currentStep = 1;
stepsProgressInner.style.width = `${currentStep * percentageEachStep}%`;
stepArray.map((step) => {
	stepElement = document.createElement("div");
	stepElement.classList.add("step");
	stepElement.innerHTML = step;
	stepElement.innerHTML == 1
		? stepElement.classList.add("progress")
		: stepElement;
	stepsContainer.appendChild(stepElement);
});
nextButton.addEventListener("click", () => {
	prevButton.removeAttribute("disabled");
	let steps = document.querySelectorAll(".step");
	if (currentStep < steps.length) {
		steps[currentStep].classList.add("progress");
		currentStep++;
		stepsProgressInner.style.width = `${currentStep * percentageEachStep}%`;
	} else {
		nextButton.setAttribute("disabled", true);
	}
});
prevButton.addEventListener("click", () => {
	if (currentStep >= 1) {
		nextButton.removeAttribute("disabled");
		let steps = document.querySelectorAll(".step");
		steps[currentStep - 1].classList.remove("progress");
		currentStep--;
		stepsProgressInner.style.width = `${currentStep * percentageEachStep}%`;
	} else {
		prevButton.setAttribute("disabled", true);
	}
});
