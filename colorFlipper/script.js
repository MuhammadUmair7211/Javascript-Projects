let colorContainer = document.querySelector(".color-container");
let colorCode = document.querySelector(".color-code");
let colorButton = document.querySelector(".color-button");
function colorFlipper() {
	let hex = "#";
	let color = "123456789ABCDEF";
	let char = 6;
	for (let i = 0; i < char; i++) {
		let randomColor = color[Math.floor(Math.random() * 15)];
		hex += randomColor;
	}
	return hex;
}
colorButton.addEventListener("click", () => {
	colorContainer.style.backgroundColor = colorFlipper();
	colorCode.innerHTML = colorFlipper();
});
