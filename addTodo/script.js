let inputField = document.querySelector(".input-field");
let addButton = document.querySelector(".add-button");
let orderedList = document.querySelector(".ordered-list");
let deleteButton = document.querySelector(".delete-button");

document.addEventListener("DOMContentLoaded", () => {
	const savedItems = JSON.parse(localStorage.getItem("listItems"));
	savedItems.forEach((item) => {
		let li = document.createElement("li");
		li.classList.add("todo-list-items");
		li.innerHTML = `${item} <button class="delete-button">X</button>`;
		orderedList.appendChild(li);
	});
});

const handleFormSubmit = (e) => {
	e.preventDefault();
	let inputValue = inputField.value.trim();
	if (inputValue === "") return;
	let li = document.createElement("li");
	li.classList.add("todo-list-items");
	li.innerHTML = `${inputValue} <button class="delete-button">X</button>`;
	orderedList.appendChild(li);

	setItemToLocalStorage();
	inputField.value = "";
};
orderedList.addEventListener("click", (e) => {
	if (e.target.classList.contains("delete-button")) {
		e.target.parentElement.remove();
		setItemToLocalStorage();
	}
});
addButton.addEventListener("click", handleFormSubmit);

function setItemToLocalStorage() {
	const listItems = Array.from(orderedList.children).map((li) => {
		return li.textContent.replace("X", "").trim();
	});
	console.log(listItems);
	localStorage.setItem("listItems", JSON.stringify(listItems));
}
