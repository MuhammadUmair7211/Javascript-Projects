let showNotificationButton = document.querySelector(".show-notification");
let notificationContainer = document.querySelector(".notification-container");
let notification = document.querySelector(".notification");

showNotificationButton.addEventListener("click", () => {
	let div = document.createElement("div");
	div.classList.add("notification");
	div.innerHTML = `<p>This is a notification!</p>`;
	notificationContainer.appendChild(div);
	div.style.display = "flex";
	setTimeout(() => {
		div.style.display = "none";
	}, 2000);
});
