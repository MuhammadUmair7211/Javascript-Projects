let displayDays = document.querySelector(".days");
let displayHours = document.querySelector(".hours");
let displayMinutes = document.querySelector(".minutes");
let displaySeconds = document.querySelector(".seconds");

setInterval(() => {
	let timeToGo = new Date("2026-01-01 00:00:00").getTime();
	let currentTime = new Date().getTime();
	let remainingTime = timeToGo - currentTime;
	let remainingDays = Math.floor(remainingTime / (1000 * 24 * 60 * 60));
	let remainingHours = Math.floor(
		(remainingTime % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)
	);
	let remainingMinutes = Math.floor(
		(remainingTime % (1000 * 60 * 60)) / (1000 * 60)
	);
	let remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

	displayDays.innerHTML =
		remainingDays < 10 ? "0" + remainingDays : remainingDays;
	displayHours.innerHTML =
		remainingHours < 10 ? "0" + remainingHours : remainingHours;
	displayMinutes.innerHTML =
		remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
	displaySeconds.innerHTML =
		remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
}, 1000);
