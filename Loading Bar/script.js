let innerBar = document.querySelector(".inner");
let percentage = document.querySelector(".percentage");
let percentValue = 0;
console.log(innerBar);
innerBar.style.width = `${percentValue}%`;
percentage.innerHTML = `${percentValue}%`;
setInterval(() => {
	if (percentValue < 100) {
		percentValue++;
		innerBar.style.width = `${percentValue}%`;
		percentage.innerHTML = `${percentValue}%`;
	}
}, 10);
