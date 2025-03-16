let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let dateDay = document.querySelector(".date-day");
let amPm = document.querySelector(".am");

function updateClock() {
	let now = new Date().toLocaleDateString("en-US", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	dateDay.innerHTML = now;
	let newHours = new Date().getHours();
	let period = newHours >= 12 ? "PM" : "AM";
	amPm.innerHTML = period;
	if (newHours > 12) {
		newHours = newHours - 12;
		hours.innerHTML = newHours < 10 ? "0" + newHours : newHours;
	}
	let newMinutes = new Date().getMinutes();
	minutes.innerHTML = newMinutes < 10 ? "0" + newMinutes : newMinutes;
	let newSeconds = new Date().getSeconds();
	seconds.innerHTML = newSeconds < 10 ? "0" + newSeconds : newSeconds;
}
setInterval(() => {
	updateClock();
}, 1000);
