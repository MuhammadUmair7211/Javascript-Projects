let buttonContainer = document.getElementsByTagName("button");
let display = document.querySelector(".input-field");
let string = "";
let buttonArray = Array.from(buttonContainer);
buttonArray.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (e.target.innerHTML == "C") {
			string = "";
			display.value = string;
		} else if (e.target.innerHTML == "DEL") {
			string = string.substring(0, string.length - 1);
			display.value = string;
		} else if (e.target.innerHTML == "=") {
			string = eval(string);
			display.value = string;
		} else {
			string += e.target.innerHTML;
			display.value = string;
		}
	});
});
