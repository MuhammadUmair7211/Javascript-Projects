let inputField = document.querySelector(".input-field");
let button = document.querySelector(".fa-magnifying-glass");
button.addEventListener("click", () => {
	inputField.classList.toggle("active");
});
