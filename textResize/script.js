let rangeSlider = document.querySelector(".slider");
let text = document.querySelector(".text");
let textPixel = document.querySelector(".text-pixel");
rangeSlider.addEventListener("input", () => {
	text.style.fontSize = rangeSlider.value + "px";
	textPixel.innerHTML = rangeSlider.value + "px";
});
