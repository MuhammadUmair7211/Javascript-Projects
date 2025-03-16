function generateColorsCode() {
	let colors = "0123456789ABCDEF";
	let chars = 6;
	let colorCode = "#";
	for (var i = 0; i < chars; i++) {
		let randomNumber = colors[Math.floor(Math.random() * colors.length)];
		colorCode += randomNumber;
	}
	return colorCode;
}

let colorContainer = document.querySelector(".color-container");
for (let index = 1; index < 20; index++) {
	let colorElement = document.createElement("div");
	colorElement.classList.add("color");
	colorContainer.appendChild(colorElement);
}
let colorContainerElements = document.querySelectorAll(".color");
colorContainerElements.forEach((colorContainers) => {
	const newColor = generateColorsCode();
	colorContainers.style.backgroundColor = newColor;
	colorContainers.innerHTML = newColor;
});
