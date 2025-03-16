let previousButton = document.querySelector(".previous-button");
let nextButton = document.querySelector(".next-button");
let imageContainer = document.querySelectorAll(".slider-container img");
let slideNumber = 1;

nextButton.addEventListener("click", () => {
	if (slideNumber < imageContainer.length) {
		imageContainer.forEach((image) => {
			image.style.transform = `translateX(-${slideNumber * 100}%)`;
		});
		slideNumber++;
	} else {
		slideNumber = 1;
		imageContainer.forEach((image) => {
			image.style.transform = `translateX(0%)`;
		});
	}
});
previousButton.addEventListener("click", () => {
	if (slideNumber > 1) {
		slideNumber--;
		imageContainer.forEach((image) => {
			image.style.transform = `translateX(-${(slideNumber - 1) * 100}%)`;
		});
	} else {
		slideNumber = imageContainer.length;
		imageContainer.forEach((image) => {
			image.style.transform = `translateX(-${(slideNumber - 1) * 100}%)`;
		});
	}
});
