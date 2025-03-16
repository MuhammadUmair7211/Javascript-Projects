let name = prompt("Please Enter Your Name:", "Javascript Brat!");
let container = document.querySelector(".container");
let hours = new Date().getHours();
if (hours < 12) {
	let message = `<h2>Good Morning, ${name}!</h2>`;
	container.innerHTML = message;
} else if (hours > 12 && hours < 18) {
	let message = `<h2>Good Afternoon, ${name}!</h2>`;
	container.innerHTML = message;
} else {
	let message = `<h2>Good Evening, ${name}!</h2>`;
	container.innerHTML = message;
}
